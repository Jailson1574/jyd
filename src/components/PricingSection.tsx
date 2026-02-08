import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, MessageSquare, Mail, Phone, Star, Zap, Crown } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  icon: React.ReactNode;
  featured: boolean;
  features: {
    name: string;
    included: boolean;
    highlight?: boolean;
  }[];
  cta: string;
}

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Básico",
    price: 0,
    period: "para sempre",
    description: "Ideal para começar a explorar o marketplace",
    icon: <MessageSquare className="w-6 h-6" />,
    featured: false,
    features: [
      { name: "Ver todos os domínios", included: true },
      { name: "Chat interno ilimitado", included: true },
      { name: "Participar de leilões", included: true },
      { name: "Notificações básicas", included: true },
      { name: "Email do vendedor", included: false },
      { name: "WhatsApp do vendedor", included: false },
      { name: "Suporte prioritário", included: false },
      { name: "Destaque em listagens", included: false },
    ],
    cta: "Começar Grátis",
  },
  {
    id: "professional",
    name: "Profissional",
    price: 49,
    period: "por mês",
    description: "Para negociadores ativos",
    icon: <Zap className="w-6 h-6" />,
    featured: true,
    features: [
      { name: "Tudo do plano Básico", included: true },
      { name: "Email do vendedor", included: true, highlight: true },
      { name: "Negociação prioritária", included: true, highlight: true },
      { name: "Histórico de preços", included: true },
      { name: "Alertas avançados", included: true },
      { name: "WhatsApp do vendedor", included: false },
      { name: "Destaque em listagens", included: false },
      { name: "Gerente dedicado", included: false },
    ],
    cta: "Assinar Agora",
  },
  {
    id: "premium",
    name: "Premium",
    price: 149,
    period: "por mês",
    description: "Acesso total para profissionais",
    icon: <Crown className="w-6 h-6" />,
    featured: false,
    features: [
      { name: "Tudo do plano Profissional", included: true },
      { name: "WhatsApp do vendedor", included: true, highlight: true },
      { name: "Email direto", included: true, highlight: true },
      { name: "Destaque em listagens", included: true, highlight: true },
      { name: "Indicador resposta rápida", included: true },
      { name: "Analytics avançado", included: true },
      { name: "API de integração", included: true },
      { name: "Gerente dedicado", included: true, highlight: true },
    ],
    cta: "Ser Premium",
  },
];

interface PricingSectionProps {
  onPlanSelect: (planId: string) => void;
}

const PricingSection = ({ onPlanSelect }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-primary-navy/30">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/30">
            Planos de Assinatura
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Desbloqueie <span className="text-primary">Todo o Potencial</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Acesso a informações de contato e recursos exclusivos para negociar com mais eficiência.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative glass-card p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured 
                  ? 'border-2 border-primary scale-105 lg:scale-110 shadow-glow z-10' 
                  : 'border border-white/10'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                  plan.featured 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-white/10 text-foreground'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price === 0 ? 'Grátis' : `R$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className="text-neutral-400 text-sm">/{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center gap-3 ${
                      feature.included ? 'text-neutral-200' : 'text-neutral-500'
                    }`}
                  >
                    {feature.included ? (
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.highlight 
                          ? 'bg-success text-foreground' 
                          : 'bg-white/10 text-success'
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                        <X className="w-3 h-3 text-neutral-600" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.highlight ? 'font-semibold' : ''}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                onClick={() => onPlanSelect(plan.id)}
                className="w-full"
                variant={plan.featured ? "default" : "secondary"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="text-center mt-12">
          <p className="text-neutral-400 text-sm">
            ✓ Cancele a qualquer momento &nbsp;•&nbsp; ✓ Garantia de 7 dias &nbsp;•&nbsp; ✓ Dados protegidos (LGPD)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
