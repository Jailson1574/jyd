import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg text-foreground leading-tight">
                  Reivindicar
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase bg-primary text-primary-foreground rounded animate-pulse-glow">
                  Beta
                </span>
              </div>
              <span className="text-xs text-muted-foreground -mt-1">Domínio</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#domains" className="text-neutral-300 hover:text-primary transition-colors font-medium">
              Domínios
            </a>
            <a href="#auctions" className="text-neutral-300 hover:text-primary transition-colors font-medium">
              Leilões
            </a>
            <a href="#pricing" className="text-neutral-300 hover:text-primary transition-colors font-medium">
              Planos
            </a>
            <a href="#how-it-works" className="text-neutral-300 hover:text-primary transition-colors font-medium">
              Como Funciona
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={onLoginClick}>
              Entrar
            </Button>
            <Button onClick={onLoginClick}>
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#domains" className="text-neutral-300 hover:text-primary transition-colors font-medium py-2">
                Domínios
              </a>
              <a href="#auctions" className="text-neutral-300 hover:text-primary transition-colors font-medium py-2">
                Leilões
              </a>
              <a href="#pricing" className="text-neutral-300 hover:text-primary transition-colors font-medium py-2">
                Planos
              </a>
              <a href="#how-it-works" className="text-neutral-300 hover:text-primary transition-colors font-medium py-2">
                Como Funciona
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Button variant="secondary" onClick={onLoginClick} className="w-full">
                  Entrar
                </Button>
                <Button onClick={onLoginClick} className="w-full">
                  Começar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
