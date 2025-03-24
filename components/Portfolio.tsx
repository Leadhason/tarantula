"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const portfolioItems = [
  {
    id: 1,
    title: "Esseine Web Design",
    image: "/projects/edusync.png",
    category: "Web Design",
    link: "https://edusync-eta.vercel.app/",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2 object-fit", // Tall item
  },
  {
    id: 2,
    title: "Corporate Website",
    image: "/projects/wearenations.png",
    category: "Web Design",
    link: "https://wearenations.com",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-1.5 object-fit", // Wide item
  },
  {
    id: 6,
    title: "Travel Agency",
    image: "/projects/brightboard.png",
    category: "Web Design",
    link: "https://brightboard-livid.vercel.app/",
    className: "col-span-1 row-span-1 md:col-span-1 md:row-span-2 object-cover", // Wide item
  },
  {
    id: 3,
    title: "Plant Shop Website",
    image: "/projects/Sushiroll.png",
    category: "Web Design",
    link: "https://sushi-mern-stack.netlify.app/",
    className: "col-span-1 row-span-1 object-fit",
  },

]

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Recent Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We create beautiful and functional designs that help our clients achieve their goals and stand out from the
            competition.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={cn("relative overflow-hidden rounded-2xl group", item.className)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="transition-transform object-cover duration-500 group-hover:scale-105"
              />

              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 items-center flex flex-col justify-center transition-transform duration-300 w-full",
                  hoveredItem === item.id ? "translate-y-0" : "translate-y-[70%]",
                )}
              >
                <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>

                <Button variant="default" className="bg-orange-500 rounded-full hover:bg-orange-600 text-white w-fit mt-2" asChild>
                  <Link href={item.link}>Read More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-blue-500 text-gray-800 rounded-full p-6 bg-transparent hover:bg-black hover:border-none hover:scale-115 hover:text-white transition-colors"
            asChild
          >
            <Link href="/portfolio">
              <ArrowRight className="mr-2 h-4 w-4 text-white bg-black rounded-full hover:text-black hover:bg-white" /> View More Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

