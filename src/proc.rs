use procfs::ProcResult;

pub mod msg {
    include!(concat!(env!("OUT_DIR"), "/sysmon_web.msg.rs"));
}

pub struct Proc {
    prev_idle: Vec<u64>,
    prev_busy: Vec<u64>,
}

impl Proc {
    pub fn new() -> ProcResult<Proc> {
        let kernel_stats = procfs::KernelStats::new()?;
        Ok(Proc {
            prev_idle: kernel_stats
                .cpu_time
                .iter()
                .map(|t| Self::cpu_idle(t.clone()))
                .collect(),
            prev_busy: kernel_stats
                .cpu_time
                .iter()
                .map(|t| Self::cpu_busy(t.clone()))
                .collect(),
        })
    }

    pub fn get_stats(&mut self) -> ProcResult<msg::Stat> {
        let uptime = procfs::Uptime::new()?;
        let kernel_stats = procfs::KernelStats::new()?;
        let mem_info = procfs::Meminfo::new()?;

        let cpu_time = kernel_stats
            .cpu_time
            .iter()
            .map(|t| msg::CpuTime {
                user: t.user,
                nice: t.nice,
                system: t.system,
                idle: t.idle,
                iowait: t.iowait.unwrap(),
                irq: t.irq.unwrap(),
                softirq: t.softirq.unwrap(),
                steal: t.steal.unwrap(),
                guest: t.guest.unwrap(),
                guest_nice: t.guest_nice.unwrap(),
            })
            .collect();

        let cpu_delta_idle: Vec<u64> = self
            .prev_idle
            .iter()
            .zip(kernel_stats.cpu_time.iter())
            .map(|(p, stats)| Self::cpu_idle(stats.clone()) - p)
            .collect();

        let cpu_delta_busy: Vec<u64> = self
            .prev_busy
            .iter()
            .zip(kernel_stats.cpu_time.iter())
            .map(|(p, stats)| Self::cpu_busy(stats.clone()) - p)
            .collect();

        self.prev_idle = kernel_stats
            .cpu_time
            .iter()
            .map(|t| Self::cpu_idle(t.clone()))
            .collect();

        self.prev_busy = kernel_stats
            .cpu_time
            .iter()
            .map(|t| Self::cpu_busy(t.clone()))
            .collect();

        Ok(msg::Stat {
            uptime: uptime.uptime,
            cpu_time,
            mem_total: mem_info.mem_total,
            mem_free: mem_info.mem_free,
            mem_available: mem_info.mem_available.unwrap(),
            cpu_usage: cpu_delta_busy
                .iter()
                .zip(cpu_delta_idle.iter())
                .map(|(&busy, &idle)| busy as f64 / (idle as f64 + busy as f64))
                .collect(),
        })
    }

    fn cpu_idle(cpu_time: procfs::CpuTime) -> u64 {
        cpu_time.idle + cpu_time.iowait.unwrap()
    }

    fn cpu_busy(cpu_time: procfs::CpuTime) -> u64 {
        cpu_time.user
            + cpu_time.nice
            + cpu_time.system
            + cpu_time.irq.unwrap()
            + cpu_time.softirq.unwrap()
            + cpu_time.steal.unwrap()
    }
}
