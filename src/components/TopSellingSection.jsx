import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
import plant4 from "../assets/plant4.png";
import plant6 from "../assets/plant6.png";
import plant7 from "../assets/plant7.png";

import { FiShoppingBag } from "react-icons/fi";

function TopSellingSection() {

  const plants = [
    { image: plant1, title: "Calathea plant", price: "Rs. 359/-" },
    { image: plant2, title: "Calathea plant", price: "Rs. 359/-" },
    { image: plant3, title: "Calathea plant", price: "Rs. 359/-" },
    { image: plant4, title: "Calathea plant", price: "Rs. 359/-" },
    { image: plant6, title: "Calathea plant", price: "Rs. 359/-" },
    { image: plant7, title: "Calathea plant", price: "Rs. 359/-" },
  ];

  return (

    <section className="relative z-20 px-[38px] pb-[120px]">

      {/* ================= TITLE ================= */}
      <div className="mb-[75px] flex justify-center">

        <div className="relative inline-block">

          <h2 className="px-10 py-2 text-[44px] font-semibold text-white">
            Our Top Selling
          </h2>

          {/* LEFT */}
          <span className="absolute bottom-0 left-0 h-[28px] w-[28px] rounded-bl-[14px] border-b-[4px] border-l-[4px] border-[#79d70f]"></span>

          {/* RIGHT */}
          <span className="absolute right-0 top-0 h-[28px] w-[28px] rounded-tr-[14px] border-r-[4px] border-t-[4px] border-[#79d70f]"></span>

        </div>

      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-3 gap-x-8 gap-y-16">

        {plants.map((plant, index) => (

          <div
            key={index}
            className="relative isolate h-[420px] overflow-visible rounded-[65px] border border-white/[0.12] bg-[#1a2218]/60 shadow-[0_0_30px_rgba(0,0,0,0.18)] backdrop-blur-[6px]"
          >

            {/* GLASS */}
            <div className="absolute inset-0 rounded-[65px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none"></div>

            {/* IMAGE */}
            <img
              src={plant.image}
              alt={plant.title}
              className="absolute left-1/2 top-[-55px] z-20 w-[270px] -translate-x-1/2 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)]"
            />

            {/* CONTENT */}
            <div className="absolute bottom-[32px] left-[34px] right-[34px] z-30">

              {/* TITLE */}
              <h2 className="text-[22px] font-normal text-white">
                {plant.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-5 text-[15px] leading-[1.5] text-white/70">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit
              </p>

              {/* PRICE + BAG */}
              <div className="mt-8 flex items-center justify-between">

                {/* PRICE */}
                <h3 className="text-[22px] font-medium text-white">
                  {plant.price}
                </h3>

                {/* BAG */}
                <button className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-white/35 bg-white/[0.03] backdrop-blur-[2px] transition hover:bg-white hover:text-black">

                  <FiShoppingBag className="text-[16px]" />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default TopSellingSection;