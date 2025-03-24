"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false) // Close mobile menu if open

    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      // Update active section
      setActiveSection(sectionId)
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about-us", "why", "services", "portfolio"]

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className="w-full py-3 sm:py-4 bg-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo4.png"
            alt="Tarantula Logo"
            width={150}
            height={200}
            className="w-32 sm:w-36 md:w-40 lg:w-[150px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <button
            onClick={() => scrollToSection("about-us")}
            className={`text-gray-800 font-medium hover:text-orange-500 transition-colors ${activeSection === "about-us" ? "text-orange-500" : ""}`}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("why")}
            className={`text-gray-800 font-medium hover:text-orange-500 transition-colors ${activeSection === "why" ? "text-orange-500" : ""}`}
          >
            Why
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`text-gray-800 font-medium hover:text-orange-500 transition-colors ${activeSection === "services" ? "text-orange-500" : ""}`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className={`text-gray-800 font-medium hover:text-orange-500 transition-colors ${activeSection === "portfolio" ? "text-orange-500" : ""}`}
          >
            Portfolio
          </button>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden sm:block">
          <Button
            variant="outline"
            className="border-blue-500 text-gray-800 px-4 py-2 bg-transparent rounded-full font-medium hover:bg-black hover:text-white hover:border-transparent hover:scale-105 transition-all"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute left-0 right-0 z-40 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-2">
              <button
                onClick={() => scrollToSection("about-us")}
                className={`text-left text-gray-800 font-medium hover:text-orange-500 transition-colors py-2 border-b border-gray-100 ${activeSection === "about-us" ? "text-orange-500" : ""}`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("why")}
                className={`text-left text-gray-800 font-medium hover:text-orange-500 transition-colors py-2 border-b border-gray-100 ${activeSection === "why" ? "text-orange-500" : ""}`}
              >
                Why
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`text-left text-gray-800 font-medium hover:text-orange-500 transition-colors py-2 border-b border-gray-100 ${activeSection === "services" ? "text-orange-500" : ""}`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`text-left text-gray-800 font-medium hover:text-orange-500 transition-colors py-2 border-b border-gray-100 ${activeSection === "portfolio" ? "text-orange-500" : ""}`}
              >
                Portfolio
              </button>
              <div className="pt-2 sm:hidden">
                <Button
                  variant="outline"
                  className="w-full border-blue-400 text-gray-800 bg-transparent rounded-full font-medium hover:bg-black hover:text-white hover:border-transparent hover:scale-105 transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

