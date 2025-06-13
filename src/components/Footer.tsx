import React from 'react'
import { Facebook, Instagram, Leaf, Mail, MapPin, Phone, Twitter } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    services: [
      'Legacy Planning',
      'Green Burials',
      'Memorial Services',
      'Legal Support',
      'Grief Counseling',
      'Family Resources'
    ],
    resources: [
      'Planning Guides',
      'Legal Forms',
      'Support Groups',
      'Provider Directory',
      'Educational Videos',
      'FAQ'
    ],
    company: [
      'About Us',
      'Our Mission',
      'Privacy Policy',
      'Terms of Service',
      'Contact Us',
      'Careers'
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EverGreen</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Compassionate legacy planning and eco-friendly memorial services 
              that honor life while caring for our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-400">1-800-EVERGREEN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-400">support@evergreen.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400 mt-1" />
                <span className="text-gray-400">
                  123 Green Valley Road<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="mt-8 p-4 bg-red-900/30 rounded-lg border border-red-800">
              <h4 className="font-semibold text-red-300 mb-2">24/7 Crisis Support</h4>
              <p className="text-red-200 text-sm mb-2">
                If you're in crisis, help is available immediately.
              </p>
              <a href="tel:988" className="text-red-300 hover:text-red-200 font-medium">
                Call 988 - Suicide & Crisis Lifeline
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 EverGreen. All rights reserved. Built with compassion and care.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
