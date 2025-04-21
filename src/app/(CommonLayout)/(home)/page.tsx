import FeaturedSection from "@/components/modules/home/FeaturedSection/FeaturedSection";
import HeroSection from "@/components/modules/home/HeroSection";

const HomePage = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedSection/> 
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
