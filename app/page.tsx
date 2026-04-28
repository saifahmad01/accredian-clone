// =============================================================================
// Home Page
// Assembles all the individual sections into the final landing page
// =============================================================================
import Hero from "@/components/sections/Hero";
import CTASection from "@/components/sections/CTASection";
import Solutions from "@/components/sections/Solution";


export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <CTASection />
      
    </>
  );
}
