import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about-us" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/vector-1.svg"
              alt="Design team illustration"
              width={600}
              height={500}
              className="w-full h-auto max-w-[500px] mx-auto md:max-w-none"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Design Is Our Passion</h2>

            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-justify sm:text-left">
              With a history spanning over six years, we've successfully completed more than 300 graphic design
              projects, catering to a diverse clientele. These templates include versatile assets such as PowerPoint
              slides, Website Design, UI/UX, and more.
            </p>

            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-justify sm:text-left">
              At Tarantula, our expertise isn't confined to graphic design alone. We're expanding our capabilities into
              the realms of UI/UX, leveraging our skills to make a significant impact. Embark on your graphic design
              journey with Kitpro, where we provide unwavering support from our seasoned designers, developers, and
              creators.
            </p>

            <div className="flex justify-center md:justify-start">
              <Button
                variant="outline"
                className="border-blue-500 text-gray-800 rounded-full px-4 py-2 sm:p-5 bg-transparent hover:bg-black hover:border-transparent hover:scale-105 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 h-4 w-4" /> Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

