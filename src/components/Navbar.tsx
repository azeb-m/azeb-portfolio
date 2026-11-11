
import { useState } from 'react'
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from 'lucide-react'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

interface NavbarProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Navbar({
  isDark,
  toggleTheme,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#080b16]/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
        >
          Azeb<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-600 transition hover:text-violet-500 dark:text-slate-400 dark:hover:text-violet-300"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label={
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            }
            title={
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-200 p-2.5 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
            aria-label={
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-800 dark:text-white"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-[#080b16] md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-700 transition hover:text-violet-500 dark:text-slate-300 dark:hover:text-violet-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
