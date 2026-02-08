import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gavel, Clock, Users, TrendingUp, ArrowRight, Flame } from "lucide-react";
import type { Domain } from "@/components/DomainCard";

interface LiveAuctionsProps {
  onBidClick: (domain: Domain) => void;
}

// Mock live auction data
const liveAuctions: Domain[] = [
  {
    id: "auction-1",
    name: "pagamentos",
    extension: ".com.br",
    price: 75000,
    category: "finanças",
    saleType: "auction",
    isVerified: true,
    isPremiumSeller: true,
    auctionEndsAt: new Date(Date.now() + 35 * 60 * 1000), // 35 minutes
    currentBid: 89500,
    bidCount: 42,
  },
  {
    id: "auction-2",
    name: "delivery",
    extension: ".com.br",
    price: 55000,
    category: "comércio",
    saleType: "auction",
    isVerified: true,
    isPremiumSeller: false,
    auctionEndsAt: new Date(Date.now() + 2.5 * 60 * 60 * 1000), // 2.5 hours
    currentBid: 67800,
    bidCount: 23,
  },
  {
    id: "auction-3",
    name: "investir",
    extension: ".com.br",
    price: 120000,
    category: "finanças",
    saleType: "auction",
    isVerified: true,
    isPremiumSeller: true,
    auctionEndsAt: new Date(Date.now() + 18 * 60 * 1000), // 18 minutes
    currentBid: 145000,
    bidCount: 67,
  },
];

const LiveAuctions = ({ onBidClick }: LiveAuctionsProps) => {
  const [timeRemaining, setTimeRemaining] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const times: { [key: string]: string } = {};
      liveAuctions.forEach(auction => {
        if (auction.auctionEndsAt) {
          const diff = auction.auctionEndsAt.getTime() - Date.now();
          if (diff > 0) {
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            times[auction.id] = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
          } else {
            times[auction.id] = "Encerrado";
          }
        }
      });
      setTimeRemaining(times);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const isEndingSoon = (auction: Domain) => {
    if (!auction.auctionEndsAt) return false;
    return (auction.auctionEndsAt.getTime() - Date.now()) < 30 * 60 * 1000; // 30 minutes
  };

  return (
    <section id="auctions" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-secondary-purple/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 border border-error/20 mb-6">
            <Flame className="w-4 h-4 text-error animate-pulse" />
            <span className="text-sm text-error font-medium">Leilões ao Vivo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Lances Acontecendo <span className="text-secondary-purple">Agora</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Domínios premium com lances em tempo real. Não perca as melhores oportunidades.
          </p>
        </div>

        {/* Live Auctions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {liveAuctions.map((auction) => (
            <div 
              key={auction.id} 
              className={`glass-card p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isEndingSoon(auction) ? 'border-error/50 animate-pulse-glow' : ''
              }`}
            >
              {/* Hot Badge for ending soon */}
              {isEndingSoon(auction) && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-error text-foreground text-xs font-bold rounded-bl-lg">
                  🔥 ENCERRANDO
                </div>
              )}

              {/* Domain Info */}
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  {auction.name}
                  <span className="text-secondary-purple">{auction.extension}</span>
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-neutral-400 border-neutral-600">
                    {auction.category}
                  </Badge>
                  {auction.isPremiumSeller && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">Premium</Badge>
                  )}
                </div>
              </div>

              {/* Timer */}
              <div className={`mb-6 p-4 rounded-xl ${isEndingSoon(auction) ? 'bg-error/10' : 'bg-white/5'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock className={`w-4 h-4 ${isEndingSoon(auction) ? 'text-error' : 'text-neutral-400'}`} />
                  <span className={`text-sm ${isEndingSoon(auction) ? 'text-error' : 'text-neutral-400'}`}>
                    Tempo restante
                  </span>
                </div>
                <div className={`font-mono text-3xl font-bold ${isEndingSoon(auction) ? 'text-error countdown-pulse' : 'text-foreground'}`}>
                  {timeRemaining[auction.id] || '--:--:--'}
                </div>
              </div>

              {/* Current Bid */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-400">Lance atual</span>
                  <div className="flex items-center gap-1 text-success text-sm">
                    <TrendingUp className="w-4 h-4" />
                    <span>+{Math.round(((auction.currentBid || 0) / auction.price - 1) * 100)}%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">
                  {formatPrice(auction.currentBid || auction.price)}
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-neutral-400">
                  <Users className="w-4 h-4" />
                  <span>{auction.bidCount} lances</span>
                </div>
              </div>

              {/* Bid Button */}
              <Button 
                onClick={() => onBidClick(auction)}
                className="w-full"
                variant="premium"
                size="lg"
              >
                <Gavel className="w-5 h-5" />
                Dar Lance Agora
              </Button>
            </div>
          ))}
        </div>

        {/* View All Auctions */}
        <div className="text-center">
          <Button variant="secondary" size="lg" className="gap-2">
            Ver Todos os Leilões
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveAuctions;
