import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Highlights />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Index;
