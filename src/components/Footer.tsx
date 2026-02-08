import { Globe, Mail, Shield, FileText, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-foreground leading-tight">
                  Reivindicar
                </span>
                <span className="text-xs text-muted-foreground -mt-1">Domínio</span>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              O marketplace brasileiro para compra, venda e leilão de domínios .br com segurança e conformidade LGPD.
            </p>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Shield className="w-4 h-4 text-success" />
              <span>Plataforma 100% segura</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#domains" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                  Explorar Domínios
                </a>
              </li>
              <li>
                <a href="#auctions" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                  Leilões ao Vivo
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Conformidade LGPD
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  suporte@reivindicardominio.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © 2025 Reivindicar Domínio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-neutral-500 text-sm">
              Feito com 💛 no Brasil
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
