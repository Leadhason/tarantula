import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/vector-1.svg"
              alt="Design team illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Design Is Our Passion</h2>

            <p className="text-gray-600 mb-4 text-justify">
              With a history spanning over six years, we've successfully completed more than 300 graphic design
              projects, catering to a diverse clientele. These templates include versatile assets such as PowerPoint
              slides, Website Design, UI/UX, and more.
            </p>

            <p className="text-gray-600 mb-8 text-justify">
              At Tarantula, our expertise isn't confined to graphic design alone. We're expanding our capabilities into the
              realms of UI/UX, leveraging our skills to make a significant. Embark on your graphic design journey with
              Kitpro, where we provide unwavering support from our seasoned designers, developers, and creators.
            </p>

            <Button
              variant="outline"
              className="border-orange-500 text-gray-800 rounded-full p-5 bg-transparent hover:bg-black hover:border-none hover:scale-115 hover:text-white transition-colors"
            >
              <Phone className="mr-2 h-4 w-4" /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

