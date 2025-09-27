import { Instagram, Linkedin, Youtube, ExternalLink } from "lucide-react"
import React from 'react'
const SocialMediaWidget = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      hoverColor: "from-pink-600 to-purple-700",
      description: "Follow our daily cleaning tips and before/after photos",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-700 to-blue-800",
      description: "Connect with us professionally and see our business updates",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: Youtube,
      color: "from-red-600 to-red-700",
      hoverColor: "from-red-700 to-red-800",
      description: "Watch our cleaning tutorials and service demonstrations",
    },
  ]

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Connect With Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest cleaning tips, behind-the-scenes content, and special offers across all our
            social media platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon
            return (
              <div
                key={social.name}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${social.color} rounded-full mb-6 shadow-lg`}
                  >
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{social.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{social.description}</p>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${social.color} hover:${social.hoverColor} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    Follow Us
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#4D757B] to-[#5A8A91] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Updates</h3>
            <p className="text-lg mb-6 opacity-90">
              Follow us on social media for cleaning tips, special promotions, and behind-the-scenes content!
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent size={24} className="text-white" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaWidget
