import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo-croissance-ia.png";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["home", "about", "expertise", "projects", "testimonials", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  const navItems = [{
    id: "home",
    label: "Accueil"
  }, {
    id: "expertise",
    label: "Expertise"
  }, {
    id: "projects",
    label: "Projets"
  }, {
    id: "testimonials",
    label: "Témoignages"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3 hover:opacity-80 transition-opacity" aria-label="Retour à l'accueil">
            <img alt="Logo Croissance IA" className="h-12 w-auto" src="/lovable-uploads/fab02a17-21ba-4aa4-bda2-c1ef7e2da355.png" />
            <span className="font-bold text-xl text-foreground hidden sm:block">
              Croissance IA
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === item.id ? "text-accent" : "text-foreground/80"}`}>
                {item.label}
              </button>)}
            <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Audit gratuit
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex items-center gap-3 pb-6 border-b border-border">
                  <img src={logo} alt="Logo Croissance IA" className="h-10 w-auto" />
                  <span className="font-bold text-lg text-foreground">
                    Croissance IA
                  </span>
                </div>
                {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left text-lg font-medium transition-colors hover:text-accent ${activeSection === item.id ? "text-accent" : "text-foreground/80"}`}>
                    {item.label}
                  </button>)}
                <Button onClick={() => scrollToSection("contact")} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-4" size="lg">
                  Audit gratuit
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
};
export default Navigation;