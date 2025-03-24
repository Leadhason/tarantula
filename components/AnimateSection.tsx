"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, id, className, delay = 0 }: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "-50px",
  })

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        delay > 0 && `delay-${delay}`,
        className,
      )}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  )
}

