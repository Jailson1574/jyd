import { useState } from "react";
import DomainCard, { Domain } from "@/components/DomainCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, Grid3X3, List } from "lucide-react";

// Mock data for domains
const mockDomains: Domain[] = [
  {
    id: "0",
    name: "jyd",
    extension: ".com.br",
    price: 25000,
    category: "negócios",
    saleType: "fixed",
    isVerified: true,
    isPremiumSeller: true,
  },
  {
    id: "1",
    name: "fintech",
    extension: ".com.br",
    price: 45000,
    category: "finanças",
    saleType: "fixed",
    isVerified: true,
    isPremiumSeller: true,
  },
  {
    id: "2",
    name: "startup",
    extension: ".com.br",
    price: 28000,
    category: "negócios",
    saleType: "auction",
    isVerified: true,
    isPremiumSeller: false,
    auctionEndsAt: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    currentBid: 32500,
    bidCount: 15,
  },
  {
    id: "3",
    name: "crypto",
    extension: ".net.br",
    price: 18000,
    category: "tecnologia",
    saleType: "fixed",
    isVerified: true,
    isPremiumSeller: true,
  },
  {
    id: "4",
    name: "ecommerce",
    extension: ".com.br",
    price: 55000,
    category: "comércio",
    saleType: "auction",
    isVerified: true,
    isPremiumSeller: true,
    auctionEndsAt: new Date(Date.now() + 45 * 60 * 1000), // 45 minutes from now
    currentBid: 62000,
    bidCount: 28,
  },
  {
    id: "5",
    name: "saude",
    extension: ".com.br",
    price: 35000,
    category: "saúde",
    saleType: "fixed",
    isVerified: false,
    isPremiumSeller: false,
  },
  {
    id: "6",
    name: "imobiliaria",
    extension: ".com.br",
    price: 42000,
    category: "imóveis",
    saleType: "auction",
    isVerified: true,
    isPremiumSeller: false,
    auctionEndsAt: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours from now
    currentBid: 48000,
    bidCount: 12,
  },
];

const extensions = [".com.br", ".net.br", ".org.br", ".app.br", ".blog.br"];
const categories = ["todos", "tecnologia", "finanças", "negócios", "saúde", "imóveis", "comércio"];
const saleTypes = ["todos", "venda direta", "leilão"];

interface DomainsSectionProps {
  onDomainAction: (domain: Domain) => void;
}

const DomainsSection = ({ onDomainAction }: DomainsSectionProps) => {
  const [selectedExtension, setSelectedExtension] = useState<string>("todos");
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [selectedSaleType, setSelectedSaleType] = useState<string>("todos");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDomains = mockDomains.filter(domain => {
    if (selectedExtension !== "todos" && domain.extension !== selectedExtension) return false;
    if (selectedCategory !== "todos" && domain.category !== selectedCategory) return false;
    if (selectedSaleType === "venda direta" && domain.saleType !== "fixed") return false;
    if (selectedSaleType === "leilão" && domain.saleType !== "auction") return false;
    return true;
  });

  return (
    <section id="domains" className="py-20 bg-gradient-to-b from-primary-navy/50 to-background">
      <div className="container px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Domínios <span className="text-primary">Disponíveis</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Explore domínios .br verificados e prontos para negociação
            </p>
          </div>
          <Button 
            variant="secondary"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            Filtros
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="glass-card p-6 mb-8 animate-slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Extension Filter */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">Extensão</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedExtension("todos")}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedExtension === "todos"
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                    }`}
                  >
                    Todos
                  </button>
                  {extensions.map(ext => (
                    <button
                      key={ext}
                      onClick={() => setSelectedExtension(ext)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedExtension === ext
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      {ext}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">Categoria</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                        selectedCategory === cat
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sale Type Filter */}
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-3">Tipo de Venda</label>
                <div className="flex flex-wrap gap-2">
                  {saleTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedSaleType(type)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all capitalize ${
                        selectedSaleType === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-neutral-400">
            <span className="text-foreground font-semibold">{filteredDomains.length}</span> domínios encontrados
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDomains.map((domain) => (
            <DomainCard
              key={domain.id}
              domain={domain}
              onAction={onDomainAction}
            />
          ))}
        </div>

        {/* Load More */}
        {filteredDomains.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Ver Mais Domínios
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DomainsSection;
