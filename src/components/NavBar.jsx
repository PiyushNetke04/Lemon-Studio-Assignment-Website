import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";

import navplant from "../assets/navplant.png";

function Navbar() {

  return (

    <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-5 pt-5 md:px-8 md:pt-6 lg:px-[34px]">

      {/* ================= LOGO ================= */}
      <div className="flex items-center gap-2">

        <img
          src={navplant}
          alt="Plant"
          className="h-[28px] w-[28px] object-contain sm:h-[32px] sm:w-[32px]"
        />

        <h1 className="text-[18px] font-semibold tracking-[-0.5px] text-white sm:text-[20px]">
          Planto.
        </h1>

      </div>

      {/* ================= CENTER MENU ================= */}
      <ul className="hidden items-center gap-8 text-[15px] text-white/85 lg:flex xl:gap-12">

        <li className="cursor-pointer transition hover:text-white">
          Home
        </li>

        {/* PLANT TYPE */}
        <li className="flex cursor-pointer items-center gap-1 transition hover:text-white">

          Plants Type

          <FiChevronDown className="text-[14px]" />

        </li>

        <li className="cursor-pointer transition hover:text-white">
          More
        </li>

        <li className="cursor-pointer transition hover:text-white">
          Contact
        </li>

      </ul>

      {/* ================= RIGHT ICONS ================= */}
      <div className="flex items-center gap-4 text-[20px] text-white/85 sm:gap-5 sm:text-[21px]">

        <FiSearch className="cursor-pointer transition hover:text-white" />

        <FiShoppingBag className="cursor-pointer transition hover:text-white" />

        {/* MOBILE MENU */}
        <FiMenu className="cursor-pointer transition hover:text-white lg:hidden" />

      </div>

    </nav>
  );
}

export default Navbar;