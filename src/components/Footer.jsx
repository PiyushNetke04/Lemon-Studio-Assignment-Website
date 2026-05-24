import navplant from "../assets/navplant.png";

function Footer() {

  return (

    <footer className="mt-20 border-t border-white/10 bg-white/[0.03] px-5 py-16 backdrop-blur-[10px] sm:px-8 md:mt-24 md:px-10 md:py-20">

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">

        {/* ================= LEFT ================= */}
        <div>

          {/* LOGO */}
          <div className="flex items-center justify-center gap-3 md:justify-start">

            <img
              src={navplant}
              alt="logo"
              className="h-[34px] w-[34px] object-contain sm:h-[42px] sm:w-[42px]"
            />

            <h1 className="text-[32px] font-bold text-white sm:text-[42px]">
              Planto.
            </h1>

          </div>

          {/* TEXT */}
          <p className="mt-6 text-center text-[15px] leading-[1.9] text-white/65 sm:mt-8 sm:text-[17px] md:text-left">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>

          {/* SOCIAL */}
          <div className="mt-10 flex items-center justify-center gap-7 text-[17px] font-semibold text-white sm:mt-12 sm:gap-8 sm:text-[18px] md:justify-start">

            <span className="cursor-pointer transition hover:text-[#8AE234]">
              FB
            </span>

            <span className="cursor-pointer transition hover:text-[#8AE234]">
              TW
            </span>

            <span className="cursor-pointer transition hover:text-[#8AE234]">
              LI
            </span>

          </div>

        </div>

        {/* ================= MIDDLE ================= */}
        <div className="text-center md:text-left">

          <h2 className="text-[28px] font-semibold text-white sm:text-[34px]">
            Quick Link’s
          </h2>

          <ul className="mt-8 space-y-5 text-[16px] text-white/65 sm:mt-10 sm:space-y-6 sm:text-[18px]">

            <li className="cursor-pointer transition hover:text-white">
              Home
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Type’s Of Plant’s
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Contact
            </li>

            <li className="cursor-pointer transition hover:text-white">
              Privacy
            </li>

          </ul>

        </div>

        {/* ================= RIGHT ================= */}
        <div>

          <h2 className="text-center text-[28px] font-semibold text-white sm:text-[34px] md:text-left">
            For Every Update.
          </h2>

          {/* INPUT */}
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:gap-0">

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-[16px] border border-white/20 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/40 sm:rounded-r-none"
            />

            <button className="rounded-[16px] bg-white px-7 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#8AE234] sm:rounded-l-none">

              SUBSCRIBE

            </button>

          </div>

          {/* COPYRIGHT */}
          <p className="mt-14 text-center text-[14px] text-white/45 sm:mt-20 sm:text-[15px] md:text-left">
            Planto © All Right Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;