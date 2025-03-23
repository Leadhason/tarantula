import Image from 'next/image';

export default function WhyChooseUs() {
    const reasons = [
      {
        title: "Design Excellence",
        description:
          "Our talented design team is committed to producing designs that flawlessly combine form and function.",
        // icon: (
        //   <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        //     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //       <path d="M12 20V10" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path d="M18 20V4" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path d="M6 20V16" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //     </svg>
        //   </div>
        // ),
        image: (
            <div >
                <Image
                    src="/vector-5.svg"
                    alt="vector image"
                    width={100}
                    height={100}
                />
            </div>
        )
      },
      {
        title: "Tailored Solutions",
        description:
          "We are aware of how special your project is. Our custom design solutions address the unique aims and objectives that you have.",
        // icon: (
        //   <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        //     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //       <path
        //         d="M9.5 14.5L5.5 18.5"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //       <path
        //         d="M5.5 14.5L9.5 18.5"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //       <path d="M19 9.5L15 5.5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path d="M15 9.5L19 5.5" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //     </svg>
        //   </div>
        // ),
        image: (
            <div >
                <Image
                    src="/vector-4.svg"
                    alt="vector image"
                    width={100}
                    height={100}
                />
            </div>
        )
      },
      {
        title: "Centered Approach",
        description:
          "We build interfaces that appeal to your audience by keeping your users at the center of the process.",
        // icon: (
        //   <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        //     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //       <path
        //         d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //       <path d="M12 16V12" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path d="M12 8H12.01" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //     </svg>
        //   </div>
        // ),
        image: (
            <div >
                <Image
                    src="/vector-7.svg"
                    alt="vector image"
                    width={100}
                    height={100}
                />
            </div>
        )
      },
      {
        title: "Innovation",
        description:
          "With innovative strategic designs that increase engagement and conversions, you can compete with your competitors.",
        // icon: (
        //   <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        //     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //       <path d="M12 2V6" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path d="M12 18V22" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path
        //         d="M4.93 4.93L7.76 7.76"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //       <path
        //         d="M16.24 16.24L19.07 19.07"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //       <path d="M2 12H6" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path d="M18 12H22" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        //       <path
        //         d="M4.93 19.07L7.76 16.24"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //       <path
        //         d="M16.24 7.76L19.07 4.93"
        //         stroke="#F5A623"
        //         strokeWidth="2"
        //         strokeLinecap="round"
        //         strokeLinejoin="round"
        //       />
        //     </svg>
        //   </div>
        // ),
        image: (
            <div >
                <Image
                    src="/vector-4.svg"
                    alt="vector image"
                    width={100}
                    height={100}
                />
            </div>
        )
      },
    ]
  
    return (
      <section id="why" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">Why Choose Us</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {reason.image}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  