import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

interface HeroSectionProps {
  onLoginClick: () => void;
}

const HeroSection = ({ onLoginClick }: HeroSectionProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Will trigger login modal for full functionality
    onLoginClick();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-navy to-primary-dark" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-purple/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm text-neutral-300">
              +500 domínios .br disponíveis agora
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
            Este domínio{" "}
            <span className="text-primary">jyd.com.br</span>{" "}
            esta a venda
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Marketplace seguro para comprar, vender e leiloar domínios brasileiros. 
            Negociação protegida, verificação de propriedade e suporte LGPD.
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto mb-12 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative flex items-center">
              <div className="absolute left-4 text-neutral-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Buscar domínio... ex: seudominio.com.br"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 sm:h-16 pl-12 pr-36 rounded-2xl bg-white/5 border border-white/10 text-foreground placeholder:text-neutral-500 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-base sm:text-lg"
              />
              <Button 
                type="submit"
                className="absolute right-2 h-10 sm:h-12 px-4 sm:px-6"
              >
                <span className="hidden sm:inline">Buscar</span>
                <ArrowRight className="w-5 h-5 sm:ml-2" />
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground">500+</span>
              <span className="text-xs sm:text-sm text-neutral-400">Domínios</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <Shield className="w-6 h-6 text-success" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground">100%</span>
              <span className="text-xs sm:text-sm text-neutral-400">Seguro</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5">
              <Zap className="w-6 h-6 text-secondary-purple" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground">24h</span>
              <span className="text-xs sm:text-sm text-neutral-400">Suporte</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
