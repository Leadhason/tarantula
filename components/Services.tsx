import Image from "next/image"
import { Layers, Clock } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Website Landing Page",
      description:
        "Creating visual elements such as logos, images, and icons that enhance the overall look of the website.",
      icon: <Layers className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />,
    },
    {
      title: "Graphic Designer",
      description:
        "Graphic designers need a combination of technical and creative skills. Proficiency in graphic design software.",
      icon: <Clock className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />,
    },
  ]

  return (
    <section id="services" className="py-10 px-4 sm:p-10 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-5">
              What We Do, What <br className="hidden sm:block" />
              You Can Have
            </h2>

            <p className="text-sm sm:text-base text-gray-300 mb-5 sm:mb-7">
              We are ready for the next project. We provide the best solutions for various graphic needs. Start your
              journey with the support of our experienced designers, developers, and creators.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-gray-800 bg-opacity-50 rounded-2xl sm:rounded-full p-4 sm:pr-8"
                >
                  <div className="bg-gray-700 rounded-full p-3 flex-shrink-0 text-orange-500 self-center sm:self-auto">
                    {service.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/vector-5.svg"
              alt="Services illustration"
              width={600}
              height={500}
              className="w-full h-auto max-w-[400px] mx-auto md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

