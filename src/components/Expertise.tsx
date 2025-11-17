import { Database, Workflow, Smartphone, FileText, Brain, Network } from "lucide-react";

const expertiseItems = [
  {
    icon: Workflow,
    title: "Automatisation",
    tools: "Make, Lovable, Zapier",
    description: "Automatisez vos tâches répétitives et connectez vos applications entre elles.",
  },
  {
    icon: Database,
    title: "Bases de données",
    tools: "Airtable, Notion",
    description: "Structurez et centralisez vos données pour une meilleure visibilité.",
  },
  {
    icon: Smartphone,
    title: "Applications métier",
    tools: "Bubble",
    description: "Créez des applications personnalisées sans code pour votre activité.",
  },
  {
    icon: FileText,
    title: "Formulaires intelligents",
    tools: "Tally, Jotform",
    description: "Collectez et traitez automatiquement les données de vos clients.",
  },
  {
    icon: Brain,
    title: "Intégration IA",
    tools: "LLM, Prompt Engineering",
    description: "Exploitez la puissance de l'IA pour automatiser vos processus métier.",
  },
  {
    icon: Network,
    title: "Systèmes connectés",
    tools: "APIs & Intégrations",
    description: "Faites communiquer tous vos outils pour un écosystème fluide.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mes expertises
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des compétences complètes pour transformer votre entreprise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm font-medium text-accent mb-3">
                {item.tools}
              </p>
              
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
