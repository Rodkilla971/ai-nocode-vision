import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Prêt à transformer votre activité ?
            </h2>
            <p className="text-xl text-muted-foreground">
              Réservez votre audit gratuit ou contactez-moi directement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Parlons de votre projet
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Que vous ayez un projet précis en tête ou simplement envie d'explorer les possibilités, 
                je suis là pour vous accompagner. Réponse garantie sous 24h.
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
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground mb-1">Réponse rapide</div>
                    <p className="text-muted-foreground">
                      Réponse sous 24h, du lundi au vendredi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Réserver un rendez-vous
              </h3>
              <div 
                className="zcal-inline-widget min-h-[600px]"
                dangerouslySetInnerHTML={{
                  __html: '<a href="https://zcal.co/i/3R_XnOe1">Vous propose un premier contact pour faire connaissance - Schedule a meeting</a>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
