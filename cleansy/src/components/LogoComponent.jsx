import React from 'react'
import logo from "../assets/images/logo.jpeg"

const LogoComponent = ({ size = "large", showText = true, className = "" }) => {
  const sizes = {
    small: { icon: 20, text: "text-lg", padding: "p-2" },
    medium: { icon: 24, text: "text-xl", padding: "p-2.5" },
    large: { icon: 32, text: "text-3xl", padding: "p-3" },
  }

  const currentSize = sizes[size]

  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`flex items-center bg-gradient-to-r from-[#4D757B] to-[#5A8A91] ${currentSize.padding} rounded-xl shadow-lg ${
          showText ? "mr-4" : ""
        }`}
      >
        <img
          src={logo}  // ✅ use imported logo
          alt="TRUE SHINE Logo"
          style={{ width: `${currentSize.icon}px`, height: `${currentSize.icon}px` }}
          className="object-contain"
        />
      </div>
      {showText && (
        <div>
          <h1 className={`${currentSize.text} font-bold text-gray-800 tracking-tight`}>TRUE SHINE</h1>
          {size === "large" && (
            <p className="text-sm text-gray-600 font-medium">Professional Cleaning Services</p>
          )}
        </div>
      )}
    </div>
  )
}

export default LogoComponent
