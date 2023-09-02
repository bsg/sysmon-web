use std::io::Result;
fn main() -> Result<()> {
    prost_build::compile_protos(&["./sysmon_web.proto"], &["./"])?;
    Ok(())
}