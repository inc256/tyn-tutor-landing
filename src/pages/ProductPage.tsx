import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import FAQSection from "@/components/FAQSection";
import ExampleOutputs from "@/components/ExampleOutputs";
import Footer from "@/components/Footer";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Product />
        <ExampleOutputs />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;