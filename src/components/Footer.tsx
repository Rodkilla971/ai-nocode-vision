import { Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Croissance IA</h3>
            <p className="text-primary-foreground/80 mb-4">
              Votre partenaire pour automatiser, optimiser et accélérer votre activité grâce à l'IA et au no-code.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@croissance-ia.fr"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#expertise" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nos expertises
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Audit gratuit
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="mailto:contact@croissance-ia.fr" className="hover:text-primary-foreground transition-colors">
                  contact@croissance-ia.fr
                </a>
              </li>
              <li>
                <a href="tel:+33123456789" className="hover:text-primary-foreground transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="text-sm">
                Réponse sous 24h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Croissance IA. Tous droits réservés.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-1">
              Mentions légales
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors flex items-center gap-1">
              Politique de confidentialité
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
