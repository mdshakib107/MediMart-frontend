import CustomButton from "@/components/shared/CustomButton";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const HomePage = () => {
  return (
    <>
      <Navbar/>
      <main className="min-h-screen">
        <CustomButton textName="Get Started" />
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;