use procfs::ProcResult;

pub struct Proc {
    pub uptime: f64,
}

impl Proc {
    pub fn new() -> ProcResult<Proc> {
        let uptime = procfs::Uptime::new()?;
        Ok(Proc {
            uptime: uptime.uptime,
        })
    }
}
