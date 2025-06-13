import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Planning from './components/Planning'
import Memorial from './components/Memorial'
import Resources from './components/Resources'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero setActiveSection={setActiveSection} />
          <Services />
        </>
      )}
      
      {activeSection === 'planning' && <Planning />}
      {activeSection === 'memorial' && <Memorial />}
      {activeSection === 'resources' && <Resources />}
      
      <Footer />
    </div>
  )
}

export default App
