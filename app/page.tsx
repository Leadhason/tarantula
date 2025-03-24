import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyChooseUs from "@/components/WhyChooseUs"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services/>
      <Portfolio/>
      <FAQ/>
      <CTA/>
    </main>
  )
}

