import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import ContactForm from "@/components/Contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-blue-500">Contact</span> Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For further information, contact the number below, or you can communicate with us via this website
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 bg-gray-800 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Phone Card */}
            <div className="bg-gray-700 rounded-xl p-8 text-center flex flex-col items-center">
              <div className="text-blue-500 mb-4">
                <Phone className="w-12 h-12 stroke-1" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">+233 54 123 4567</h3>
              <p className="text-gray-300 text-sm">Unrivaled Customer Support, Every Step of the Way</p>
            </div>

            {/* Email Card */}
            <div className="bg-gray-700 rounded-xl p-8 text-center flex flex-col items-center">
              <div className="text-blue-500 mb-4">
                <Mail className="w-12 h-12 stroke-1" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">admin@tarantula.site</h3>
              <p className="text-gray-300 text-sm">To order designs, you can contact us via the email above</p>
            </div>

            {/* Location Card */}
            <div className="bg-gray-700 rounded-xl p-8 text-center flex flex-col items-center">
              <div className="text-blue-500 mb-4">
                <MapPin className="w-12 h-12 stroke-1" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Kumasi, Ghana</h3>
              <p className="text-gray-300 text-sm">Teachers Quarters, Deduako, Kumasi, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                src="/contact-support-vector.svg"
                alt="Contact Illustration"
                width={600}
                height={500}
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>

            <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Get In Touch !!</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

