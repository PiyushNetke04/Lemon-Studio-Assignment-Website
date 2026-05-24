import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";

import { FiShoppingBag } from "react-icons/fi";

function TrendingSection() {

  return (

    <section className="relative z-20 px-5 pb-[120px] sm:px-8 lg:px-[38px]">

      {/* ================= TITLE ================= */}
      <div className="mb-[70px] flex justify-center lg:mb-[78px]">

        <div className="relative inline-flex items-center justify-center px-5 py-[10px] sm:px-[42px]">

          {/* LEFT CORNER */}
          <span className="absolute bottom-0 left-0 h-[24px] w-[24px] rounded-bl-[10px] border-b-[3px] border-l-[3px] border-[#8AE234] opacity-90 sm:h-[32px] sm:w-[32px] sm:rounded-bl-[14px] sm:border-b-[4px] sm:border-l-[4px]"></span>

          {/* RIGHT CORNER */}
          <span className="absolute right-0 top-0 h-[24px] w-[24px] rounded-tr-[10px] border-r-[3px] border-t-[3px] border-[#8AE234] opacity-90 sm:h-[32px] sm:w-[32px] sm:rounded-tr-[14px] sm:border-r-[4px] sm:border-t-[4px]"></span>

          {/* TITLE */}
          <h2 className="text-center text-[28px] font-semibold leading-none text-white sm:text-[38px] lg:text-[44px]">
            Our Trendy plants
          </h2>

        </div>

      </div>

      {/* ================= CARD 1 ================= */}
      <div className="relative isolate mb-[110px] flex min-h-[620px] flex-col overflow-visible rounded-[38px] border border-white/[0.10] bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-6 pb-8 pt-[180px] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[8px] sm:min-h-[680px] sm:px-10 sm:pt-[220px] lg:mb-[90px] lg:h-[310px] lg:min-h-0 lg:flex-row lg:items-center lg:justify-end lg:rounded-[48px] lg:px-0 lg:pb-0 lg:pt-0">

        {/* GLASS */}
        <div className="pointer-events-none absolute inset-0 rounded-[38px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] lg:rounded-[48px]"></div>

        {/* GLOW */}
        <div className="absolute left-1/2 top-[70px] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#8AE234]/[0.08] blur-[90px] lg:left-[120px] lg:top-[10px] lg:h-[200px] lg:w-[200px] lg:translate-x-0"></div>

        {/* IMAGE */}
        <img
          src={plant2}
          alt="plant"
          className="absolute left-1/2 top-[-55px] z-20 w-[260px] -translate-x-1/2 object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.45)] sm:w-[320px] lg:left-[10px] lg:top-[-62px] lg:w-[350px] lg:translate-x-0"
        />

        {/* CONTENT */}
        <div className="relative z-30 w-full text-center lg:mr-[80px] lg:w-[390px] lg:text-left">

          {/* TITLE */}
          <h3 className="text-[24px] font-semibold leading-[1.45] text-white">
            For Small Decs Ai Plat
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[14px] leading-[1.8] text-white/70">
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
          <div className="mt-5 flex items-center justify-center gap-4 lg:justify-start">

            {/* EXPLORE */}
            <button className="h-[44px] rounded-[12px] border border-white/30 bg-white/[0.03] px-8 text-[15px] backdrop-blur-[3px] transition-all duration-300 hover:bg-white hover:text-black sm:px-9">
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
      <div className="relative isolate flex min-h-[620px] flex-col overflow-visible rounded-[38px] border border-white/[0.10] bg-gradient-to-br from-white/[0.05] to-white/[0.02] px-6 pb-8 pt-[180px] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[8px] sm:min-h-[680px] sm:px-10 sm:pt-[220px] lg:h-[310px] lg:min-h-0 lg:flex-row lg:items-center lg:rounded-[48px] lg:px-0 lg:pb-0 lg:pt-0">

        {/* GLASS */}
        <div className="pointer-events-none absolute inset-0 rounded-[38px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] lg:rounded-[48px]"></div>

        {/* GLOW */}
        <div className="absolute left-1/2 top-[70px] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#8AE234]/[0.08] blur-[90px] lg:right-[100px] lg:left-auto lg:top-[10px] lg:h-[200px] lg:w-[200px] lg:translate-x-0"></div>

        {/* IMAGE */}
        <img
          src={plant3}
          alt="plant"
          className="absolute left-1/2 top-[-55px] z-20 w-[260px] -translate-x-1/2 object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.45)] sm:w-[320px] lg:right-[18px] lg:left-auto lg:top-[-58px] lg:w-[350px] lg:translate-x-0"
        />

        {/* CONTENT */}
        <div className="relative z-30 w-full text-center lg:ml-[75px] lg:w-[390px] lg:text-left">

          {/* TITLE */}
          <h3 className="text-[24px] font-semibold leading-[1.45] text-white">
            For Fresh Decs Ai Plat
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-4 text-[14px] leading-[1.8] text-white/70">
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
          <div className="mt-5 flex items-center justify-center gap-4 lg:justify-start">

            {/* EXPLORE */}
            <button className="h-[44px] rounded-[12px] border border-white/30 bg-white/[0.03] px-8 text-[15px] backdrop-blur-[3px] transition-all duration-300 hover:bg-white hover:text-black sm:px-9">
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