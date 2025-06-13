import React, { useState } from 'react'
import { Calendar, Heart, MapPin, Search, Star, Users } from 'lucide-react'

const Memorial = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Memorials' },
    { id: 'recent', label: 'Recent' },
    { id: 'trees', label: 'Tree Memorials' },
    { id: 'gardens', label: 'Memorial Gardens' },
    { id: 'conservation', label: 'Conservation' }
  ]

  const memorials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      dates: '1952 - 2023',
      type: 'Tree Memorial',
      location: 'Redwood National Park, CA',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1dedc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A beautiful oak tree planted in memory of Sarah, who dedicated her life to environmental conservation.',
      visitors: 127,
      category: 'trees'
    },
    {
      id: 2,
      name: 'Michael Chen',
      dates: '1968 - 2023',
      type: 'Memorial Garden',
      location: 'Golden Gate Park, San Francisco',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A peaceful garden space with native wildflowers, reflecting Michael\'s love for nature and community.',
      visitors: 89,
      category: 'gardens'
    },
    {
      id: 3,
      name: 'Eleanor Rodriguez',
      dates: '1945 - 2023',
      type: 'Conservation Memorial',
      location: 'Yellowstone National Park, WY',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A protected wildlife habitat established in Eleanor\'s honor, supporting local ecosystem restoration.',
      visitors: 203,
      category: 'conservation'
    },
    {
      id: 4,
      name: 'David Thompson',
      dates: '1960 - 2023',
      type: 'Ocean Memorial',
      location: 'Monterey Bay, CA',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'An artificial reef memorial supporting marine life, honoring David\'s passion for ocean conservation.',
      visitors: 156,
      category: 'conservation'
    },
    {
      id: 5,
      name: 'Maria Santos',
      dates: '1955 - 2023',
      type: 'Butterfly Garden',
      location: 'Central Park, New York',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A vibrant butterfly garden with native plants, celebrating Maria\'s love for pollinators and urban nature.',
      visitors: 94,
      category: 'gardens'
    },
    {
      id: 6,
      name: 'Robert Kim',
      dates: '1972 - 2023',
      type: 'Memorial Forest',
      location: 'Olympic National Forest, WA',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'A grove of cedar trees planted in Robert\'s memory, creating a lasting legacy for future generations.',
      visitors: 178,
      category: 'trees'
    }
  ]

  const filteredMemorials = memorials.filter(memorial => {
    const matchesSearch = memorial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memorial.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memorial.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || memorial.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Memorial Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore beautiful memorials that celebrate life while nurturing our planet. 
            Each memorial tells a unique story of love, legacy, and environmental stewardship.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search memorials by name, location, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Memorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemorials.map((memorial) => (
            <div
              key={memorial.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={memorial.image}
                  alt={memorial.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-emerald-700">
                  {memorial.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {memorial.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{memorial.dates}</p>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {memorial.location}
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {memorial.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    {memorial.visitors} visitors
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium">
                      Visit Memorial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Memorial CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Create a Living Memorial</h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Honor your loved one with a beautiful, eco-friendly memorial that gives back to nature 
              and creates a lasting positive impact on the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-lg">
                Plan a Memorial
              </button>
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 border border-emerald-400">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memorial
