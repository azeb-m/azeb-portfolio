
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BrainCircuit,
  Sun,
  TrendingUp,
  ChartNoAxesCombined,
  Globe,
  Database,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'RAG Financial Complaint Chatbot',
    category: 'Generative AI · NLP',
    description:
      'A retrieval-augmented generation application using financial consumer complaint data. It combines semantic search and language models to retrieve relevant information and support question answering.',
    technologies: ['Python', 'RAG', 'NLP', 'Embeddings', 'Vector Search'],
    icon: BrainCircuit,
    github: 'https://github.com/azeb-m/rag-complaint-chatbot',
  },
  {
    number: '02',
    title: 'Solar Radiation Data Analysis',
    category: 'Data Science · Exploratory Analysis',
    description:
      'An analysis of solar radiation and environmental data, using data preparation, exploratory analysis, and visualization to investigate patterns and compare solar measurements.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    icon: Sun,
    github: 'https://github.com/azeb-m/solar-challenge-week0',
  },
  {
    number: '03',
    title: 'Time-Series Forecasting',
    category: 'Machine Learning · Forecasting',
    description:
      'A forecasting project that explores historical time-dependent data, applies analytical and predictive techniques, and evaluates model performance.',
    technologies: ['Python', 'Time Series', 'Forecasting', 'Statistics'],
    icon: TrendingUp,
    github: 'https://github.com/azeb-m/Time-series-forecasting',
  },
  {
    number: '04',
    title: 'Brent Oil Price & Change Point Analysis',
    category: 'Statistical Analysis · Financial Data',
    description:
      'An investigation of historical Brent oil price movements, using statistical modeling and change-point analysis to study shifts in price behavior over time.',
    technologies: ['Python', 'Bayesian Analysis', 'PyMC', 'Time Series'],
    icon: ChartNoAxesCombined,
    github:
      'https://github.com/azeb-m/Change-Point-Analysis-and-Statistical-Modeling',
  },
  {
    number: '05',
    title: 'Forecasting Financial Inclusion',
    category: 'Data Science · Financial Inclusion',
    description:
      'A data science project focused on forecasting financial inclusion indicators and exploring patterns related to access to and use of financial services.',
    technologies: ['Python', 'Pandas', 'Forecasting', 'Data Analysis'],
    icon: Globe,
    github: 'https://github.com/azeb-m/Forecasting-Financial-Inclusion',
  },
  {
    number: '06',
    title: 'Medical Telegram Data Warehouse',
    category: 'Data Engineering · Analytics',
    description:
      'An end-to-end data engineering project focused on collecting and organizing medical-related Telegram data, transforming it into structured data, and making it available for analytical use.',
    technologies: ['Python', 'PostgreSQL', 'dbt', 'FastAPI', 'Dagster'],
    icon: Database,
    github: 'https://github.com/azeb-m/medical-telegram-warehouse',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-violet-400 font-medium tracking-widest uppercase text-sm mb-3">
            My Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Featured <span className="text-violet-400">Projects</span>
          </h2>

          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Selected projects demonstrating my experience in artificial
            intelligence, machine learning, data science, statistical
            modeling, and data engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:border-violet-500/50 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center group-hover:bg-violet-500 group-hover:text-white transition-all">
                    <Icon size={23} />
                  </div>

                  <span className="text-slate-600 text-sm font-mono">
                    {project.number}
                  </span>
                </div>

                <p className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors pt-4 border-t border-white/10"
                >
                  View on GitHub
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </a>
              </motion.article>
            )
          })}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/azeb-m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 px-7 py-3 text-white hover:bg-violet-500/10 transition-all"
          >
            Explore More on GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
