import React from 'react'
// src/components/HashScroll.jsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function HashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      // Add a small delay to ensure the page has loaded
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          // Calculate offset for fixed header (approximately 120px)
          const headerOffset = 50
          const elementPosition = el.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    } else if (pathname.includes("/services/")) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [hash, pathname])

  return null
}
