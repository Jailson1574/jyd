import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Trash2, Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Interest {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  domain: string;
  timestamp: string;
}

const AdminInterests = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const ADMIN_PASSWORD = "102030"; // Altere para uma senha mais segura

  useEffect(() => {
    const stored = localStorage.getItem("adminAuth");
    if (stored === "true") {
      setIsAuthenticated(true);
      loadInterests();
    }
  }, []);

  const loadInterests = () => {
    const data = localStorage.getItem("domainInterests");
    if (data) {
      try {
        setInterests(JSON.parse(data));
      } catch (e) {
        console.error("Erro ao carregar dados:", e);
      }
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("adminAuth", "true");
      setPassword("");
      loadInterests();
    } else {
      alert("Senha incorreta!");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  const deleteInterest = (id: string) => {
    if (confirm("Tem certeza que deseja deletar este registro?")) {
      const updated = interests.filter(i => i.id !== id);
      setInterests(updated);
      localStorage.setItem("domainInterests", JSON.stringify(updated));
    }
  };

  const exportData = () => {
    const csv = [
      ["ID", "Nome", "Email", "WhatsApp", "Domínio", "Data/Hora"],
      ...interests.map(i => [i.id, i.name, i.email, i.whatsapp, i.domain, i.timestamp])
    ]
      .map(row => row.map(cell => `"${cell}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `interesses_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredInterests = interests.filter(i =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.whatsapp.includes(searchTerm) ||
    i.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-navy to-background flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Card className="p-8 bg-card border-primary/20">
            <h1 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
              Acesso Admin
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Senha
                </label>
                <Input
                  type="password"
                  placeholder="Digite a senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Acessar
              </Button>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-navy to-background">
      <div className="container px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">
            Interesses Registrados
          </h1>
          <Button variant="destructive" onClick={handleLogout} className="gap-2">
            <LogOut className="w-4 h-4" />
            Sair
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 bg-card border-primary/20">
            <p className="text-neutral-400 text-sm">Total de Interesses</p>
            <p className="text-2xl font-bold text-primary">{interests.length}</p>
          </Card>
          <Card className="p-4 bg-card border-primary/20">
            <p className="text-neutral-400 text-sm">Hoje</p>
            <p className="text-2xl font-bold text-primary">
              {interests.filter(i => i.timestamp.startsWith(new Date().toISOString().split("T")[0])).length}
            </p>
          </Card>
          <Card className="p-4 bg-card border-primary/20">
            <p className="text-neutral-400 text-sm">Domínios Diferentes</p>
            <p className="text-2xl font-bold text-primary">
              {new Set(interests.map(i => i.domain)).size}
            </p>
          </Card>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Input
            placeholder="Buscar por nome, email, whatsapp ou domínio..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="secondary" onClick={exportData} className="gap-2">
            <Download className="w-4 h-4" />
            Exportar CSV
          </Button>
        </div>

        {/* Table */}
        <Card className="overflow-hidden bg-card border-primary/20">
          {filteredInterests.length === 0 ? (
            <div className="p-8 text-center text-neutral-400">
              {interests.length === 0
                ? "Nenhum interesse registrado ainda."
                : "Nenhum resultado encontrado."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-primary/10 border-b border-primary/20">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Nome</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Email</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">WhatsApp</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Domínio</th>
                    <th className="px-4 py-3 text-left font-semibold text-foreground">Data/Hora</th>
                    <th className="px-4 py-3 text-center font-semibold text-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/10">
                  {filteredInterests.map((interest) => (
                    <tr key={interest.id} className="hover:bg-primary/5 transition-colors">
                      <td className="px-4 py-3 text-foreground">{interest.name}</td>
                      <td className="px-4 py-3 text-neutral-300">{interest.email}</td>
                      <td className="px-4 py-3 text-neutral-300">{interest.whatsapp}</td>
                      <td className="px-4 py-3 text-primary font-medium">{interest.domain}</td>
                      <td className="px-4 py-3 text-neutral-400 text-xs">{interest.timestamp}</td>
                      <td className="px-4 py-3 text-center">
                        <a
                          href={`https://wa.me/55${interest.whatsapp}?text=Olá ${interest.name}!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 mr-3 inline-block"
                        >
                          WhatsApp
                        </a>
                        <button
                          onClick={() => deleteInterest(interest.id)}
                          className="text-sm text-error hover:text-error/80 inline-block"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminInterests;
