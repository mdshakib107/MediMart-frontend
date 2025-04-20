import FeaturedSection from "@/components/modules/home/FeaturedSection/FeaturedSection";
import HeroSection from "@/components/modules/home/HeroSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedSection/>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
