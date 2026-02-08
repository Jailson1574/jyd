import { 
  LayoutDashboard, 
  Globe, 
  Gavel, 
  MessageSquare, 
  Settings, 
  CreditCard,
  TrendingUp,
  Star,
  LogOut,
  User
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const mainNavItems = [
  { 
    title: "Painel", 
    url: "/dashboard", 
    icon: LayoutDashboard,
    description: "Visão geral"
  },
  { 
    title: "Meus Domínios", 
    url: "/dashboard/domains", 
    icon: Globe,
    description: "Gerenciar domínios"
  },
  { 
    title: "Leilões", 
    url: "/dashboard/auctions", 
    icon: Gavel,
    badge: "3",
    description: "Leilões ativos"
  },
  { 
    title: "Mensagens", 
    url: "/dashboard/messages", 
    icon: MessageSquare,
    badge: "5",
    description: "Negociações"
  },
];

const secondaryNavItems = [
  { 
    title: "Faturamento", 
    url: "/dashboard/billing", 
    icon: CreditCard,
    description: "Pagamentos"
  },
  { 
    title: "Favoritos", 
    url: "/dashboard/favorites", 
    icon: Star,
    description: "Domínios salvos"
  },
  { 
    title: "Relatórios", 
    url: "/dashboard/reports", 
    icon: TrendingUp,
    description: "Estatísticas"
  },
  { 
    title: "Configurações", 
    url: "/dashboard/settings", 
    icon: Settings,
    description: "Preferências"
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar 
      className={cn(
        "border-r border-border/50 bg-card/80 backdrop-blur-xl transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
      collapsible="icon"
    >
      {/* Header */}
      <SidebarHeader className="border-b border-border/50 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Globe className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="font-bold text-foreground text-sm leading-tight truncate">
                Reivindicar
              </span>
              <span className="text-xs text-muted-foreground">Domínio</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
              Principal
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                        isActive(item.url) 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <item.icon className={cn(
                        "w-5 h-5 shrink-0",
                        isActive(item.url) ? "text-primary" : ""
                      )} />
                      {!collapsed && (
                        <>
                          <span className="flex-1 truncate font-medium text-sm">
                            {item.title}
                          </span>
                          {item.badge && (
                            <Badge variant="default" className="h-5 px-1.5 text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-6">
          {!collapsed && (
            <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
              Mais
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200",
                        isActive(item.url) 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <item.icon className={cn(
                        "w-5 h-5 shrink-0",
                        isActive(item.url) ? "text-primary" : ""
                      )} />
                      {!collapsed && (
                        <span className="flex-1 truncate font-medium text-sm">
                          {item.title}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer - User Profile */}
      <SidebarFooter className="border-t border-border/50 p-3">
        <div className={cn(
          "flex items-center gap-3 rounded-lg p-2 hover:bg-muted/50 transition-colors cursor-pointer",
          collapsed && "justify-center"
        )}>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary-purple to-secondary-pink flex items-center justify-center shrink-0">
            <User className="w-4 h-4 text-foreground" />
          </div>
          {!collapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-foreground truncate">João Silva</p>
              <p className="text-xs text-muted-foreground truncate">joao@email.com</p>
            </div>
          )}
          {!collapsed && (
            <LogOut className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer shrink-0" />
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
