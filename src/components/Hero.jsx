import { FiPlay, FiChevronRight } from "react-icons/fi";

import plant1 from "../assets/plant1.png";
import profile1 from "../assets/profile1.jpg";

function Hero() {

  return (

    <section className="relative flex min-h-[1200px] flex-col px-5 pt-[120px] sm:px-8 md:min-h-[1100px] lg:min-h-[850px] lg:px-[40px]">

      {/* ================= HERO CONTENT ================= */}
      <div className="flex flex-col items-center justify-between gap-24 lg:flex-row lg:items-start">

        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 mt-6 w-full lg:mt-[40px] lg:max-w-[540px]">

          {/* TITLE */}
          <h1 className="max-w-[520px] text-center text-[52px] font-normal leading-[0.95] tracking-[-3px] text-white sm:text-[68px] lg:text-left lg:text-[72px] lg:tracking-[-4px]">
            Breath Natural
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-[520px] text-center text-[14px] leading-[1.7] text-white/75 sm:text-[15px] lg:text-left">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:justify-start">

            {/* EXPLORE */}
            <button className="rounded-[14px] border border-white/40 bg-white/[0.03] px-8 py-3 text-[15px] backdrop-blur-[6px] transition-all duration-300 hover:bg-white hover:text-black sm:px-9 sm:text-[16px]">
              Explore
            </button>

            {/* PLAY */}
            <div className="flex cursor-pointer items-center gap-4">

              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/40 bg-white/[0.03] backdrop-blur-[6px] sm:h-[48px] sm:w-[48px]">

                <FiPlay className="text-[15px] sm:text-[16px]" />

              </div>

              <span className="text-[14px] text-white/75 sm:text-[15px]">
                Live Demo...
              </span>

            </div>

          </div>

        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="relative z-20 flex justify-center lg:mr-[40px]">

          <div className="relative isolate h-[460px] w-[290px] rounded-[42px] border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[8px] sm:h-[500px] sm:w-[305px] sm:rounded-[52px]">

            {/* SOFT INNER LIGHT */}
            <div className="pointer-events-none absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)] sm:rounded-[52px]"></div>

            {/* GREEN GLOW */}
            <div className="absolute left-1/2 top-[90px] h-[160px] w-[160px] -translate-x-1/2 rounded-full bg-[#8AE234]/[0.08] blur-[80px] sm:top-[100px] sm:h-[170px] sm:w-[170px]"></div>

            {/* PLANT IMAGE */}
            <img
              src={plant1}
              alt="plant"
              className="absolute left-1/2 top-[-45px] z-30 w-[220px] -translate-x-1/2 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)] sm:top-[-55px] sm:w-[250px]"
            />

            {/* CONTENT */}
            <div className="absolute bottom-[30px] left-[24px] right-[24px] z-30 sm:bottom-[34px] sm:left-[30px] sm:right-[30px]">

              {/* SMALL TEXT */}
              <p className="text-[14px] text-white/60 sm:text-[15px]">
                Trendy House Plant
              </p>

              {/* TITLE */}
              <div className="mt-3 flex items-center justify-between">

                <h2 className="text-[19px] font-normal text-white sm:text-[21px]">
                  Calathea plant
                </h2>

                <FiChevronRight className="text-[18px] text-white/70 sm:text-[20px]" />

              </div>

              {/* BUTTON */}
              <button className="mt-5 h-[46px] rounded-[14px] border border-white/30 bg-white/[0.03] px-7 text-[15px] backdrop-blur-[4px] transition-all duration-300 hover:bg-white hover:text-black sm:h-[48px] sm:px-8 sm:text-[16px]">
                Buy Now
              </button>

              {/* SLIDER */}
              <div className="mt-7 flex justify-center gap-2">

                <div className="h-[5px] w-[24px] rounded-full bg-white"></div>

                <div className="h-[5px] w-[5px] rounded-full bg-white/55"></div>

                <div className="h-[5px] w-[5px] rounded-full bg-white/55"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= REVIEW CARD ================= */}
      <div className="relative z-20 mt-16 flex justify-center lg:absolute lg:bottom-[220px] lg:left-[42px] lg:mt-0">

        <div className="w-full max-w-[260px] rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-[10px]">

          {/* USER */}
          <div className="flex items-center gap-3">

            <img
              src={profile1}
              alt="user"
              className="h-[42px] w-[42px] rounded-full object-cover"
            />

            <div>

              <h3 className="text-[15px] text-white">
                Alina Patel
              </h3>

              <p className="text-[11px] text-yellow-400">
                ★ ★ ★ ★ ★
              </p>

            </div>

          </div>

          {/* TEXT */}
          <p className="mt-4 text-[11px] leading-[1.6] text-white/55">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt...
          </p>

        </div>

      </div>

    </section>
  );
}

export default Hero;