import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-4 bg-gray-100">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/*<Image src="/tarantulalogo.png" alt="Tarantula Logo" width={100} height={100} className="h-10 w-auto" />*/}
          <h1 className="font-bold text-xl">Tarantula</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/about" className="text-gray-800 font-light text-medium hover:text-orange-500 transition-colors">
            About Us
          </Link>
          <Link href="/why" className="text-gray-800 font-light text-medium hover:text-orange-500 transition-colors">
            Why
          </Link>
          <Link href="/services" className="text-gray-800 font-light text-medium hover:text-orange-500 transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-800 font-light text-medium hover:text-orange-500 transition-colors">
            Portfolio
          </Link>
        </nav>

        <Button
          variant="outline"
          className="border-orange-500 text-gray-800 bg-transparent rounded-full font-light text-medium hover:bg-black hover:text-white hover:border-none hover:scale-115 transition-colors"
          asChild
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </header>
  )
}

