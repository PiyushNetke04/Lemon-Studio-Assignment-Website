import { FiShoppingBag } from "react-icons/fi";

function ProductCard({ image, title, price, reverse }) {

  return (

    <div
      className={`mt-16 flex flex-col items-center justify-between gap-14 rounded-[38px] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8 lg:mt-20 lg:gap-10 lg:rounded-[50px] lg:p-10 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >

      {/* ================= IMAGE ================= */}
      <div className="flex flex-1 justify-center">

        <img
          src={image}
          alt={title}
          className="w-[220px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.45)] sm:w-[300px] md:w-[360px] lg:w-[400px]"
        />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">

        {/* TITLE */}
        <h2 className="text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-4xl">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-md text-[15px] leading-[1.8] text-gray-300 sm:text-[16px]">
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          Sed do eiusmod tempor incididunt
          ut labore.
        </p>

        {/* PRICE */}
        <h3 className="mt-8 text-[32px] font-bold text-white sm:text-[40px] lg:text-4xl">
          Rs. {price}/-
        </h3>

        {/* ================= BUTTONS ================= */}
        <div className="mt-8 flex items-center gap-4 sm:gap-5">

          {/* EXPLORE */}
          <button className="rounded-xl border border-white px-7 py-3 text-[15px] transition hover:bg-white hover:text-black sm:px-8 sm:text-[16px]">
            Explore
          </button>

          {/* BAG */}
          <button className="rounded-xl border border-white p-3 transition hover:bg-white hover:text-black sm:p-4">

            <FiShoppingBag className="text-[18px]" />

          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;