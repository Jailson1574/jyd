import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainsSection from "@/components/DomainsSection";
import LiveAuctions from "@/components/LiveAuctions";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import ScrollPopup from "@/components/ScrollPopup";
import type { Domain } from "@/components/DomainCard";

const Index = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleDomainAction = (domain: Domain) => {
    // Open login modal when user tries to take action on a domain
    setLoginModalOpen(true);
  };

  const handlePlanSelect = (planId: string) => {
    // Open login modal when user tries to select a plan
    setLoginModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onLoginClick={() => setLoginModalOpen(true)} />
      <HeroSection onLoginClick={() => setLoginModalOpen(true)} />
      <DomainsSection onDomainAction={handleDomainAction} />
      <LiveAuctions onBidClick={handleDomainAction} />
      <PricingSection onPlanSelect={handlePlanSelect} />
      <HowItWorks />
      <Footer />
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
      <ScrollPopup />
    </div>
  );
};

export default Index;
