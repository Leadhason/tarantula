"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="w-full py-3 background-blur-md bg-gray-100 sm:py-4 sticky  top-0 z-50">
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
          <Link href="about-us" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">
            About Us
          </Link>
          <Link href="why" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">
            Why
          </Link>
          <Link href="services" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">
            Services
          </Link>
          <Link href="portfolio" className="text-gray-800 font-medium hover:text-blue-500 transition-colors">
            Portfolio
          </Link>
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden sm:block">
          <Button
            variant="outline"
            className="border-blue-400 text-gray-800 bg-transparent rounded-full font-medium hover:bg-black hover:text-white hover:border-transparent hover:scale-105 transition-all"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
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
        <div className="md:hidden bg-gray-100 border-t border-gray-200 absolute left-0 right-0 z-40 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4 py-2">
              <div className="flex flex-col items-center justify-center w-full">
                <Link
                  href="about-us"
                  className="text-gray-800 font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="why"
                  className="text-gray-800 font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Why
                </Link>
                <Link
                  href="services"
                  className="text-gray-800 font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="portfolio"
                  className="text-gray-800 font-medium hover:text-blue-500 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </div>
              <div className="pt-2 sm:hidden">
                <Button
                  variant="outline"
                  className="w-full border-blue-400 text-gray-800 bg-transparent rounded-full font-medium hover:bg-black hover:text-white hover:border-transparent hover:scale-105 transition-all"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

