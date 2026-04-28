import { useState } from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";

const ContactPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Contact />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default ContactPage;