import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
