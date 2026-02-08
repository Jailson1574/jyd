import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe, Mail, MessageCircle } from "lucide-react";

const ScrollPopup = () => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasShown && window.scrollY > 100) {
        setOpen(true);
        setHasShown(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

  const domains = [
    { name: "jyd", extension: ".com.br" },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-display">
            <Globe className="w-5 h-5 text-primary" />
            Domínios Exclusivos Disponíveis
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Oportunidade única de adquirir domínios premium .br
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/10"
            >
              <div>
                <span className="font-display text-lg font-bold text-foreground">
                  {domain.name}
                  <span className="text-primary">{domain.extension}</span>
                </span>
              </div>
              <span className="text-sm text-success font-medium">Disponível</span>
            </div>
          ))}

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-neutral-400 mb-3">
              Entre em contato para negociar:
            </p>
            <a
              href="mailto:webpix@icloud.com"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              webpix@icloud.com
            </a>
          </div>
        </div>

        <Button onClick={() => setOpen(false)} className="w-full">
          <MessageCircle className="w-4 h-4 mr-2" />
          Tenho Interesse
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ScrollPopup;
