import { FiShoppingBag } from "react-icons/fi";

function TopSellingCard({ image, title, price }) {

  return (

    <div className="flex flex-col justify-between rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:scale-[1.02] sm:rounded-[40px] sm:p-8">

      {/* ================= IMAGE ================= */}
      <div className="flex justify-center">

        <img
          src={image}
          alt={title}
          className="h-[180px] w-[180px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] sm:h-[220px] sm:w-[220px] lg:h-[240px] lg:w-[240px]"
        />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="mt-5">

        {/* TITLE */}
        <h2 className="text-[28px] font-medium text-white sm:text-[34px] lg:text-4xl">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] leading-[1.7] text-gray-300 sm:mt-5 sm:text-lg">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>

        {/* ================= PRICE + BUTTON ================= */}
        <div className="mt-7 flex items-center justify-between sm:mt-8">

          {/* PRICE */}
          <h3 className="text-[26px] font-semibold text-white sm:text-[32px] lg:text-4xl">
            Rs. {price}/-
          </h3>

          {/* BUTTON */}
          <button className="rounded-xl border border-white p-3 transition hover:bg-white hover:text-black sm:p-4">

            <FiShoppingBag className="text-[18px]" />

          </button>

        </div>

      </div>

    </div>
  );
}

export default TopSellingCard;