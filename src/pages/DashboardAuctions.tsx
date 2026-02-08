import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Clock, Gavel, TrendingUp, Eye, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface Auction {
  id: string;
  domain: string;
  extension: string;
  currentBid: number;
  startingPrice: number;
  totalBids: number;
  watchers: number;
  endsAt: string;
  timeLeft: string;
  isUserBidding: boolean;
  userMaxBid?: number;
  status: "active" | "ending" | "ended" | "won" | "lost";
}

const mockAuctions: Auction[] = [
  {
    id: "1",
    domain: "premium",
    extension: ".com.br",
    currentBid: 45000,
    startingPrice: 30000,
    totalBids: 15,
    watchers: 42,
    endsAt: "2024-02-01 18:00",
    timeLeft: "2h 30min",
    isUserBidding: true,
    userMaxBid: 50000,
    status: "ending",
  },
  {
    id: "2",
    domain: "negocios",
    extension: ".com.br",
    currentBid: 28000,
    startingPrice: 20000,
    totalBids: 8,
    watchers: 28,
    endsAt: "2024-02-02 14:00",
    timeLeft: "1d 5h",
    isUserBidding: false,
    status: "active",
  },
  {
    id: "3",
    domain: "investimentos",
    extension: ".com.br",
    currentBid: 62000,
    startingPrice: 45000,
    totalBids: 22,
    watchers: 65,
    endsAt: "2024-02-03 20:00",
    timeLeft: "2d 8h",
    isUserBidding: true,
    userMaxBid: 55000,
    status: "active",
  },
  {
    id: "4",
    domain: "marketing",
    extension: ".com.br",
    currentBid: 38000,
    startingPrice: 25000,
    totalBids: 12,
    watchers: 35,
    endsAt: "2024-01-28 16:00",
    timeLeft: "Encerrado",
    isUserBidding: true,
    userMaxBid: 40000,
    status: "won",
  },
  {
    id: "5",
    domain: "vendas",
    extension: ".com.br",
    currentBid: 52000,
    startingPrice: 35000,
    totalBids: 18,
    watchers: 48,
    endsAt: "2024-01-27 12:00",
    timeLeft: "Encerrado",
    isUserBidding: true,
    userMaxBid: 48000,
    status: "lost",
  },
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);

const AuctionCard = ({ auction }: { auction: Auction }) => {
  const statusConfig = {
    active: { label: "Ativo", variant: "success" as const, color: "text-success" },
    ending: { label: "Terminando", variant: "warning" as const, color: "text-warning" },
    ended: { label: "Encerrado", variant: "secondary" as const, color: "text-muted-foreground" },
    won: { label: "Você ganhou!", variant: "success" as const, color: "text-success" },
    lost: { label: "Não arrematado", variant: "destructive" as const, color: "text-destructive" },
  };

  const isEnding = auction.status === "ending";

  return (
    <Card className={cn(
      "glass-card border-border/50 hover:border-primary/30 transition-all duration-300",
      isEnding && "border-warning/50 animate-pulse-glow"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-bold text-foreground">
              {auction.domain}
              <span className="text-muted-foreground font-normal">{auction.extension}</span>
            </CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={statusConfig[auction.status].variant}>
                {statusConfig[auction.status].label}
              </Badge>
              {auction.isUserBidding && auction.status !== "won" && auction.status !== "lost" && (
                <Badge variant="outline" className="border-primary text-primary">
                  Você está participando
                </Badge>
              )}
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-1 px-3 py-1.5 rounded-lg",
            isEnding ? "bg-warning/10 text-warning" : "bg-muted text-muted-foreground"
          )}>
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">{auction.timeLeft}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Current Bid */}
        <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Lance Atual</p>
            <p className="text-2xl font-bold text-primary">{formatCurrency(auction.currentBid)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Preço inicial</p>
            <p className="text-sm text-muted-foreground line-through">
              {formatCurrency(auction.startingPrice)}
            </p>
          </div>
        </div>

        {/* User's Max Bid */}
        {auction.isUserBidding && auction.userMaxBid && auction.status !== "won" && auction.status !== "lost" && (
          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/20">
            <span className="text-sm text-muted-foreground">Seu lance máximo:</span>
            <span className={cn(
              "font-semibold",
              auction.userMaxBid >= auction.currentBid ? "text-success" : "text-destructive"
            )}>
              {formatCurrency(auction.userMaxBid)}
            </span>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <Gavel className="w-4 h-4" />
              <span className="text-lg font-semibold text-foreground">{auction.totalBids}</span>
            </div>
            <p className="text-xs text-muted-foreground">Lances</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span className="text-lg font-semibold text-foreground">{auction.watchers}</span>
            </div>
            <p className="text-xs text-muted-foreground">Observando</p>
          </div>
          <div>
            <div className="flex items-center justify-center gap-1 text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span className="text-lg font-semibold text-foreground">
                {Math.round(((auction.currentBid - auction.startingPrice) / auction.startingPrice) * 100)}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Valorização</p>
          </div>
        </div>

        {/* Action Buttons */}
        {(auction.status === "active" || auction.status === "ending") && (
          <div className="flex gap-3 pt-2">
            <Button variant="secondary" className="flex-1">
              Ver Detalhes
            </Button>
            <Button className="flex-1">
              {auction.isUserBidding ? "Aumentar Lance" : "Fazer Lance"}
            </Button>
          </div>
        )}

        {auction.status === "won" && (
          <Button className="w-full">
            Finalizar Compra
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const DashboardAuctions = () => {
  const [activeTab, setActiveTab] = useState("participating");
  const [searchQuery, setSearchQuery] = useState("");

  const participatingAuctions = mockAuctions.filter(a => a.isUserBidding);
  const watchingAuctions = mockAuctions.filter(a => !a.isUserBidding);
  const historyAuctions = mockAuctions.filter(a => a.status === "won" || a.status === "lost");

  const getAuctionsForTab = () => {
    switch (activeTab) {
      case "participating":
        return participatingAuctions.filter(a => a.status !== "won" && a.status !== "lost");
      case "watching":
        return watchingAuctions;
      case "history":
        return historyAuctions;
      default:
        return [];
    }
  };

  const filteredAuctions = getAuctionsForTab().filter(
    auction => auction.domain.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout title="Leilões" subtitle="Acompanhe e participe de leilões de domínios">
      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar leilão..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-muted/50 border-border/50"
          />
        </div>
        <Button>
          <Gavel className="w-4 h-4 mr-2" />
          Criar Leilão
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-muted/50 border border-border/50 mb-6">
          <TabsTrigger value="participating" className="data-[state=active]:bg-background">
            Participando
            <Badge variant="default" className="ml-2">
              {participatingAuctions.filter(a => a.status !== "won" && a.status !== "lost").length}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="watching" className="data-[state=active]:bg-background">
            Observando
            <Badge variant="secondary" className="ml-2">{watchingAuctions.length}</Badge>
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-background">
            Histórico
            <Badge variant="secondary" className="ml-2">{historyAuctions.length}</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab}>
          {filteredAuctions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAuctions.map(auction => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center">
              <Gavel className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-4">
                {activeTab === "participating" && "Você não está participando de nenhum leilão"}
                {activeTab === "watching" && "Você não está observando nenhum leilão"}
                {activeTab === "history" && "Nenhum histórico de leilões"}
              </p>
              <Button>Explorar Leilões</Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default DashboardAuctions;
