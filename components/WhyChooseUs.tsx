import Image from "next/image"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Design Excellence",
      description:
        "Our talented design team is committed to producing designs that flawlessly combine form and function.",
      image: (
        <div className="mb-4 sm:mb-6">
          <Image
            src="/vector-5.svg"
            alt="Design Excellence"
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
      ),
    },
    {
      title: "Tailored Solutions",
      description:
        "We are aware of how special your project is. Our custom design solutions address the unique aims and objectives that you have.",
      image: (
        <div className="mb-4 sm:mb-6">
          <Image
            src="/vector-4.svg"
            alt="Tailored Solutions"
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
      ),
    },
    {
      title: "Centered Approach",
      description:
        "We build interfaces that appeal to your audience by keeping your users at the center of the process.",
      image: (
        <div className="mb-4 sm:mb-6">
          <Image
            src="/vector-7.svg"
            alt="Centered Approach"
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "With innovative strategic designs that increase engagement and conversions, you can compete with your competitors.",
      image: (
        <div className="mb-4 sm:mb-6">
          <Image
            src="/vector-4.svg"
            alt="Innovation"
            width={100}
            height={100}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
      ),
    },
  ]

  return (
    <section id="why" className="py-12 sm:py-16 md:py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-12 md:mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 sm:p-6 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {reason.image}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

