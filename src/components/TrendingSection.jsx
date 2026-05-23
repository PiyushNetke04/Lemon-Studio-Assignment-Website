import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

import { FiShoppingBag } from "react-icons/fi";

function TrendingSection() {

  return (

    <section className="relative z-20 px-[38px] pb-[120px]">

      {/* ================= TITLE ================= */}
      <div className="mb-[78px] flex justify-center">

        <div className="relative inline-flex items-center justify-center px-[42px] py-[10px]">

          {/* LEFT CORNER */}
          <span className="absolute bottom-0 left-0 h-[32px] w-[32px] rounded-bl-[14px] border-b-[4px] border-l-[4px] border-[#8AE234] opacity-90"></span>

          {/* RIGHT CORNER */}
          <span className="absolute right-0 top-0 h-[32px] w-[32px] rounded-tr-[14px] border-r-[4px] border-t-[4px] border-[#8AE234] opacity-90"></span>

          {/* TITLE */}
          <h2 className="text-[44px] font-semibold leading-none text-white">
            Our Trendy plants
          </h2>

        </div>

      </div>

      {/* ================= CARD 1 ================= */}
      <div className="relative isolate mb-[90px] h-[310px] overflow-visible rounded-[48px] border border-white/[0.10] bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[8px]">

        {/* GLASS */}
        <div className="absolute inset-0 rounded-[48px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none"></div>

        {/* GLOW */}
        <div className="absolute left-[120px] top-[10px] h-[200px] w-[200px] rounded-full bg-[#8AE234]/[0.08] blur-[90px]"></div>

        {/* IMAGE */}
        <img
          src={plant2}
          alt="plant"
          className="absolute left-[10px] top-[-62px] z-20 w-[350px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.45)]"
        />

        {/* CONTENT */}
        <div className="absolute right-[80px] top-1/2 z-30 w-[390px] -translate-y-1/2">

          {/* TITLE */}
          <h3 className="text-[24px] font-semibold leading-[1.45] text-white">
            For Small Decs Ai Plat
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[14px] leading-[1.6] text-white/70">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
          </p>

          {/* PRICE */}
          <h4 className="mt-5 text-[22px] font-semibold text-white">
            Rs. 599/-
          </h4>

          {/* BUTTONS */}
          <div className="mt-5 flex items-center gap-4">

            {/* EXPLORE */}
            <button className="h-[44px] rounded-[12px] border border-white/30 bg-white/[0.03] px-9 text-[15px] backdrop-blur-[3px] transition-all duration-300 hover:bg-white hover:text-black">
              Explore
            </button>

            {/* BAG */}
            <button className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-white/30 bg-white/[0.03] backdrop-blur-[3px] transition-all duration-300 hover:bg-white hover:text-black">

              <FiShoppingBag className="text-[16px]" />

            </button>

          </div>

        </div>

      </div>

      {/* ================= CARD 2 ================= */}
      <div className="relative isolate h-[310px] overflow-visible rounded-[48px] border border-white/[0.10] bg-gradient-to-br from-white/[0.05] to-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[8px]">

        {/* GLASS */}
        <div className="absolute inset-0 rounded-[48px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none"></div>

        {/* GLOW */}
        <div className="absolute right-[100px] top-[10px] h-[200px] w-[200px] rounded-full bg-[#8AE234]/[0.08] blur-[90px]"></div>

        {/* IMAGE */}
        <img
          src={plant3}
          alt="plant"
          className="absolute right-[18px] top-[-58px] z-20 w-[350px] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.45)]"
        />

        {/* CONTENT */}
        <div className="absolute left-[75px] top-1/2 z-30 w-[390px] -translate-y-1/2">

          {/* TITLE */}
          <h3 className="text-[24px] font-semibold leading-[1.45] text-white">
            For Fresh Decs Ai Plat
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[14px] leading-[1.6] text-white/70">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
          </p>

          {/* PRICE */}
          <h4 className="mt-5 text-[22px] font-semibold text-white">
            Rs. 579/-
          </h4>

          {/* BUTTONS */}
          <div className="mt-5 flex items-center gap-4">

            {/* EXPLORE */}
            <button className="h-[44px] rounded-[12px] border border-white/30 bg-white/[0.03] px-9 text-[15px] backdrop-blur-[3px] transition-all duration-300 hover:bg-white hover:text-black">
              Explore
            </button>

            {/* BAG */}
            <button className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-white/30 bg-white/[0.03] backdrop-blur-[3px] transition-all duration-300 hover:bg-white hover:text-black">

              <FiShoppingBag className="text-[16px]" />

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrendingSection;