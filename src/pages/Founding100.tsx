import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FoundingHero } from "@/components/founding/FoundingHero";
import { WhyPilotExists } from "@/components/founding/WhyPilotExists";
import { FounderBenefits } from "@/components/founding/FounderBenefits";
import { HowProntoWorks } from "@/components/founding/HowProntoWorks";

import { HowToJoin } from "@/components/founding/HowToJoin";
import { ScarcitySection } from "@/components/founding/ScarcitySection";
import { FoundingCTA } from "@/components/founding/FoundingCTA";
import { FoundingSignupModal } from "@/components/founding/FoundingSignupModal";
import { StickyFoundingCTA } from "@/components/founding/StickyFoundingCTA";
import { FoundingFAQ } from "@/components/founding/FoundingFAQ";

const Founding100 = () => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <FoundingHero onSignupClick={() => setIsSignupModalOpen(true)} />
        <WhyPilotExists />
        <FounderBenefits onSignupClick={() => setIsSignupModalOpen(true)} />
        <HowProntoWorks />
        <HowToJoin />
        <ScarcitySection />
        <FoundingFAQ />
        <FoundingCTA onSignupClick={() => setIsSignupModalOpen(true)} />
      </main>
      <Footer />
      
      <FoundingSignupModal 
        open={isSignupModalOpen} 
        onOpenChange={setIsSignupModalOpen} 
      />
      
      <StickyFoundingCTA onSignupClick={() => setIsSignupModalOpen(true)} />
    </div>
  );
};

export default Founding100;
