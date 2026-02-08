import { Button } from "@/components/ui/button";
import { Plus, Search, Gavel, MessageSquare } from "lucide-react";

interface QuickActionsProps {
  onAddDomain?: () => void;
  onSearch?: () => void;
  onCreateAuction?: () => void;
  onViewMessages?: () => void;
}

export function QuickActions({ 
  onAddDomain, 
  onSearch, 
  onCreateAuction, 
  onViewMessages 
}: QuickActionsProps) {
  const actions = [
    {
      icon: Plus,
      label: "Adicionar Domínio",
      description: "Cadastre um novo domínio",
      onClick: onAddDomain,
      variant: "default" as const,
    },
    {
      icon: Search,
      label: "Buscar Domínios",
      description: "Encontre o domínio ideal",
      onClick: onSearch,
      variant: "secondary" as const,
    },
    {
      icon: Gavel,
      label: "Criar Leilão",
      description: "Inicie um leilão",
      onClick: onCreateAuction,
      variant: "secondary" as const,
    },
    {
      icon: MessageSquare,
      label: "Mensagens",
      description: "Veja suas negociações",
      onClick: onViewMessages,
      variant: "secondary" as const,
    },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            className="h-auto py-4 flex flex-col items-center gap-2"
            onClick={action.onClick}
          >
            <action.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
