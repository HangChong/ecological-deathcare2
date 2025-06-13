import React from 'react'
import { FileText, Heart, Leaf, MapPin, Shield, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Legacy Planning',
      description: 'Comprehensive planning tools for wills, trusts, and end-of-life preferences with eco-conscious options.',
      features: ['Digital will creation', 'Green burial planning', 'Asset distribution', 'Healthcare directives']
    },
    {
      icon: Heart,
      title: 'Gentle Departures',
      description: 'Compassionate guidance and resources for peaceful transitions and mindful end-of-life care.',
      features: ['Hospice resources', 'Meditation guides', 'Family support', 'Spiritual guidance']
    },
    {
      icon: Leaf,
      title: 'Eco Memorials',
      description: 'Sustainable memorial options that honor loved ones while caring for the environment.',
      features: ['Tree planting', 'Biodegradable urns', 'Memorial gardens', 'Carbon offset programs']
    },
    {
      icon: Users,
      title: 'Family Support',
      description: 'Tools and resources to help families navigate grief and celebrate life together.',
      features: ['Grief counseling', 'Memory sharing', 'Support groups', 'Celebration planning']
    },
    {
      icon: Shield,
      title: 'Legal Guidance',
      description: 'Expert legal support for estate planning, probate, and memorial arrangements.',
      features: ['Attorney network', 'Document review', 'Probate assistance', 'Legal compliance']
    },
    {
      icon: MapPin,
      title: 'Location Services',
      description: 'Find eco-friendly funeral homes, memorial sites, and green burial grounds near you.',
      features: ['Provider directory', 'Location mapping', 'Reviews & ratings', 'Booking assistance']
    }
  ]

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Care for Every Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From planning to celebration, we provide thoughtful, sustainable solutions 
            that honor life while protecting our planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200 group"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Planning?</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Take the first step towards creating a meaningful legacy that reflects your values 
              and cares for future generations.
            </p>
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg">
              Start Your Legacy Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
