import { Database, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: TrendingUp,
    title: "Visibilité totale",
    description: "Visualisez vos données en temps réel et prenez des décisions éclairées.",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Connectez vos données à des workflows intelligents pour gagner du temps.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Des données structurées et sécurisées pour une gestion sereine.",
  },
];

const DataDigitalization = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
                <Database className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Digitalisation</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Structurez vos données pour{" "}
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  libérer votre potentiel
                </span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vos données sont votre plus grand atout. Mais sans structure, elles restent inexploitées. 
                Je vous accompagne pour digitaliser, organiser et exploiter intelligemment vos informations.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl"
              >
                Digitaliser mes données
              </Button>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-accent to-secondary rounded-full w-3/4" />
                  <div className="h-4 bg-muted rounded-full w-full" />
                  <div className="h-4 bg-gradient-to-r from-secondary to-success rounded-full w-5/6" />
                  <div className="h-4 bg-muted rounded-full w-2/3" />
                  <div className="h-4 bg-gradient-to-r from-accent to-secondary rounded-full w-4/5" />
                  
                  <div className="pt-6 grid grid-cols-3 gap-4">
                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                      <div className="text-2xl font-bold text-accent">+250%</div>
                      <div className="text-xs text-muted-foreground">Efficacité</div>
                    </div>
                    <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/20">
                      <div className="text-2xl font-bold text-secondary">-60%</div>
                      <div className="text-xs text-muted-foreground">Erreurs</div>
                    </div>
                    <div className="bg-success/10 rounded-xl p-4 border border-success/20">
                      <div className="text-2xl font-bold text-success">100%</div>
                      <div className="text-xs text-muted-foreground">Visibilité</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDigitalization;
