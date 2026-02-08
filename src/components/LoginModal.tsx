import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, User, ArrowRight, Sparkles, Lock, CheckCircle } from "lucide-react";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const [step, setStep] = useState<"email" | "name" | "verify" | "success">("email");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStep("name");
    }
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      setStep("verify");
    }
  };

  const handleVerifyClick = () => {
    setStep("success");
    // In real app, this would verify the magic link/OTP
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setStep("email");
      setEmail("");
      setName("");
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-white/10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-foreground flex items-center gap-2">
            {step === "success" ? (
              <>
                <CheckCircle className="w-6 h-6 text-success" />
                Conta Criada!
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6 text-primary" />
                {step === "email" ? "Acesse sua conta" : step === "name" ? "Qual seu nome?" : "Verifique seu email"}
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            {step === "email" && "Entre com seu email para acessar ou criar uma conta."}
            {step === "name" && "Precisamos do seu nome completo para continuar."}
            {step === "verify" && `Enviamos um link mágico para ${email}. Clique nele para continuar.`}
            {step === "success" && "Você já pode explorar, negociar e participar de leilões!"}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {step === "email" && (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-300">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white/5 border-white/10 text-foreground placeholder:text-neutral-500 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Continuar
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          )}

          {step === "name" && (
            <form onSubmit={handleNameSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-300">
                  Nome Completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 h-12 bg-white/5 border-white/10 text-foreground placeholder:text-neutral-500 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  type="button" 
                  variant="secondary" 
                  onClick={() => setStep("email")}
                  className="flex-1"
                >
                  Voltar
                </Button>
                <Button type="submit" className="flex-1" size="lg">
                  Continuar
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
          )}

          {step === "verify" && (
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <p className="text-foreground font-medium mb-2">Verifique sua caixa de entrada</p>
                <p className="text-neutral-400 text-sm">
                  Clique no link enviado para <strong className="text-primary">{email}</strong>
                </p>
              </div>
              
              {/* Demo button - in real app this would be automatic after clicking the link */}
              <Button onClick={handleVerifyClick} className="w-full" variant="secondary">
                <Lock className="w-4 h-4 mr-2" />
                Já verifiquei (demo)
              </Button>

              <p className="text-center text-sm text-neutral-500">
                Não recebeu? <button className="text-primary hover:underline">Reenviar email</button>
              </p>
            </div>
          )}

          {step === "success" && (
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl text-center">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <p className="text-foreground font-medium mb-2">Bem-vindo, {name}!</p>
                <p className="text-neutral-400 text-sm">
                  Sua conta foi criada com sucesso. Agora você pode explorar domínios e participar de leilões.
                </p>
              </div>
              
              <Button onClick={handleClose} className="w-full" size="lg">
                Começar a Explorar
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {step === "email" && (
          <p className="mt-4 text-center text-xs text-neutral-500">
            Ao continuar, você concorda com nossos{" "}
            <a href="#" className="text-primary hover:underline">Termos de Uso</a>
            {" "}e{" "}
            <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
