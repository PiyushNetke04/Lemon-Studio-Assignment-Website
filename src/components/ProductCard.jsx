import { FiShoppingBag } from "react-icons/fi";

function ProductCard({ image, title, price, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-10
      backdrop-blur-md bg-white/5 border border-white/10
      rounded-[50px] p-10 mt-20`}
    >
      {/* IMAGE */}
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        <p className="text-gray-300 mt-5 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sed do eiusmod tempor incididunt ut labore.
        </p>

        <h3 className="text-4xl font-bold mt-8">
          Rs. {price}/-
        </h3>

        <div className="flex items-center gap-5 mt-8">

          <button className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-black transition">
            Explore
          </button>

          <button className="border border-white p-4 rounded-xl hover:bg-white hover:text-black transition">
            <FiShoppingBag />
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;