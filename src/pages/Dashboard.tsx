import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { DomainTable, DomainItem } from "@/components/dashboard/DomainTable";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { Globe, DollarSign, Eye, Gavel, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data
const mockDomains: DomainItem[] = [
  {
    id: "1",
    name: "tecnologia",
    extension: ".com.br",
    price: 45000,
    status: "active",
    views: 1240,
    offers: 5,
    createdAt: "12/01/2024",
  },
  {
    id: "2",
    name: "financas",
    extension: ".com.br",
    price: 32000,
    status: "auction",
    views: 890,
    offers: 12,
    createdAt: "08/01/2024",
  },
  {
    id: "3",
    name: "saude",
    extension: ".net.br",
    price: 18500,
    status: "pending",
    views: 456,
    offers: 2,
    createdAt: "05/01/2024",
  },
  {
    id: "4",
    name: "educacao",
    extension: ".org.br",
    price: 75000,
    status: "sold",
    views: 2100,
    offers: 8,
    createdAt: "01/01/2024",
  },
];

const mockActivities = [
  {
    id: "1",
    type: "offer" as const,
    title: "Nova oferta recebida",
    description: "Oferta de R$ 48.000 para o domínio",
    time: "5 min",
    domain: "tecnologia.com.br",
  },
  {
    id: "2",
    type: "message" as const,
    title: "Nova mensagem",
    description: "Interesse no domínio financas.com.br",
    time: "1h",
  },
  {
    id: "3",
    type: "auction" as const,
    title: "Lance em leilão",
    description: "Novo lance de R$ 35.000",
    time: "2h",
    domain: "financas.com.br",
  },
  {
    id: "4",
    type: "view" as const,
    title: "Visualização",
    description: "Seu domínio foi visualizado 50 vezes hoje",
    time: "3h",
    domain: "saude.net.br",
  },
  {
    id: "5",
    type: "sale" as const,
    title: "Venda concluída!",
    description: "Domínio vendido com sucesso",
    time: "1d",
    domain: "educacao.org.br",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout 
      title="Dashboard" 
      subtitle="Bem-vindo de volta, João!"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Domínios Ativos"
          value="12"
          change="+2 este mês"
          changeType="positive"
          icon={Globe}
          iconColor="bg-primary/10 text-primary"
        />
        <StatCard
          title="Receita Total"
          value="R$ 125.000"
          change="+15% vs mês anterior"
          changeType="positive"
          icon={DollarSign}
          iconColor="bg-success/10 text-success"
        />
        <StatCard
          title="Visualizações"
          value="4.685"
          change="+340 esta semana"
          changeType="positive"
          icon={Eye}
          iconColor="bg-info/10 text-info"
        />
        <StatCard
          title="Leilões Ativos"
          value="3"
          change="2 terminando hoje"
          changeType="neutral"
          icon={Gavel}
          iconColor="bg-secondary-purple/10 text-secondary-purple"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Domains Table - Takes 2 columns on large screens */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Meus Domínios</h2>
            <button 
              onClick={() => navigate("/dashboard/domains")}
              className="text-sm text-primary hover:underline"
            >
              Ver todos →
            </button>
          </div>
          <DomainTable 
            domains={mockDomains} 
            onView={(domain) => console.log("View", domain)}
            onEdit={(domain) => console.log("Edit", domain)}
            onDelete={(domain) => console.log("Delete", domain)}
          />
        </div>

        {/* Sidebar - Activity & Quick Actions */}
        <div className="space-y-6">
          <QuickActions 
            onAddDomain={() => console.log("Add domain")}
            onSearch={() => navigate("/")}
            onCreateAuction={() => console.log("Create auction")}
            onViewMessages={() => navigate("/dashboard/messages")}
          />
          <RecentActivity activities={mockActivities} />
        </div>
      </div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
        <StatCard
          title="Taxa de Conversão"
          value="12.5%"
          change="+2.3% vs média"
          changeType="positive"
          icon={TrendingUp}
          iconColor="bg-secondary-orange/10 text-secondary-orange"
        />
        <StatCard
          title="Interessados"
          value="48"
          change="Leads ativos"
          changeType="neutral"
          icon={Users}
          iconColor="bg-secondary-pink/10 text-secondary-pink"
        />
        <StatCard
          title="Ofertas Pendentes"
          value="7"
          change="Aguardando resposta"
          changeType="neutral"
          icon={DollarSign}
          iconColor="bg-primary/10 text-primary"
        />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
