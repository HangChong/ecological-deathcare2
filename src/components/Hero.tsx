import React from 'react'
import { ArrowRight, Heart, Leaf, Users } from 'lucide-react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          alt="Peaceful forest landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-800/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Honor Life with
                <span className="block bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
                  Conscious Legacy
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                A compassionate platform for green legacy planning, gentle departures, 
                and meaningful memorials that celebrate life while nurturing the earth.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="font-medium text-gray-800">Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="font-medium text-gray-800">Compassionate</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-lg p-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="font-medium text-gray-800">Community</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActiveSection('planning')}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Begin Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setActiveSection('memorial')}
                className="bg-white/90 backdrop-blur-sm text-emerald-700 px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl border border-emerald-200"
              >
                Explore Memorials
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Peaceful memorial garden"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Creating Lasting Memories
                </h3>
                <p className="text-gray-600">
                  Thoughtful planning for life's most important moments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
