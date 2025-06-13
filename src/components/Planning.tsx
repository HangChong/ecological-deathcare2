import React, { useState } from 'react'
import { CheckCircle, FileText, Heart, Leaf, Shield, Users } from 'lucide-react'

const Planning = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    personalInfo: {},
    preferences: {},
    assets: {},
    beneficiaries: {}
  })

  const steps = [
    {
      id: 1,
      title: 'Personal Information',
      icon: Users,
      description: 'Basic details and contact information'
    },
    {
      id: 2,
      title: 'End-of-Life Preferences',
      icon: Heart,
      description: 'Your wishes for care and ceremonies'
    },
    {
      id: 3,
      title: 'Asset Planning',
      icon: Shield,
      description: 'Property, investments, and valuables'
    },
    {
      id: 4,
      title: 'Green Options',
      icon: Leaf,
      description: 'Eco-friendly choices and sustainability'
    },
    {
      id: 5,
      title: 'Review & Finalize',
      icon: FileText,
      description: 'Review your plan and create documents'
    }
  ]

  const greenOptions = [
    {
      title: 'Natural Burial',
      description: 'Biodegradable casket or shroud in a natural setting',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Tree Memorial',
      description: 'Plant a tree in memory with biodegradable urn',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Ocean Reef',
      description: 'Become part of an artificial reef ecosystem',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Conservation Land',
      description: 'Burial in protected conservation areas',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Legacy Planning Wizard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create a comprehensive plan that reflects your values and ensures your wishes are honored.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Steps */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-6">Planning Steps</h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      activeStep === step.id
                        ? 'bg-emerald-50 border border-emerald-200'
                        : activeStep > step.id
                        ? 'bg-green-50 border border-green-200'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className={`p-2 rounded-lg ${
                      activeStep === step.id
                        ? 'bg-emerald-500 text-white'
                        : activeStep > step.id
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {activeStep > step.id ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <step.icon className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${
                        activeStep >= step.id ? 'text-gray-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {activeStep === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your full address"
                    />
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Green Memorial Options</h2>
                  <p className="text-gray-600 mb-8">
                    Choose eco-friendly options that honor your memory while caring for the environment.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {greenOptions.map((option, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:border-emerald-300 transition-colors cursor-pointer group"
                      >
                        <img
                          src={option.image}
                          alt={option.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {option.title}
                          </h3>
                          <p className="text-gray-600">
                            {option.description}
                          </p>
                          <div className="mt-4">
                            <label className="flex items-center">
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                              />
                              <span className="ml-2 text-sm text-gray-700">
                                I'm interested in this option
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-emerald-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-900 mb-3">
                      Environmental Impact
                    </h3>
                    <p className="text-emerald-800 mb-4">
                      Your green choices can make a lasting positive impact:
                    </p>
                    <ul className="space-y-2 text-emerald-700">
                      <li className="flex items-center">
                        <Leaf className="h-4 w-4 mr-2" />
                        Reduce carbon footprint by up to 90%
                      </li>
                      <li className="flex items-center">
                        <Leaf className="h-4 w-4 mr-2" />
                        Preserve natural habitats and ecosystems
                      </li>
                      <li className="flex items-center">
                        <Leaf className="h-4 w-4 mr-2" />
                        Support conservation efforts
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(5, activeStep + 1))}
                  className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg hover:from-emerald-600 hover:to-green-700"
                >
                  {activeStep === 5 ? 'Complete Plan' : 'Next Step'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Planning
