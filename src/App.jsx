import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Footer from './components/Footer'
import { content } from './data/content'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero content={content.profile} />
        <About content={content.profile} />
        <Skills content={content.skills} />
        <Experience content={content.experience} />
      </main>
      <Footer content={content.profile} />
    </div>
  )
}

export default App
