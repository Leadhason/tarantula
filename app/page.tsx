import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import Portfolio from "@/components/Portfolio"

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <section id="hero">
        <Hero />
      </section>

      <section id="about-us">
        <About />
      </section>

      <section id="why">
        <WhyChooseUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <FAQ />

      <CTA />

    </main>
  )
}

