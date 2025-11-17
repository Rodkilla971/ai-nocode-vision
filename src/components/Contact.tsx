import { Mail, Phone, MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";
const Contact = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Charger le script zcal dynamiquement APRÈS que React ait rendu le widget
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return () => {
      // Cleanup : retirer le script quand le composant est démonté
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Prêt à transformer votre activité ?</h2>
            <p className="text-xl text-muted-foreground">Réservez votre audit gratuit ou contactez-moi directement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Parlons de votre projet</h3>

              <p className="text-muted-foreground mb-8 leading-relaxed rounded-none">
                Que vous ayez un projet précis en tête ou simplement envie d'explorer les possibilités, je suis là pour
                vous accompagner. Réponse garantie sous 24h.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Email</div>
                    <a href="mailto:contact@croissance-ia.fr" className="text-muted-foreground hover:text-accent transition-colors">
                      contact@croissance-ia.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Téléphone</div>
                    <a href="tel:+33123456789" className="text-muted-foreground hover:text-accent transition-colors">
                      +33 6 38 81 69 11         
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Réponse rapide</div>
                    <p className="text-muted-foreground">Réponse sous 24h, du lundi au vendredi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 border border-border shadow-lg rounded-none">
              <h3 className="text-2xl font-bold text-foreground mb-6">Réserver un rendez-vous</h3>
              <div ref={widgetRef} className="zcal-inline-widget min-h-[600px] p-0 bg-gray-800 rounded-xl">
                <a href="https://zcal.co/i/3R_XnOe1">
                  Vous propose un premier contact pour faire connaissance - Schedule a meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;