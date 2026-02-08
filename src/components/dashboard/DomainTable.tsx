import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Eye, Edit, Trash2, TrendingUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface DomainItem {
  id: string;
  name: string;
  extension: string;
  price: number;
  status: "active" | "pending" | "sold" | "auction";
  views: number;
  offers: number;
  createdAt: string;
}

interface DomainTableProps {
  domains: DomainItem[];
  onEdit?: (domain: DomainItem) => void;
  onDelete?: (domain: DomainItem) => void;
  onView?: (domain: DomainItem) => void;
}

const statusConfig = {
  active: { label: "Ativo", variant: "success" as const },
  pending: { label: "Pendente", variant: "warning" as const },
  sold: { label: "Vendido", variant: "secondary" as const },
  auction: { label: "Em Leilão", variant: "purple" as const },
};

export function DomainTable({ domains, onEdit, onDelete, onView }: DomainTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div className="glass-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-border/50 hover:bg-transparent">
            <TableHead className="text-muted-foreground font-semibold">Domínio</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Preço</TableHead>
            <TableHead className="text-muted-foreground font-semibold">Status</TableHead>
            <TableHead className="text-muted-foreground font-semibold hidden md:table-cell">Views</TableHead>
            <TableHead className="text-muted-foreground font-semibold hidden md:table-cell">Ofertas</TableHead>
            <TableHead className="text-muted-foreground font-semibold hidden lg:table-cell">Cadastro</TableHead>
            <TableHead className="text-muted-foreground font-semibold text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {domains.map((domain) => (
            <TableRow 
              key={domain.id} 
              className="border-border/50 hover:bg-muted/30 transition-colors"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {domain.extension.replace(".", "").toUpperCase().slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{domain.name}</p>
                    <p className="text-sm text-muted-foreground">{domain.extension}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="font-semibold text-foreground">
                  {formatCurrency(domain.price)}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant={statusConfig[domain.status].variant}>
                  {statusConfig[domain.status].label}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>{domain.views}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>{domain.offers}</span>
                </div>
              </TableCell>
              <TableCell className="hidden lg:table-cell text-muted-foreground">
                {domain.createdAt}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuItem onClick={() => onView?.(domain)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Visualizar
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit?.(domain)}>
                      <Edit className="w-4 h-4 mr-2" />
                      Editar
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => onDelete?.(domain)}
                      className="text-destructive focus:text-destructive"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Excluir
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
