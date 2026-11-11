
import { useEffect, useState, type ComponentType } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

type NavbarProps = {
  isDark: boolean
  toggleTheme: () => void
}

const ThemedNavbar = Navbar as unknown as ComponentType<NavbarProps>

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')

    return savedTheme ? savedTheme === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)

    localStorage.setItem(
      'portfolio-theme',
      isDark ? 'dark' : 'light'
    )
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((currentTheme) => !currentTheme)
  }

  return (
    <>
      <ThemedNavbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
