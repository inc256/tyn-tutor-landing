import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Hero onDownload={() => setModalOpen(true)} />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Home;