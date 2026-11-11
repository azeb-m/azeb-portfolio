
import { GraduationCap, BriefcaseBusiness, BrainCircuit } from 'lucide-react'
import { motion } from 'motion/react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BSc in Information Systems, Addis Ababa University, 2024.',
  },
  {
    icon: BrainCircuit,
    title: 'AI & Data Science',
    description: 'Completed the 10 Academy AI Mastery Training Program in 2026.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional Experience',
    description: 'IT Support Services professional at Zemen Bank.',
  },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Get to know me
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">About Me</h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-9 text-slate-300">
              I am an Information Systems graduate from Addis Ababa University
              with a strong interest in artificial intelligence, machine
              learning, and data science.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              My experience in enterprise IT support has helped me develop
              practical problem-solving and troubleshooting skills. I am
              interested in combining this experience with data and AI
              technologies to develop useful, reliable solutions.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              I enjoy learning new technologies, exploring data, and working
              on projects that turn complex problems into practical solutions.
            </p>
          </motion.div>

          <div className="space-y-5">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="h-fit rounded-xl bg-violet-500/10 p-3 text-violet-300">
                    <Icon size={25} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
