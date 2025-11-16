import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import WhyAI from "@/components/WhyAI";
import DataDigitalization from "@/components/DataDigitalization";
import Projects from "@/components/Projects";
import SpecialOffer from "@/components/SpecialOffer";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Expertise />
      <WhyAI />
      <DataDigitalization />
      <Projects />
      <SpecialOffer />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
