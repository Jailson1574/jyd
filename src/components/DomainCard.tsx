import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Gavel, Tag, Verified, Crown, Lock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";

export interface Domain {
  id: string;
  name: string;
  extension: string;
  price: number;
  category: string;
  saleType: "fixed" | "auction";
  isVerified: boolean;
  isPremiumSeller: boolean;
  auctionEndsAt?: Date;
  currentBid?: number;
  bidCount?: number;
}

interface DomainCardProps {
  domain: Domain;
  onAction: (domain: Domain) => void;
}

const DomainCard = ({ domain, onAction }: DomainCardProps) => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      whatsapp: "",
    });
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getTimeRemaining = (endDate: Date) => {
    const now = new Date();
    const diff = endDate.getTime() - now.getTime();
    
    if (diff <= 0) return "Encerrado";
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      return `${days}d ${hours % 24}h`;
    }
    
    return `${hours}h ${minutes}m`;
  };

  const isAuction = domain.saleType === "auction";
  const isEndingSoon = isAuction && domain.auctionEndsAt && 
    (domain.auctionEndsAt.getTime() - Date.now()) < 3600000; // Less than 1 hour

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWhatsApp = (whatsapp: string) => {
    const cleanedNumber = whatsapp.replace(/\D/g, "");
    return cleanedNumber.length === 11;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "whatsapp") {
      const cleanedValue = value.replace(/\D/g, "").slice(0, 11);
      setFormData(prev => ({ ...prev, [name]: cleanedValue }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Nome completo é obrigatório";
    }

    if (!formData.email.trim()) {
      errors.email = "Email é obrigatório";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Email inválido";
    }

    if (!formData.whatsapp.trim()) {
      errors.whatsapp = "WhatsApp é obrigatório";
    } else if (!validateWhatsApp(formData.whatsapp)) {
      errors.whatsapp = "WhatsApp deve ter 11 dígitos";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep = (s: number) => {
    const errors: Record<string, string> = {};
    if (s === 0) {
      if (!formData.name.trim()) errors.name = "Nome completo é obrigatório";
    }
    if (s === 1) {
      if (!formData.email.trim()) errors.email = "Email é obrigatório";
      else if (!validateEmail(formData.email)) errors.email = "Email inválido";
    }
    if (s === 2) {
      if (!formData.whatsapp.trim()) errors.whatsapp = "WhatsApp é obrigatório";
      else if (!validateWhatsApp(formData.whatsapp)) errors.whatsapp = "WhatsApp deve ter 11 dígitos";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 2));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário validado:", formData);
      
      // Salvar dados no localStorage
      const interests = JSON.parse(localStorage.getItem("domainInterests") || "[]");
      const newInterest = {
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        domain: `${domain.name}${domain.extension}`,
        timestamp: new Date().toLocaleString("pt-BR"),
      };
      interests.push(newInterest);
      localStorage.setItem("domainInterests", JSON.stringify(interests));
      
      // Mostrar mensagem de sucesso no mesmo popup e exibir botão WhatsApp
      setSubmitted(true);
      // manter os dados caso queira usar
    }
  };

  const handleNegociar = () => {
    if (domain.saleType === "fixed") {
      setShowForm(true);
    } else {
      onAction(domain);
    }
  };

  return (
    <>
      <div className="group relative glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      {/* Badges Row */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        {isAuction ? (
          <Badge className="bg-secondary-purple/20 text-secondary-purple border-secondary-purple/30 gap-1">
            <Gavel className="w-3 h-3" />
            Leilão
          </Badge>
        ) : (
          <Badge className="bg-success/20 text-success border-success/30 gap-1">
            <Tag className="w-3 h-3" />
            Venda Direta
          </Badge>
        )}
        {domain.isVerified && (
          <Badge className="bg-secondary-blue/20 text-secondary-blue border-secondary-blue/30 gap-1">
            <Verified className="w-3 h-3" />
            Verificado
          </Badge>
        )}
        {domain.isPremiumSeller && (
          <Badge className="bg-primary/20 text-primary border-primary/30 gap-1">
            <Crown className="w-3 h-3" />
            Premium
          </Badge>
        )}
      </div>

      {/* Domain Name */}
      <div className="mb-4">
        <h3 className="font-display text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
          {domain.name}
          <span className="text-primary">{domain.extension}</span>
        </h3>
        <p className="text-sm text-neutral-400 capitalize">{domain.category}</p>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        {isAuction ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">Lance atual</span>
              <span className="text-sm text-neutral-400">{domain.bidCount} lances</span>
            </div>
            <div className="text-2xl font-bold text-foreground">
              {formatPrice(domain.currentBid || domain.price)}
            </div>
            {domain.auctionEndsAt && (
              <div className={`flex items-center gap-2 text-sm ${isEndingSoon ? 'text-error countdown-pulse' : 'text-neutral-400'}`}>
                <Clock className="w-4 h-4" />
                <span>Termina em {getTimeRemaining(domain.auctionEndsAt)}</span>
              </div>
            )}
          </div>
        ) : (
          <div>
            <span className="text-sm text-neutral-400">Preço fixo</span>
            <div className="text-2xl font-bold text-foreground">
              {formatPrice(domain.price)}
            </div>
          </div>
        )}
      </div>

      {/* Action Button */}
      <Button 
        onClick={handleNegociar}
        className="w-full"
        variant={isAuction ? "premium" : "default"}
      >
        {isAuction ? (
          <>
            <Gavel className="w-4 h-4" />
            Dar Lance
          </>
        ) : (
          <>
            <Lock className="w-4 h-4" />
            Negociar
          </>
        )}
      </Button>
  </div>

      {/* Form Dialog for Direct Sales */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md bg-card border-primary/20">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">
              Negociar {domain.name}{domain.extension}
            </DialogTitle>
            <DialogDescription className="text-neutral-400">
              Preencha seus dados para entrarmos em contato
            </DialogDescription>
          </DialogHeader>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
            {step === 0 && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Nome Completo <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`${formErrors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {formErrors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.name}
                  </p>
                )}
              </div>
            )}

            {step === 1 && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${formErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {formErrors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.email}
                  </p>
                )}
              </div>
            )}

            {step === 2 && (
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-300 mb-2">
                  WhatsApp (11 dígitos) <span className="text-red-500">*</span>
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="11999999999"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  maxLength={11}
                  className={`${formErrors.whatsapp ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {formErrors.whatsapp && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {formErrors.whatsapp}
                  </p>
                )}
              </div>
            )}

            <div className="flex items-center gap-2">
              {step > 0 && (
                <Button type="button" variant="secondary" onClick={() => setStep(s => s - 1)}>
                  Voltar
                </Button>
              )}

              {step < 2 ? (
                <Button type="button" onClick={handleNext} className="ml-auto">
                  Próximo
                </Button>
              ) : (
                <Button type="submit" className="ml-auto">
                  Enviar Interesse
                </Button>
              )}
            </div>
            </form>
          ) : (
            <div className="space-y-4 text-center py-6">
              <h3 className="text-lg font-semibold text-foreground">Interesse registrado!</h3>
              <p className="text-sm text-neutral-400">Entraremos em contato em breve.</p>

              <div className="space-y-2 mt-4">
                <a
                  href={"https://wa.me/5541988619714?text=" + encodeURIComponent("Olá tenho *interesse* aguardo retorno, obrigado. Seu Nome Aqui.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full">Abrir WhatsApp</Button>
                </a>

                <Button variant="secondary" onClick={() => { setShowForm(false); setSubmitted(false); setStep(0); setFormData({ name: "", email: "", whatsapp: "" }); }} className="w-full">
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      </>
  );
};

export default DomainCard;
