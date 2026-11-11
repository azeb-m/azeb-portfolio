
import {  ArrowUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Azeb Mehrete Belay. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/azeb-m"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate-400 transition hover:text-violet-300"
          >
            <FaGithub size={20} /> GitHub
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="rounded-full border border-white/10 p-2 text-slate-400 transition hover:border-violet-400 hover:text-violet-300"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
