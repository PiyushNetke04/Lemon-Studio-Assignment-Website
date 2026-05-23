import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import TrendingSection from "../components/TrendingSection";
import TopSellingSection from "../components/TopSellingSection";
import ReviewSection from "../components/ReviewSection";
import BestO2Section from "../components/BestO2Section";
import Footer from "../components/Footer";

import backtree from "../assets/backtree.jpg";

function Home() {

  return (

    <div className="overflow-x-hidden bg-[#08110a] text-white">

      {/* HERO + TRENDING */}
      <div className="relative overflow-hidden pb-[120px] md:pb-[160px] lg:pb-[180px]">

        {/* BACKGROUND */}
        <img
          src={backtree}
          alt="background"
          className="pointer-events-none absolute left-1/2 top-[-120px] z-[1] w-[1100px] max-w-none -translate-x-1/2 object-contain opacity-90 md:w-[1450px] lg:w-[1750px]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 z-[2] bg-black/25"></div>

        {/* CONTENT */}
        <div className="relative z-10">

          <Navbar />

          <Hero />

          <TrendingSection />

        </div>

      </div>

      {/* OTHER SECTIONS */}
      <div className="relative z-20 bg-[#08110a]">

        <TopSellingSection />

        <ReviewSection />

        <BestO2Section />

        <Footer />

      </div>

    </div>
  );
}

export default Home;