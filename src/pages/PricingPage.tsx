import { useState } from "react";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";

const PricingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Pricing />
        <FAQSection />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default PricingPage;