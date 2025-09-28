// src/pages/ServicePage.jsx
import React from 'react'
import { useParams } from "react-router-dom" // Import useParams hook
import { Building, Users, Home, Sparkles, Trash2, Droplets } from "lucide-react"
import OfficeCleaningDetail from "../services/OfficeCleaningDetail.jsx"
import SchoolCleaningDetail from "../services/SchoolCleaningDetail.jsx"
import ChildcareCleaningDetail from "../services/ChildcareCleaningDetail.jsx"
import FitnessCentreDetail from "../services/FitnessCentreDetail.jsx"
import BuildersCleanDetail from "../services/BuildersCleanDetail.jsx"
import { useEffect } from "react"
import CarpetCleaningDetail from "../services/CarpetCleaningDetail.jsx"

// REMOVED: The 'serviceId' prop is no longer needed.
const ServicePage = () => {
  // CHANGE: Get the 'slug' parameter from the URL.
  const { slug } = useParams()

  // CHANGE: Added useEffect to scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [slug])

  const services = [
    // CHANGE: Added a 'slug' property to each service for URL matching.
    {
      id: 1,
      slug: "office-cleaning",
      icon: <Building className="text-[#4D757B]" size={48} />,
      title: "Office Cleaning",
      shortDescription: "Professional office cleaning services...",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      slug: "school-cleaning",
      icon: <Users className="text-[#4D757B]" size={48} />,
      title: "School Cleaning",
      shortDescription: "Comprehensive school cleaning services...",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      slug: "childcare-cleaning",
      icon: <Home className="text-[#4D757B]" size={48} />,
      title: "Childcare Cleaning",
      shortDescription: "Specialized childcare cleaning services...",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      slug: "fitness-centres",
      icon: <Sparkles className="text-[#4D757B]" size={48} />,
      title: "Fitness Centres",
      shortDescription: "Premium gym cleaning services...",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      slug: "builders-clean",
      icon: <Trash2 className="text-[#4D757B]" size={48} />,
      title: "Builders Clean",
      shortDescription: "Expert post-construction cleaning services...",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      slug: "body-corp-cleaning",
      icon: <Building className="text-[#4D757B]" size={48} />,
      title: "Body Corp Cleaning",
      shortDescription: "Comprehensive body corporate cleaning services...",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      slug: "pressure-cleaning",
      icon: <Droplets className="text-[#4D757B]" size={48} />,
      title: "Pressure Cleaning",
      shortDescription: "High-pressure cleaning services...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      slug: "carpet-cleaning",
      icon: <Home className="text-[#4D757B]" size={48} />,
      title: "Carpet Cleaning",
      shortDescription: "Professional carpet cleaning services...",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ]

  // CHANGE: Find the service based on the slug from the URL.
  const service = services.find((s) => s.slug === slug)

  const renderServiceDetail = () => {
    // We use the found service's ID to render the correct component.
    if (!service) return null

    switch (service.id) {
      case 1:
        return <OfficeCleaningDetail />
      case 2:
        return <SchoolCleaningDetail />
      case 3:
        return <ChildcareCleaningDetail />
      case 4:
        return <FitnessCentreDetail />
      case 5:
        return <BuildersCleanDetail />
      case 8:
        return <CarpetCleaningDetail />
      default:
        return null
    }
  }

  if (!service) {
    return <div className="text-center py-20">Service not found</div>
  }

  return (
    // The rest of your JSX remains the same
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 max-w-4xl">
          <div className="flex items-center space-x-6 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">{service.icon}</div>
            <h1 className="text-5xl font-bold text-white">{service.title}</h1>
          </div>
          <p className="text-xl text-white/90 leading-relaxed">{service.shortDescription}</p>
        </div>
      </div>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {renderServiceDetail()}
        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#4D757B]/10 to-[#A2B5C3]/10 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote and let us take care of your {service.title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#quote" className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Free Quote
            </a>  
            <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 shadow ring-1 ring-slate-200 hover:bg-green-200"
              >
                Call Now
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
