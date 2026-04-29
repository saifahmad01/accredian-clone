import Hero from "@/components/sections/Hero";
import Solutions from "@/components/sections/Solution";
import CTASection from "@/components/sections/CTASection";
import TrustBanner from "@/components/sections/TrustBanner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Solutions />
      <TrustBanner />
      <CTASection />
    </main>
  );
}