import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <h1 className="font-bold text-xl">Tarantula</h1>
            </Link>

            <address className="not-italic text-gray-600 mb-4">
              Teachers Quarters, Deduako,
              <br />
              Kumasi, Ghana,
              <br />
              Jawa Timur 65136
            </address>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Explore Site</h3>

            <nav className="space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-orange-500 transition-colors">
                About Us
              </Link>
              <Link href="/why" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Why Choose Us
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Our Services
              </Link>
              <Link href="/portfolio" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Portfolio
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Contact Us</h3>

            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <span className="mr-2">📧</span>
                <a href="mailto:admin@kitpro.site" className="hover:text-orange-500 transition-colors">
                  admin@tarantula.site
                </a>
              </div>

              <div className="flex items-center text-gray-600">
                <span className="mr-2">📍</span>
                <span>Kumasi, Ghana</span>
              </div>

              <div className="flex items-center text-gray-600">
                <span className="mr-2">📞</span>
                <a href="tel:+6281232248658" className="hover:text-orange-500 transition-colors">
                  +233 54 123 4567
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Follow Us</h3>

            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 hover:bg-orange-500 text-gray-700 hover:text-white p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>Copyright © {currentYear} Tarantula | Powered by Tarantula</p>
        </div>
      </div>
    </footer>
  )
}

