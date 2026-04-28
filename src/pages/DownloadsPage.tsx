import { useState } from "react";
import Navbar from "@/components/Navbar";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";

const DownloadsPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Downloads />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default DownloadsPage;