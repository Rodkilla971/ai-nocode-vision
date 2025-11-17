import { Star } from "lucide-react";
const testimonials = [{
  name: "Marie L.",
  role: "Gérante d'un salon de coiffure",
  content: "Grâce à Croissance IA, j'ai automatisé mes prises de rendez-vous et mes relances clients. Je gagne 10h par semaine et mes clients adorent la réactivité !",
  rating: 5
}, {
  name: "Thomas P.",
  role: "Consultant indépendant",
  content: "L'audit gratuit a révélé 3 automatisations que j'ai pu mettre en place rapidement. Mon activité est devenue beaucoup plus fluide et je peux me concentrer sur mes clients.",
  rating: 5
}, {
  name: "Sophie M.",
  role: "Fondatrice d'une boutique en ligne",
  content: "Rodrigue a créé un système complet pour gérer ma boutique : du traitement des commandes à la facturation automatique. C'est un vrai game changer !",
  rating: 5
}];
const Testimonials = () => {
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ils ont transformé leur activité avec{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Croissance IA
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Des résultats concrets pour des entrepreneurs comme vous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-card rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>)}
        </div>

        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>;
};
export default Testimonials;