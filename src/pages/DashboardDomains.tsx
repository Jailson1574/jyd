import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { DomainTable, DomainItem } from "@/components/dashboard/DomainTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search, Filter, Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const allDomains: DomainItem[] = [
  { id: "1", name: "tecnologia", extension: ".com.br", price: 45000, status: "active", views: 1240, offers: 5, createdAt: "12/01/2024" },
  { id: "2", name: "financas", extension: ".com.br", price: 32000, status: "auction", views: 890, offers: 12, createdAt: "08/01/2024" },
  { id: "3", name: "saude", extension: ".net.br", price: 18500, status: "pending", views: 456, offers: 2, createdAt: "05/01/2024" },
  { id: "4", name: "educacao", extension: ".org.br", price: 75000, status: "sold", views: 2100, offers: 8, createdAt: "01/01/2024" },
  { id: "5", name: "ecommerce", extension: ".com.br", price: 55000, status: "active", views: 980, offers: 4, createdAt: "15/01/2024" },
  { id: "6", name: "startup", extension: ".com.br", price: 28000, status: "active", views: 720, offers: 3, createdAt: "18/01/2024" },
  { id: "7", name: "consultoria", extension: ".com.br", price: 42000, status: "auction", views: 650, offers: 9, createdAt: "20/01/2024" },
  { id: "8", name: "imobiliaria", extension: ".com.br", price: 38000, status: "pending", views: 410, offers: 1, createdAt: "22/01/2024" },
];

const DashboardDomains = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExtension, setSelectedExtension] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filteredDomains = allDomains.filter((domain) => {
    const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExtension = selectedExtension === "all" || domain.extension === selectedExtension;
    const matchesStatus = activeTab === "all" || domain.status === activeTab;
    return matchesSearch && matchesExtension && matchesStatus;
  });

  const statusCounts = {
    all: allDomains.length,
    active: allDomains.filter(d => d.status === "active").length,
    auction: allDomains.filter(d => d.status === "auction").length,
    pending: allDomains.filter(d => d.status === "pending").length,
    sold: allDomains.filter(d => d.status === "sold").length,
  };

  return (
    <DashboardLayout title="Meus Domínios" subtitle="Gerencie seus domínios cadastrados">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 flex gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar domínio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted/50 border-border/50"
            />
          </div>
          <Select value={selectedExtension} onValueChange={setSelectedExtension}>
            <SelectTrigger className="w-40 bg-muted/50 border-border/50">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Extensão" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value=".com.br">.com.br</SelectItem>
              <SelectItem value=".net.br">.net.br</SelectItem>
              <SelectItem value=".org.br">.org.br</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Novo Domínio
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="bg-muted/50 border border-border/50">
          <TabsTrigger value="all" className="data-[state=active]:bg-background">
            Todos <Badge variant="secondary" className="ml-2">{statusCounts.all}</Badge>
          </TabsTrigger>
          <TabsTrigger value="active" className="data-[state=active]:bg-background">
            Ativos <Badge variant="success" className="ml-2">{statusCounts.active}</Badge>
          </TabsTrigger>
          <TabsTrigger value="auction" className="data-[state=active]:bg-background">
            Em Leilão <Badge variant="purple" className="ml-2">{statusCounts.auction}</Badge>
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-background">
            Pendentes <Badge variant="warning" className="ml-2">{statusCounts.pending}</Badge>
          </TabsTrigger>
          <TabsTrigger value="sold" className="data-[state=active]:bg-background">
            Vendidos <Badge variant="secondary" className="ml-2">{statusCounts.sold}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {filteredDomains.length > 0 ? (
            <DomainTable
              domains={filteredDomains}
              onView={(domain) => console.log("View", domain)}
              onEdit={(domain) => console.log("Edit", domain)}
              onDelete={(domain) => console.log("Delete", domain)}
            />
          ) : (
            <div className="glass-card p-12 text-center">
              <p className="text-muted-foreground mb-4">Nenhum domínio encontrado</p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Domínio
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default DashboardDomains;
