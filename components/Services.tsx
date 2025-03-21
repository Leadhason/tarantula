import Image from "next/image"
import { Layers, Clock } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Website Landing Page",
      description:
        "Creating visual elements such as logos, images, and icons that enhance the overall look of the website.",
      icon: <Layers className="h-8 w-8 text-white" />,
    },
    {
      title: "Graphic Designer",
      description:
        "Graphic designers need a combination of technical and creative skills. Proficiency in graphic design software.",
      icon: <Clock className="h-8 w-8 text-white" />,
    },
  ]

  return (
    <section className="p-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-5">
              What We Do, What <br />
              You Can Have
            </h2>

            <p className="text-gray-300 mb-7">
              We are ready for the next project. We provide the best solutions for various graphic needs. Start your
              journey with the support of our experienced designers, developers, and creators.
            </p>

            <div className="space-y-5">
              {services.map((service, index) => (
                <div key={index} className="flex gap-4 bg-gray-800 items-center bg-opacity-50 rounded-full p-4 pr-8">
                  <div className="bg-gray-700 rounded-full p-3 flex-shrink-0 text-orange-500">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src="/vector-5.svg"
              alt="Services illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

