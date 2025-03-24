import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Logo and Address */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/logo4.png"
                alt="Tarantula Logo"
                width={100}
                height={100}
                className="w-24 sm:w-28 md:w-32 h-auto object-contain mx-auto sm:mx-0"
              />
            </Link>

            <address className="not-italic text-gray-600 mb-4 text-sm sm:text-base">
              Teachers Quarters, Deduako,
              <br />
              Kumasi, Ghana,
              <br />
              Jawa Timur 65136
            </address>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Explore Site</h3>

            <nav className="space-y-2 sm:space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-blue-500 transition-colors">
                About Us
              </Link>
              <Link href="/why" className="block text-gray-600 hover:text-blue-500 transition-colors">
                Why Choose Us
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-blue-500 transition-colors">
                Our Services
              </Link>
              <Link href="/portfolio" className="block text-gray-600 hover:text-blue-500 transition-colors">
                Portfolio
              </Link>
            </nav>
          </div>

          {/* Contact and Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Contact Us</h3>

            <div className="space-y-2 sm:space-y-3 mb-6">
              <div className="flex items-center text-gray-600 justify-center sm:justify-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:admin@kitpro.site"
                  className="hover:text-blue-500 transition-colors text-sm sm:text-base"
                >
                  admin@tarantula.site
                </a>
              </div>

              <div className="flex items-center text-gray-600 justify-center sm:justify-start">
                <span className="mr-2">📍</span>
                <span className="text-sm sm:text-base">Kumasi, Ghana</span>
              </div>

              <div className="flex items-center text-gray-600 justify-center sm:justify-start">
                <span className="mr-2">📞</span>
                <a href="tel:+233 54 654 6765" className="hover:text-blue-500 transition-colors text-sm sm:text-base">
                  +233 54 123 4567
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">Follow Us</h3>

            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-blue-500 text-gray-700 hover:text-white p-2 sm:p-2.5 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-blue-500 text-gray-700 hover:text-white p-2 sm:p-2.5 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-blue-500 text-gray-700 hover:text-white p-2 sm:p-2.5 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8 text-center text-gray-600 text-xs sm:text-sm">
          <p>Copyright © {currentYear} Tarantula | Powered by Tarantula</p>
        </div>
      </div>
    </footer>
  )
}

