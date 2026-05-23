import {
  FiSearch,
  FiShoppingBag,
  FiMenu,
  FiChevronDown,
} from "react-icons/fi";

import navplant from "../assets/navplant.png";

function Navbar() {

  return (

    <nav className="absolute left-0 top-0 z-50 flex w-full items-center justify-between px-[34px] pt-[22px]">

      {/* ================= LOGO ================= */}
      <div className="flex items-center gap-2">

        <img
          src={navplant}
          alt="Plant"
          className="h-[32px] w-[32px] object-contain"
        />

        <h1 className="text-[20px] font-semibold tracking-[-0.5px] text-white">
          Planto.
        </h1>

      </div>

      {/* ================= CENTER MENU ================= */}
      <ul className="hidden items-center gap-12 text-[16px] text-white/85 md:flex">

        <li className="cursor-pointer transition hover:text-white">
          Home
        </li>

        {/* PLANT TYPE */}
        <li className="flex cursor-pointer items-center gap-[4px] transition hover:text-white">

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
      <div className="flex items-center gap-[22px] text-[21px] text-white/85">

        <FiSearch className="cursor-pointer" />

        <FiShoppingBag className="cursor-pointer" />

        <FiMenu className="cursor-pointer md:hidden" />

      </div>

    </nav>
  );
}

export default Navbar;