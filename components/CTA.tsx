import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-6 sm:px-8 md:px-10 bg-gray-900 rounded-3xl sm:rounded-full mx-2 sm:mx-4 md:mx-8 lg:mx-16 my-10 sm:my-12 md:my-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Interested In <span className="text-blue-500">Working</span> With Us?
            </h2>
          </div>

          <Link href="/contact">
            <Button
              variant="outline"
              className="border-blue-500 text-white bg-transparent rounded-full px-4 py-2 sm:p-4 md:p-6 hover:bg-white hover:text-black hover:border-transparent hover:scale-105 transition-all"
            >
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

