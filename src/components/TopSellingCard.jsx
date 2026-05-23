import { FiShoppingBag } from "react-icons/fi";

function TopSellingCard({ image, title, price }) {

  return (

    <div className="flex flex-col justify-between rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition duration-300 hover:scale-105">

      {/* IMAGE */}
      <div className="flex justify-center">

        <img
          src={image}
          alt={title}
          className="h-[240px] w-[240px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
        />

      </div>

      {/* CONTENT */}
      <div className="mt-5">

        {/* TITLE */}
        <h2 className="text-4xl font-medium">
          {title}
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-5 text-lg text-gray-300">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </p>

        {/* PRICE + BUTTON */}
        <div className="mt-8 flex items-center justify-between">

          <h3 className="text-4xl font-semibold">
            Rs. {price}/-
          </h3>

          <button className="rounded-xl border border-white p-4 transition hover:bg-white hover:text-black">

            <FiShoppingBag />

          </button>

        </div>

      </div>

    </div>
  );
}

export default TopSellingCard;