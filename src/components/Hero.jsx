import { FiPlay, FiChevronRight } from "react-icons/fi";
import plant1 from "../assets/plant1.png";
import profile1 from "../assets/profile1.jpg";

function Hero() {

  return (

    <section className="relative min-h-[850px] px-[40px]">

      {/* ================= LEFT CONTENT ================= */}
      <div className="absolute left-[42px] top-[140px] z-20">

        {/* TITLE */}
        <h1 className="max-w-[520px] text-[72px] font-normal leading-[0.95] tracking-[-4px] text-white">
          Breath Natural
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-white/75">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex items-center gap-7">

          {/* EXPLORE */}
          <button className="rounded-[14px] border border-white/40 bg-white/[0.03] px-9 py-[12px] text-[16px] backdrop-blur-[6px] transition-all duration-300 hover:bg-white hover:text-black">
            Explore
          </button>

          {/* PLAY */}
          <div className="flex cursor-pointer items-center gap-4">

            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-white/40 bg-white/[0.03] backdrop-blur-[6px]">

              <FiPlay className="text-[16px]" />

            </div>

            <span className="text-[15px] text-white/75">
              Live Demo...
            </span>

          </div>

        </div>

      </div>

      {/* ================= RIGHT CARD ================= */}
      <div className="absolute right-[40px] top-[105px] z-20">

        <div className="relative h-[500px] w-[305px] rounded-[52px] border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-[8px] isolate">

          {/* SOFT INNER LIGHT */}
          <div className="absolute inset-0 rounded-[52px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)] pointer-events-none"></div>

          {/* GREEN GLOW */}
          <div className="absolute left-1/2 top-[100px] h-[170px] w-[170px] -translate-x-1/2 rounded-full bg-[#8AE234]/[0.08] blur-[80px]"></div>

          {/* PLANT IMAGE */}
          <img
            src={plant1}
            alt="plant"
            className="absolute left-1/2 top-[-55px] z-30 w-[250px] -translate-x-1/2 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)]"
          />

          {/* CONTENT */}
          <div className="absolute bottom-[34px] left-[30px] right-[30px] z-30">

            {/* SMALL TEXT */}
            <p className="text-[15px] text-white/60">
              Trendy House Plant
            </p>

            {/* TITLE */}
            <div className="mt-3 flex items-center justify-between">

              <h2 className="text-[21px] font-normal text-white">
                Calathea plant
              </h2>

              <FiChevronRight className="text-[20px] text-white/70" />

            </div>

            {/* BUTTON */}
            <button className="mt-5 h-[48px] rounded-[14px] border border-white/30 bg-white/[0.03] px-8 text-[16px] backdrop-blur-[4px] transition-all duration-300 hover:bg-white hover:text-black">
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

      {/* ================= REVIEW CARD ================= */}
      <div className="absolute bottom-[220px] left-[42px] z-20">

        <div className="w-[230px] rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[0_0_40px_rgba(0,0,0,0.2)] backdrop-blur-[10px]">

          {/* USER */}
          <div className="flex items-center gap-3">

            <img
              src={profile1}
              alt="user"
              className="h-[42px] w-[42px] rounded-full object-cover"
            />

            <div>

              <h3 className="text-[15px]">
                Alina Patel
              </h3>

              <p className="text-[11px] text-yellow-400">
                ★ ★ ★ ★ ★
              </p>

            </div>

          </div>

          {/* TEXT */}
          <p className="mt-4 text-[11px] leading-[1.5] text-white/55">
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