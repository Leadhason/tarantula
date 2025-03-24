"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/Hero-image-2.png",
  },
  {
    id: 2,
    image: "/Hero-image-4.png",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-block p-2 px-4 border rounded-full bg-white text-gray-600 font-medium text-sm mb-6">
            Welcome To Tarantula
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-blue-600">Creative</span> Craftsmanship
            <br />
            For The <span className="text-blue-600">Web</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We provide top-notch Web Design, Development, and UI/UX solutions, ensuring innovative, user-centric, and high-quality digital experiences.
          </p>
        </div>

        <div className="relative h-[400px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 justify-center items-center",
                index === currentSlide ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={slide.image}
                alt="Hero Image"
                fill
                className="object-contain h-full"
                priority={index === 0}
              />
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentSlide ? "bg-orange-500" : "bg-gray-300",
                )}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
        <div className="absolute left-4 md:left-16 top-1/4 hidden md:block">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 20 C 60 40, 100 90, 60 100 C 40 105, 30 90, 40 80"
                stroke="#CCCCCC"
                strokeWidth="3"
                fill="none"
              />
            </svg>
        </div>
        <div className="absolute right-4 md:right-16 bottom-0 hidden md:block scale-x-[-1]">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M30 20 C 60 40, 100 90, 60 100 C 40 105, 30 90, 40 80"
                stroke="#CCCCCC"
                strokeWidth="3"
                fill="none"
              />
            </svg>
        </div>
      <div className="bg-gray-200 flex items-center space-x-4 p-24 w-full ">
        <div className="mr-10">
            <h2 className="text-xl font-bold mb-2">Find Our Best Products Here:</h2>
            <p className="text-gray-600 mb-6">Leading innovation, superior products, it's all here.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <div className="w-32 h-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/envato.png" alt="envato Logo" width={150} height={150} className="w-auto" />
            </div>
        </div>
        <div className="w-32 h-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
            <Image src="/themeforest.png" alt="themeforest Logo" width={150} height={150} className="w-auto" />
            </div>
        </div>
        <div className="w-32 h-12 relative">
            <div className="absolute inset-0 flex items-center justify-center flex">
            <Image src="/behance.png" alt="behance Logo" width={150} height={50} className="h-10 w-auto" />
            <span className="text-black font-light text-xl">Behance</span>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

