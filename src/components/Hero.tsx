
import { motion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Code2,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Information Systems Graduate · Addis Ababa, Ethiopia
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            Azeb Mehrete
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Belay.
            </span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">
            AI & Machine Learning Enthusiast
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            I am an Information Systems graduate and IT professional
            passionate about artificial intelligence, machine learning,
            and data science. I enjoy transforming data into meaningful
            insights and building intelligent solutions to real-world problems.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 font-medium transition hover:-translate-y-1 hover:bg-violet-500"
            >
              Explore My Work <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/azeb-m"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium transition hover:border-violet-400 hover:text-violet-300"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold">B.Sc.</p>
              <p className="mt-1 text-xs text-slate-500">Information Systems</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold">2024</p>
              <p className="mt-1 text-xs text-slate-500">Graduate</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold">AI/ML</p>
              <p className="mt-1 text-xs text-slate-500">Career Focus</p>
            </div>
          </div>
        </motion.div>

        {/* Technology visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[90px]" />

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">

            <div className="mb-10 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-400">
                MY TECHNICAL FOCUS
              </span>
              <BrainCircuit className="text-violet-400" size={25} />
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-2xl border border-violet-400/20 bg-violet-400/10 p-5">
                <div className="rounded-xl bg-violet-500/20 p-3 text-violet-300">
                  <BrainCircuit size={27} />
                </div>
                <div>
                  <h3 className="font-semibold">Artificial Intelligence</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Generative AI · NLP · RAG
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                  <Database size={27} />
                </div>
                <div>
                  <h3 className="font-semibold">Data Science</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Machine Learning · Analytics
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="rounded-xl bg-cyan-500/20 p-3 text-cyan-300">
                  <Code2 size={27} />
                </div>
                <div>
                  <h3 className="font-semibold">Data Engineering</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Python · SQL · Data Pipelines
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm text-slate-500">
                Turning data into intelligence.
              </span>
              <span className="text-violet-400">✦</span>
            </div>
          </div>
        </motion.div>

      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  )
}
