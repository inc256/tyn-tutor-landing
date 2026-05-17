import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => {}} />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Home;