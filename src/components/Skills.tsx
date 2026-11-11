
import { Code2, BrainCircuit, Database, Server, Wrench } from 'lucide-react'

const skillGroups = [
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Generative AI', 'NLP', 'RAG', 'Scikit-learn'],
  },
  {
    icon: Code2,
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    icon: Database,
    title: 'Data Science',
    skills: ['Pandas', 'NumPy', 'EDA', 'Data Visualization', 'Statistical Analysis'],
  },
  {
    icon: Server,
    title: 'Backend & Databases',
    skills: ['Django', 'Spring Boot', 'PostgreSQL', 'MySQL', 'REST APIs'],
  },
  {
    icon: Wrench,
    title: 'IT & Tools',
    skills: ['Git', 'GitHub', 'Linux', 'Windows', 'PowerShell', 'Networking'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            What I work with
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Technical Skills</h2>
          <p className="mt-5 max-w-2xl leading-8 text-slate-400">
            Technologies and tools I use across AI, data science, software
            development, and enterprise IT support.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-white/10 bg-[#0c1020] p-7 transition hover:-translate-y-1 hover:border-violet-400/40"
              >
                <div className="mb-6 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-300">
                  <Icon size={26} />
                </div>
                <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
