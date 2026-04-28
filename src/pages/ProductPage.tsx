import { useState } from "react";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Footer from "@/components/Footer";
import DownloadModal from "@/components/DownloadModal";

const ProductPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => setModalOpen(true)} />
      <main>
        <Product />
      </main>
      <Footer />
      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default ProductPage;