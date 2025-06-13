import React from 'react'
import { Leaf, Menu, X } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'planning', label: 'Legacy Planning' },
    { id: 'memorial', label: 'Memorials' },
    { id: 'resources', label: 'Resources' }
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
              EverGreen
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => setActiveSection('planning')}
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Start Planning
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`px-3 py-2 rounded-md text-left font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => {
                  setActiveSection('planning')
                  setIsMenuOpen(false)
                }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-lg font-medium mt-4"
              >
                Start Planning
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
