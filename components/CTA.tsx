import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 px-10 bg-gray-900 z-10 rounded-full mx-4 md:mx-8 lg:mx-16 my-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Interested In <span className="text-blue-500">Working</span> With Us?
                </h2>
            </div>

            <Link href="/contact">
                <Button
                    variant="outline"
                    className="border-blue-500 text-white bg-transparent rounded-full p-6 hover:bg-white hover:text-black hover:border-none hover:scale-110 transition-colors mt-6 md:mt-0"
                >
                    <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Button>
            </Link>
        </div>
      </div>
    </section>
  )
}

