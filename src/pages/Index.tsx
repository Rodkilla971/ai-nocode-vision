import Navigation from "@/components/Navigation";
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
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="expertise">
        <Expertise />
      </div>
      <WhyAI />
      <DataDigitalization />
      <div id="projects">
        <Projects />
      </div>
      <SpecialOffer />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
