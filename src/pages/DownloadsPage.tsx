import Navbar from "@/components/Navbar";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

const DownloadsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Downloads />
      </main>
      <Footer />
    </div>
  );
};

export default DownloadsPage;