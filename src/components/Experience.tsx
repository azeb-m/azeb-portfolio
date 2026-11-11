
import { BriefcaseBusiness, MapPin, CalendarDays } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            My professional journey
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Experience</h2>
        </div>

        <div className="relative border-l border-violet-400/30 pl-8">
          <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-[#080b16] bg-violet-400" />

          <div className="rounded-3xl border border-white/10 bg-[#0c1020] p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-300">
                  <BriefcaseBusiness size={25} />
                </div>

                <h3 className="text-2xl font-semibold">Officer II – IT Support Services</h3>
                <p className="mt-2 text-lg text-violet-300">Zemen Bank</p>
              </div>

              <span className="rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
                Current Role
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CalendarDays size={16} /> March 2025 – Present
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Addis Ababa, Ethiopia
              </span>
            </div>

            <div className="mt-8">
              <h4 className="mb-4 font-semibold">Key Responsibilities</h4>
              <ul className="space-y-3 text-sm leading-7 text-slate-400">
                <li>• Provide technical support and troubleshoot hardware and software issues.</li>
                <li>• Support enterprise IT infrastructure and system configurations.</li>
                <li>• Participate in on-site IT equipment verification and preventive maintenance.</li>
                <li>• Assist with IT service operations and technical issue resolution across bank branches.</li>
                <li>• Support IT documentation and operational procedures.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
