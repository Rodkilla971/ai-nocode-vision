import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift } from "lucide-react";

const offers = [
  "Identification de 1 à 3 automatisations simples et impactantes",
  "Analyse personnalisée de vos processus actuels",
  "Recommandations concrètes et actionnables",
  "Devis gratuit et détaillé sans engagement",
];

const SpecialOffer = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-secondary to-accent text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Gift className="w-4 h-4" />
              <span className="text-sm font-medium">Offre de lancement</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Audit gratuit de vos processus
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Découvrez comment l'IA peut transformer votre activité dès aujourd'hui. 
              Profitez d'un audit personnalisé 100% gratuit et sans engagement.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Ce que vous recevez :</h3>
            
            <div className="space-y-4 mb-8">
              {offers.map((offer, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{offer}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-white text-accent hover:bg-white/90 text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Profiter de mon audit gratuit
              </Button>
              
              <p className="mt-4 text-sm text-white/70">
                Réponse sous 24h • Sans engagement • 100% personnalisé
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm text-white/80">Gratuit</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm text-white/80">Réponse rapide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">0</div>
              <div className="text-sm text-white/80">Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
