import { Sparkles, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Croissance IA, votre partenaire pour{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              automatiser, optimiser et accélérer
            </span>{" "}
            votre activité
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bonjour, je suis <strong className="text-foreground">Rodrigue</strong>, expert en intelligence artificielle et automatisation no-code. 
            Ma mission : rendre l'IA accessible et utile pour les PME, indépendants et entrepreneurs qui souhaitent gagner en efficacité.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Simplicité</h3>
            <p className="text-muted-foreground">
              Des solutions claires, sans jargon technique. L'IA doit être un outil, pas une contrainte.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Pédagogie</h3>
            <p className="text-muted-foreground">
              Je vous accompagne à chaque étape pour que vous compreniez et maîtrisiez vos outils.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-success" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Efficacité</h3>
            <p className="text-muted-foreground">
              Des résultats concrets et mesurables qui transforment vraiment votre quotidien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
