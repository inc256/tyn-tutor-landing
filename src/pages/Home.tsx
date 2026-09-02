import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import Product from "@/components/Product";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar onDownloadClick={() => {}} />
        <main>
         <Hero />
         <FAQSection />
         <CTASection />
       </main>
      <Footer />
    </div>
  );
};

export default Home;
