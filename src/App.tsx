import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import DashboardDomains from "./pages/DashboardDomains";
import DashboardAuctions from "./pages/DashboardAuctions";
import DashboardMessages from "./pages/DashboardMessages";
import DashboardSettings from "./pages/DashboardSettings";
import AdminInterests from "./pages/AdminInterests";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/domains" element={<DashboardDomains />} />
          <Route path="/dashboard/auctions" element={<DashboardAuctions />} />
          <Route path="/dashboard/messages" element={<DashboardMessages />} />
          <Route path="/dashboard/settings" element={<DashboardSettings />} />
          <Route path="/dashboard/billing" element={<DashboardSettings />} />
          <Route path="/dashboard/favorites" element={<DashboardDomains />} />
          <Route path="/dashboard/reports" element={<Dashboard />} />
          <Route path="/admin-interests" element={<AdminInterests />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
