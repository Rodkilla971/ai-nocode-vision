import { TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "+40%",
    label: "de productivité",
    source: "McKinsey",
    color: "from-accent to-secondary",
  },
  {
    icon: Clock,
    value: "-70%",
    label: "de temps perdu",
    source: "Gartner",
    color: "from-secondary to-accent",
  },
  {
    icon: DollarSign,
    value: "+20 à +45%",
    label: "de chiffre d'affaires",
    source: "BCG",
    color: "from-success to-accent",
  },
];

const WhyAI = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Pourquoi maintenant ?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            L'IA : un levier de croissance{" "}
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              immédiat et concret
            </span>
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Les entreprises qui adoptent l'IA aujourd'hui prennent une longueur d'avance décisive. 
            Les chiffres parlent d'eux-mêmes :
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 mx-auto`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              
              <div className="text-lg font-medium mb-2">
                {stat.label}
              </div>
              
              <div className="text-sm text-primary-foreground/60">
                Source : {stat.source}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
          <p className="text-lg leading-relaxed">
            <strong className="text-accent">L'IA n'est plus une option, c'est une nécessité.</strong> 
            {" "}Les entreprises qui l'adoptent aujourd'hui gagnent en efficacité, réduisent leurs coûts 
            et se positionnent en leaders de leur marché. Ne laissez pas vos concurrents prendre de l'avance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAI;
