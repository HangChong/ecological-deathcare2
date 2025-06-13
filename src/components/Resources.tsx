import React, { useState } from 'react'
import { BookOpen, Download, ExternalLink, FileText, Heart, Leaf, Phone, Users, Video } from 'lucide-react'

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('guides')

  const categories = [
    { id: 'guides', label: 'Planning Guides', icon: BookOpen },
    { id: 'legal', label: 'Legal Resources', icon: FileText },
    { id: 'support', label: 'Grief Support', icon: Heart },
    { id: 'green', label: 'Green Options', icon: Leaf },
    { id: 'community', label: 'Community', icon: Users }
  ]

  const resources = {
    guides: [
      {
        title: 'Complete Legacy Planning Guide',
        description: 'A comprehensive 50-page guide covering all aspects of end-of-life planning.',
        type: 'PDF Download',
        icon: Download,
        featured: true
      },
      {
        title: 'Green Burial Options Explained',
        description: 'Understanding eco-friendly burial and memorial options available today.',
        type: 'Article',
        icon: BookOpen
      },
      {
        title: 'Talking to Family About End-of-Life Wishes',
        description: 'Tips and conversation starters for difficult but important discussions.',
        type: 'Video Guide',
        icon: Video
      },
      {
        title: 'Digital Legacy Management',
        description: 'How to manage your online presence and digital assets after death.',
        type: 'Interactive Tool',
        icon: ExternalLink
      }
    ],
    legal: [
      {
        title: 'Will and Testament Templates',
        description: 'State-specific legal templates for creating your will.',
        type: 'Legal Forms',
        icon: FileText,
        featured: true
      },
      {
        title: 'Healthcare Directive Forms',
        description: 'Advanced directives and healthcare proxy documentation.',
        type: 'Legal Forms',
        icon: FileText
      },
      {
        title: 'Estate Planning Checklist',
        description: 'Step-by-step checklist for comprehensive estate planning.',
        type: 'Checklist',
        icon: Download
      },
      {
        title: 'Probate Process Guide',
        description: 'Understanding the probate process and how to navigate it.',
        type: 'Guide',
        icon: BookOpen
      }
    ],
    support: [
      {
        title: '24/7 Grief Support Hotline',
        description: 'Immediate support from trained grief counselors available anytime.',
        type: 'Phone Support',
        icon: Phone,
        featured: true
      },
      {
        title: 'Online Support Groups',
        description: 'Connect with others who understand your journey through loss.',
        type: 'Community',
        icon: Users
      },
      {
        title: 'Meditation for Grief',
        description: 'Guided meditations specifically designed for those experiencing loss.',
        type: 'Audio Resources',
        icon: Heart
      },
      {
        title: 'Children and Grief Resources',
        description: 'Age-appropriate resources for helping children cope with loss.',
        type: 'Family Resources',
        icon: BookOpen
      }
    ],
    green: [
      {
        title: 'Eco-Friendly Provider Directory',
        description: 'Find green funeral homes, burial grounds, and memorial services near you.',
        type: 'Directory',
        icon: ExternalLink,
        featured: true
      },
      {
        title: 'Carbon Footprint Calculator',
        description: 'Compare the environmental impact of different memorial options.',
        type: 'Calculator',
        icon: Leaf
      },
      {
        title: 'Biodegradable Urn Guide',
        description: 'Options for eco-friendly urns and their environmental benefits.',
        type: 'Product Guide',
        icon: BookOpen
      },
      {
        title: 'Memorial Tree Planting',
        description: 'How to establish a living memorial through tree planting programs.',
        type: 'Program Info',
        icon: Leaf
      }
    ],
    community: [
      {
        title: 'Local Support Groups',
        description: 'Find in-person support groups and community resources in your area.',
        type: 'Local Resources',
        icon: Users,
        featured: true
      },
      {
        title: 'Volunteer Opportunities',
        description: 'Ways to give back and support others in their time of need.',
        type: 'Volunteer',
        icon: Heart
      },
      {
        title: 'Memorial Events Calendar',
        description: 'Community memorial services, remembrance events, and celebrations of life.',
        type: 'Events',
        icon: ExternalLink
      },
      {
        title: 'Share Your Story',
        description: 'Platform for sharing memories and connecting with others.',
        type: 'Community Platform',
        icon: Users
      }
    ]
  }

  const currentResources = resources[activeCategory] || []

  return (
    <section className="py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resources & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive resources, tools, and support to help you navigate 
            every aspect of legacy planning and memorial creation.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentResources.map((resource, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                resource.featured ? 'ring-2 ring-emerald-200 relative' : ''
              }`}
            >
              {resource.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-3 rounded-lg">
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center space-x-1">
                      <span>Access</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Support */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Immediate Support?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              If you're experiencing a crisis or need immediate emotional support, 
              help is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 shadow-lg flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Crisis Hotline: 988</span>
              </button>
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 border border-red-400 flex items-center justify-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Chat Support</span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest resources, guides, and support 
              for conscious legacy planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
