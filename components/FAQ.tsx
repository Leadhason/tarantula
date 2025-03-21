"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronUp, ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "How to order a designs at Kitpro",
    answer:
      "For further information on how to order a design, you only need to contact us using the number listed on our website.",
  },
  {
    id: 2,
    question: "Is it possible for me to communicate directly with the designers?",
    answer:
      "Yes, we encourage direct communication with our designers to ensure your vision is properly understood and implemented. Once your project begins, you'll be introduced to your dedicated design team.",
  },
  {
    id: 3,
    question: "Which number of designers will I be able to hire for my project?",
    answer:
      "The number of designers assigned to your project depends on its scope and complexity. For small projects, you may work with 1-2 designers, while larger projects might require a team of 3-5 specialists with different expertise.",
  },
  {
    id: 4,
    question: "What is the typical turnaround time for a project?",
    answer:
      "Turnaround times vary based on project complexity. Simple designs may take 3-5 business days, while comprehensive websites might require 2-4 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
]

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1) // First FAQ open by default

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image
              src="/vector-9.svg"
              alt="FAQ Illustration"
              width={600}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">FAQs</h2>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={openFAQ === faq.id}
                  >
                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                    <div
                      className={cn(
                        "flex items-center justify-center w-6 h-6 rounded-full",
                        openFAQ === faq.id ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-600",
                      )}
                    >
                      {openFAQ === faq.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </button>

                  <div
                    className={cn(
                      "mt-2 text-gray-600 transition-all duration-300 overflow-hidden",
                      openFAQ === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

