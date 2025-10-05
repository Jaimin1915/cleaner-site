import React from "react"
import { ExternalLink } from "lucide-react"

const SocialMediaWidget = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      description: "Follow our daily cleaning tips and before/after photos",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      description: "Connect with us professionally and see our business updates",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg",
      description: "Watch our cleaning tutorials and service demonstrations",
    },
  ]

  return (
    <div className="bg-[var(--bg-soft)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Connect With Us</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Stay updated with our latest cleaning tips, behind-the-scenes content, and special offers across all our
            social media platforms.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {socialLinks.map((social) => (
            <div
              key={social.name}
              className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg ring-1 ring-blue-100">
                  <img src={social.icon} alt={social.name} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{social.name}</h3>
                <p className="text-secondary mb-6 leading-relaxed">{social.description}</p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 btn-accent font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Follow Us
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar (optional spacer) */}
      </div>
    </div>
  )
}

export default SocialMediaWidget
