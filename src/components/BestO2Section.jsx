import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import plant1 from "../assets/plant1.png";

function BestO2Section() {

  return (

    <section className="px-6 py-20 md:px-10">

      {/* ================= TITLE ================= */}
      <div className="mb-[75px] flex justify-center">

        <div className="relative inline-flex items-center justify-center px-[42px] py-[10px]">

          {/* BOTTOM LEFT */}
          <span className="absolute bottom-0 left-0 h-[32px] w-[32px] rounded-bl-[14px] border-b-[4px] border-l-[4px] border-[#8AE234]"></span>

          {/* TOP RIGHT */}
          <span className="absolute right-0 top-0 h-[32px] w-[32px] rounded-tr-[14px] border-r-[4px] border-t-[4px] border-[#8AE234]"></span>

          {/* TITLE */}
          <h2 className="text-[44px] font-semibold text-white">
            Best O2 Plants
          </h2>

        </div>

      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="relative isolate flex h-[560px] overflow-visible rounded-[60px] border border-white/10 bg-white/[0.04] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[10px]">

        {/* SOFT LIGHT */}
        <div className="absolute inset-0 rounded-[60px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_65%)] pointer-events-none"></div>

        {/* GREEN GLOW */}
        <div className="absolute left-[170px] top-[120px] h-[240px] w-[240px] rounded-full bg-[#8AE234]/[0.08] blur-[120px]"></div>

        {/* ================= LEFT SIDE ================= */}
        <div className="relative flex h-full w-[48%] items-center justify-center">

          {/* PLANT IMAGE */}
          <img
            src={plant1}
            alt="plant"
            className="absolute left-1/2 top-[-120px] z-30 w-[520px] -translate-x-1/2 object-contain drop-shadow-[0_45px_40px_rgba(0,0,0,0.55)]"
          />

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative z-30 flex w-[50%] flex-col justify-center pl-[10px] pr-[70px]">

          {/* HEADING */}
          <h2 className="max-w-[720px] text-[52px] font-semibold leading-[1.18] tracking-[-1px] text-white">
            We Have Small And Best O2 Plants Collection’s
          </h2>

          {/* PARA 1 */}
          <p className="mt-8 max-w-[720px] text-[18px] leading-[2] text-white/65">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
          </p>

          {/* PARA 2 */}
          <p className="mt-8 max-w-[720px] text-[18px] leading-[2] text-white/65">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </p>

          {/* ================= BOTTOM ================= */}
          <div className="mt-12 flex items-center justify-between">

            {/* BUTTON */}
            <button className="h-[56px] rounded-[16px] border border-white/25 bg-white/[0.03] px-10 text-[18px] backdrop-blur-[4px] transition-all duration-300 hover:bg-white hover:text-black">
              Explore
            </button>

            {/* SLIDER */}
            <div className="flex items-center gap-7">

              <FiChevronLeft className="cursor-pointer text-[26px] text-white/60 hover:text-white" />

              <span className="text-[20px] text-white/75">
                01/04
              </span>

              <FiChevronRight className="cursor-pointer text-[26px] text-white/60 hover:text-white" />

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