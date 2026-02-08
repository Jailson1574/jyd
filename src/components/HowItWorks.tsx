import { UserPlus, Search, MessageSquare, ShieldCheck, BadgeCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UserPlus className="w-6 h-6" />,
    title: "Crie sua conta",
    description: "Cadastro rápido com verificação por email. Sem senha, mais segurança.",
    color: "bg-secondary-blue/20 text-secondary-blue",
  },
  {
    number: "02",
    icon: <Search className="w-6 h-6" />,
    title: "Explore domínios",
    description: "Navegue por centenas de domínios .br disponíveis para compra ou leilão.",
    color: "bg-secondary-purple/20 text-secondary-purple",
  },
  {
    number: "03",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Negocie com segurança",
    description: "Use o chat interno ou desbloqueie contato direto com assinatura.",
    color: "bg-secondary-pink/20 text-secondary-pink",
  },
  {
    number: "04",
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Transferência protegida",
    description: "Pagamento seguro e transferência de domínio assistida pela plataforma.",
    color: "bg-success/20 text-success",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-primary-navy/30 to-background">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Processo simples e seguro do início ao fim
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-white/20 to-white/5" />
              )}

              <div className="glass-card p-8 text-center relative z-10 h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${step.color}`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 glass-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-neutral-400">Domínios disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-neutral-400">Satisfação dos usuários</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">R$2M+</div>
              <div className="text-sm text-neutral-400">Em transações</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-neutral-400">Conformidade LGPD</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
