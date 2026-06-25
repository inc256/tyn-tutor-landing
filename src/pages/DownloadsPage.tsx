import Navbar from "@/components/Navbar";
import Downloads from "@/components/Downloads";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const DownloadsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Downloads />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default DownloadsPage;