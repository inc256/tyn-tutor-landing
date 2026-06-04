import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import Product from "@/components/Product";
import ExampleOutputs from "@/components/ExampleOutputs";
import InsightsSection from "@/components/InsightsSection";
import SocialProofSection from "@/components/SocialProofSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => {}} />
      <main>
        <Hero />
        <InsightsSection />
        <ExampleOutputs />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
