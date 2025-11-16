import { Bot, MessageSquare, FileText, Instagram, Smartphone, Calendar, ClipboardList } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Chatbot IA intelligent",
    description: "Répondez automatiquement à vos clients 24/7 avec un assistant connecté à vos données.",
  },
  {
    icon: MessageSquare,
    title: "Automatisation des messages",
    description: "Envoyez des messages personnalisés à vos clients au bon moment.",
  },
  {
    icon: FileText,
    title: "Facturation automatique",
    description: "Générez et envoyez vos factures automatiquement avec relances intégrées.",
  },
  {
    icon: Instagram,
    title: "Publication automatisée",
    description: "Programmez et publiez automatiquement sur Instagram et autres réseaux sociaux.",
  },
  {
    icon: Smartphone,
    title: "Application métier interne",
    description: "Créez une application sur mesure pour gérer vos processus spécifiques.",
  },
  {
    icon: Calendar,
    title: "Gestion des réservations",
    description: "Centralisez et automatisez la gestion de vos rendez-vous et réservations.",
  },
  {
    icon: ClipboardList,
    title: "Traitement de formulaires",
    description: "Traitez intelligemment les réponses de vos formulaires clients.",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Exemples de projets{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              réalisables
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions concrètes pour transformer votre quotidien et gagner en efficacité
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <project.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Et bien plus encore ! Chaque projet est personnalisé selon vos besoins spécifiques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
