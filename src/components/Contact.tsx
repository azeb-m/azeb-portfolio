
import { Mail, MapPin } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-blue-500/5 p-8 text-center sm:p-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
          Get in touch
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Let's Connect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
          I am interested in connecting with people working in artificial
          intelligence, machine learning, data science, and technology.
          Feel free to explore my work and connect with me.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/azeb-m"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 font-medium transition hover:bg-violet-500"
          >
            <FaGithub size={19} /> GitHub
          </a>

          <a
            href="mailto:YOUR_EMAIL_ADDRESS"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-medium transition hover:border-violet-400 hover:text-violet-300"
          >
            <Mail size={19} /> Email
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-400">
          <MapPin size={16} /> Addis Ababa, Ethiopia
        </div>
      </div>
    </section>
  )
}
