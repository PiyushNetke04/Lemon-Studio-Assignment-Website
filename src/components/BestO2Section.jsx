import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import plant1 from "../assets/plant1.png";

function BestO2Section() {

  return (

    <section className="px-5 py-20 sm:px-8 md:px-10">

      {/* ================= TITLE ================= */}
      <div className="mb-[70px] flex justify-center lg:mb-[75px]">

        <div className="relative inline-flex items-center justify-center px-5 py-[10px] sm:px-[42px]">

          {/* BOTTOM LEFT */}
          <span className="absolute bottom-0 left-0 h-[24px] w-[24px] rounded-bl-[10px] border-b-[3px] border-l-[3px] border-[#8AE234] sm:h-[32px] sm:w-[32px] sm:rounded-bl-[14px] sm:border-b-[4px] sm:border-l-[4px]"></span>

          {/* TOP RIGHT */}
          <span className="absolute right-0 top-0 h-[24px] w-[24px] rounded-tr-[10px] border-r-[3px] border-t-[3px] border-[#8AE234] sm:h-[32px] sm:w-[32px] sm:rounded-tr-[14px] sm:border-r-[4px] sm:border-t-[4px]"></span>

          {/* TITLE */}
          <h2 className="text-center text-[28px] font-semibold text-white sm:text-[38px] lg:text-[44px]">
            Best O2 Plants
          </h2>

        </div>

      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="relative isolate flex flex-col overflow-visible rounded-[40px] border border-white/10 bg-white/[0.04] px-6 pb-8 pt-[180px] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[10px] sm:px-10 sm:pt-[230px] lg:h-[560px] lg:flex-row lg:rounded-[60px] lg:px-0 lg:pb-0 lg:pt-0">

        {/* SOFT LIGHT */}
        <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)] lg:rounded-[60px]"></div>

        {/* GREEN GLOW */}
        <div className="absolute left-1/2 top-[90px] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#8AE234]/[0.08] blur-[100px] sm:h-[220px] sm:w-[220px] lg:left-[170px] lg:top-[120px] lg:h-[240px] lg:w-[240px] lg:translate-x-0"></div>

        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex items-center justify-center lg:h-full lg:w-[48%]">

          {/* PLANT IMAGE */}
          <img
            src={plant1}
            alt="plant"
            className="absolute left-1/2 top-[-110px] z-30 w-[280px] -translate-x-1/2 object-contain drop-shadow-[0_45px_40px_rgba(0,0,0,0.55)] sm:top-[-140px] sm:w-[380px] lg:top-[-120px] lg:w-[520px]"
          />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative z-30 flex flex-col justify-center text-center lg:w-[50%] lg:pl-[10px] lg:pr-[70px] lg:text-left">

          {/* HEADING */}
          <h2 className="text-[32px] font-semibold leading-[1.25] tracking-[-1px] text-white sm:text-[42px] lg:max-w-[720px] lg:text-[52px] lg:leading-[1.18]">
            We Have Small And Best O2 Plants Collection’s
          </h2>

          {/* PARA 1 */}
          <p className="mt-6 text-[15px] leading-[1.9] text-white/65 sm:text-[17px] lg:mt-8 lg:max-w-[720px] lg:text-[18px] lg:leading-[2]">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
          </p>

          {/* PARA 2 */}
          <p className="mt-6 text-[15px] leading-[1.9] text-white/65 sm:text-[17px] lg:mt-8 lg:max-w-[720px] lg:text-[18px] lg:leading-[2]">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>

          {/* ================= BOTTOM ================= */}
          <div className="mt-10 flex flex-col items-center gap-8 lg:mt-12 lg:flex-row lg:items-center lg:justify-between">

            {/* BUTTON */}
            <button className="h-[52px] rounded-[16px] border border-white/25 bg-white/[0.03] px-8 text-[16px] backdrop-blur-[4px] transition-all duration-300 hover:bg-white hover:text-black sm:h-[56px] sm:px-10 sm:text-[18px]">
              Explore
            </button>

            {/* SLIDER */}
            <div className="flex items-center gap-6 sm:gap-7">

              <FiChevronLeft className="cursor-pointer text-[24px] text-white/60 hover:text-white sm:text-[26px]" />

              <span className="text-[18px] text-white/75 sm:text-[20px]">
                01/04
              </span>

              <FiChevronRight className="cursor-pointer text-[24px] text-white/60 hover:text-white sm:text-[26px]" />

            </div>

          </div>

        </div>

      </div>

      {/* ================= DOTS ================= */}
      <div className="mt-10 flex justify-center gap-3">

        <div className="h-2 w-10 rounded-full bg-white"></div>

        <div className="h-2 w-2 rounded-full bg-white/50"></div>

        <div className="h-2 w-2 rounded-full bg-white/50"></div>

      </div>

    </section>
  );
}

export default BestO2Section;