import navplant from "../assets/navplant.png";

function Footer() {

  return (

    <footer className="mt-24 border-t border-white/10 bg-white/[0.03] px-6 py-20 backdrop-blur-[10px] md:px-10">

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">

        {/* ================= LEFT ================= */}
        <div>

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src={navplant}
              alt="logo"
              className="h-[42px] w-[42px] object-contain"
            />

            <h1 className="text-[42px] font-bold text-white">
              Planto.
            </h1>

          </div>

          {/* TEXT */}
          <p className="mt-8 max-w-[420px] text-[17px] leading-[1.9] text-white/65">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>

          {/* SOCIAL */}
          <div className="mt-12 flex items-center gap-8 text-[18px] font-semibold text-white">

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
        <div>

          <h2 className="text-[34px] font-semibold text-white">
            Quick Link’s
          </h2>

          <ul className="mt-10 space-y-6 text-[18px] text-white/65">

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

          <h2 className="text-[34px] font-semibold text-white">
            For Every Update.
          </h2>

          {/* INPUT */}
          <div className="mt-10 flex">

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-l-[16px] border border-white/20 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/40"
            />

            <button className="rounded-r-[16px] bg-white px-7 font-semibold text-black transition-all duration-300 hover:bg-[#8AE234]">
              SUBSCRIBE
            </button>

          </div>

          {/* COPYRIGHT */}
          <p className="mt-20 text-[15px] text-white/45">
            Planto © All Right Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;