import { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Shield, 
  Bell, 
  CreditCard, 
  Building, 
  CheckCircle,
  AlertTriangle,
  Upload
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DashboardSettings = () => {
  const [notifications, setNotifications] = useState({
    emailOffers: true,
    emailMessages: true,
    emailAuctions: true,
    pushOffers: false,
    pushMessages: true,
    pushAuctions: true,
  });

  return (
    <DashboardLayout title="Configurações" subtitle="Gerencie sua conta e preferências">
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-muted/50 border border-border/50">
          <TabsTrigger value="profile" className="data-[state=active]:bg-background">
            <User className="w-4 h-4 mr-2" />
            Perfil
          </TabsTrigger>
          <TabsTrigger value="verification" className="data-[state=active]:bg-background">
            <Shield className="w-4 h-4 mr-2" />
            Verificação
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-background">
            <Bell className="w-4 h-4 mr-2" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="billing" className="data-[state=active]:bg-background">
            <CreditCard className="w-4 h-4 mr-2" />
            Faturamento
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Informações Pessoais</CardTitle>
                <CardDescription>Atualize suas informações básicas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary-purple to-secondary-pink flex items-center justify-center">
                    <User className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <Button variant="secondary" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Alterar Foto
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG até 5MB</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" defaultValue="João" className="bg-muted/50 border-border/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" defaultValue="Silva" className="bg-muted/50 border-border/50" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="joao@email.com" className="bg-muted/50 border-border/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" defaultValue="+55 11 99999-9999" className="bg-muted/50 border-border/50" />
                </div>

                <Button className="w-full">Salvar Alterações</Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Tipo de Conta</CardTitle>
                <CardDescription>Defina seu perfil de uso na plataforma</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Comprador</p>
                        <p className="text-sm text-muted-foreground">Buscar e comprar domínios</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-primary/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                        <Building className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Vendedor</p>
                        <p className="text-sm text-muted-foreground">Vender e leiloar domínios</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-medium text-foreground mb-3">Plano Atual</h4>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-secondary-purple/10 to-secondary-pink/10 border border-secondary-purple/20">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">Plano Premium</span>
                        <Badge variant="purple">Ativo</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Renova em 15/02/2024</p>
                    </div>
                    <Button variant="secondary" size="sm">Gerenciar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Verification Tab */}
        <TabsContent value="verification">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Verificação de Identidade</CardTitle>
              <CardDescription>
                Verificação obrigatória para vender domínios na plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Verification Status */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-success/10 border border-success/20">
                <CheckCircle className="w-8 h-8 text-success" />
                <div>
                  <p className="font-semibold text-foreground">Conta Verificada</p>
                  <p className="text-sm text-muted-foreground">Sua identidade foi confirmada em 10/01/2024</p>
                </div>
                <Badge variant="success" className="ml-auto">Verificado</Badge>
              </div>

              {/* Verification Details */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Tipo de Documento</Label>
                  <Select defaultValue="cpf">
                    <SelectTrigger className="bg-muted/50 border-border/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cpf">CPF</SelectItem>
                      <SelectItem value="cnpj">CNPJ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Número do Documento</Label>
                  <Input defaultValue="***.***.***-00" disabled className="bg-muted/50 border-border/50" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Nome Completo / Razão Social</Label>
                <Input defaultValue="João da Silva" disabled className="bg-muted/50 border-border/50" />
              </div>

              <div className="space-y-2">
                <Label>Endereço</Label>
                <Input defaultValue="Rua Example, 123 - São Paulo, SP" disabled className="bg-muted/50 border-border/50" />
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Atualização de Dados</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Para atualizar seus dados cadastrais, entre em contato com o suporte.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications">
          <Card className="glass-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Preferências de Notificação</CardTitle>
              <CardDescription>Escolha como deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email Notifications */}
              <div>
                <h4 className="font-medium text-foreground mb-4">Notificações por Email</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">Novas ofertas</p>
                      <p className="text-sm text-muted-foreground">Receba alertas sobre novas ofertas</p>
                    </div>
                    <Switch 
                      checked={notifications.emailOffers}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailOffers: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">Mensagens</p>
                      <p className="text-sm text-muted-foreground">Notificações de novas mensagens</p>
                    </div>
                    <Switch 
                      checked={notifications.emailMessages}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailMessages: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">Leilões</p>
                      <p className="text-sm text-muted-foreground">Atualizações de leilões que você participa</p>
                    </div>
                    <Switch 
                      checked={notifications.emailAuctions}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, emailAuctions: checked }))}
                    />
                  </div>
                </div>
              </div>

              {/* Push Notifications */}
              <div className="pt-6 border-t border-border/50">
                <h4 className="font-medium text-foreground mb-4">Notificações Push</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">Novas ofertas</p>
                      <p className="text-sm text-muted-foreground">Alertas instantâneos no navegador</p>
                    </div>
                    <Switch 
                      checked={notifications.pushOffers}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushOffers: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">Mensagens</p>
                      <p className="text-sm text-muted-foreground">Notificações de chat em tempo real</p>
                    </div>
                    <Switch 
                      checked={notifications.pushMessages}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushMessages: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">Leilões</p>
                      <p className="text-sm text-muted-foreground">Alertas de lances e término de leilões</p>
                    </div>
                    <Switch 
                      checked={notifications.pushAuctions}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, pushAuctions: checked }))}
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full">Salvar Preferências</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing Tab */}
        <TabsContent value="billing">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Método de Pagamento</CardTitle>
                <CardDescription>Gerencie seus métodos de pagamento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg border border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-muted flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground text-sm">•••• •••• •••• 4242</p>
                      <p className="text-xs text-muted-foreground">Expira em 12/2025</p>
                    </div>
                  </div>
                  <Badge variant="success">Padrão</Badge>
                </div>

                <Button variant="secondary" className="w-full">
                  Adicionar Novo Cartão
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Histórico de Faturas</CardTitle>
                <CardDescription>Últimas transações e faturas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { date: "01/02/2024", desc: "Plano Premium", value: "R$ 99,90", status: "Pago" },
                    { date: "01/01/2024", desc: "Plano Premium", value: "R$ 99,90", status: "Pago" },
                    { date: "01/12/2023", desc: "Plano Premium", value: "R$ 99,90", status: "Pago" },
                  ].map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <p className="font-medium text-foreground text-sm">{invoice.desc}</p>
                        <p className="text-xs text-muted-foreground">{invoice.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground text-sm">{invoice.value}</p>
                        <Badge variant="success" className="text-xs">{invoice.status}</Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full mt-4 text-primary">
                  Ver Todas as Faturas
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default DashboardSettings;
