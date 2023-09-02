mod proc;

use futures::{SinkExt, StreamExt, TryFutureExt};
use tokio::time::{sleep, Duration};

use warp::ws::WebSocket;
use warp::Filter;

pub mod sysmon_web {
    pub mod msg {
        include!(concat!(env!("OUT_DIR"), "/sysmon_web.msg.rs"));
    }
}
use sysmon_web::msg;

use crate::proc::Proc;

#[tokio::main]
async fn main() {
    let index = warp::get()
        .and(warp::path::end())
        .and(warp::fs::dir("./dashboard/.next/server/app"));

    let static_files = warp::get()
        .and(warp::path("_next"))
        .and(warp::fs::dir("./dashboard/.next"));

    let stats = warp::path("stats")
        .and(warp::ws())
        .map(|ws: warp::ws::Ws| ws.on_upgrade(move |socket| client_connection(socket)));

    let routes = index.or(static_files).or(stats);

    warp::serve(routes).run(([127, 0, 0, 1], 8080)).await;
}

async fn client_connection(ws: WebSocket) {
    eprintln!("New connection");

    let (mut user_ws_tx, mut _user_ws_rx) = ws.split();

    let task = tokio::task::spawn(async move {
        let mut run = true;
        while run {
            use prost::Message;

            sleep(Duration::from_secs(1)).await;

            let mut msg = msg::Stat::default();
            msg.uptime = Proc::new().unwrap().uptime;

            let mut buf: Vec<u8> = Vec::new();
            buf.reserve(msg.encoded_len());

            match msg.encode(&mut buf) {
                Ok(_) => (),
                Err(_) => eprintln!("ERROR"),
            }

            user_ws_tx
                .send(warp::ws::Message::binary(buf))
                .unwrap_or_else(|e| {
                    eprintln!("websocket send error: {}", e);
                    run = false;
                })
                .await;
        }
    });

    task.await.unwrap();
}
