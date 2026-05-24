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

    <section className="relative z-20 px-5 pb-[120px] sm:px-8 lg:px-[38px]">

      {/* ================= TITLE ================= */}
      <div className="mb-[70px] flex justify-center lg:mb-[75px]">

        <div className="relative inline-block">

          {/* TITLE */}
          <h2 className="px-5 py-2 text-center text-[28px] font-semibold text-white sm:px-10 sm:text-[38px] lg:text-[44px]">
            Our Top Selling
          </h2>

          {/* LEFT */}
          <span className="absolute bottom-0 left-0 h-[22px] w-[22px] rounded-bl-[10px] border-b-[3px] border-l-[3px] border-[#79d70f] sm:h-[28px] sm:w-[28px] sm:rounded-bl-[14px] sm:border-b-[4px] sm:border-l-[4px]"></span>

          {/* RIGHT */}
          <span className="absolute right-0 top-0 h-[22px] w-[22px] rounded-tr-[10px] border-r-[3px] border-t-[3px] border-[#79d70f] sm:h-[28px] sm:w-[28px] sm:rounded-tr-[14px] sm:border-r-[4px] sm:border-t-[4px]"></span>

        </div>

      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">

        {plants.map((plant, index) => (

          <div
            key={index}
            className="relative isolate h-[400px] overflow-visible rounded-[42px] border border-white/[0.12] bg-[#1a2218]/60 shadow-[0_0_30px_rgba(0,0,0,0.18)] backdrop-blur-[6px] sm:h-[420px] sm:rounded-[55px] lg:rounded-[65px]"
          >

            {/* GLASS */}
            <div className="pointer-events-none absolute inset-0 rounded-[42px] bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02] sm:rounded-[55px] lg:rounded-[65px]"></div>

            {/* IMAGE */}
            <img
              src={plant.image}
              alt={plant.title}
              className="absolute left-1/2 top-[-45px] z-20 w-[220px] -translate-x-1/2 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.45)] sm:top-[-55px] sm:w-[240px] lg:w-[270px]"
            />

            {/* CONTENT */}
            <div className="absolute bottom-[28px] left-[24px] right-[24px] z-30 sm:bottom-[32px] sm:left-[30px] sm:right-[30px] lg:left-[34px] lg:right-[34px]">

              {/* TITLE */}
              <h2 className="text-[20px] font-normal text-white sm:text-[22px]">
                {plant.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-4 text-[14px] leading-[1.7] text-white/70 sm:mt-5 sm:text-[15px]">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit
              </p>

              {/* PRICE + BAG */}
              <div className="mt-7 flex items-center justify-between sm:mt-8">

                {/* PRICE */}
                <h3 className="text-[20px] font-medium text-white sm:text-[22px]">
                  {plant.price}
                </h3>

                {/* BAG */}
                <button className="flex h-[42px] w-[42px] items-center justify-center rounded-[12px] border border-white/35 bg-white/[0.03] backdrop-blur-[2px] transition hover:bg-white hover:text-black sm:h-[44px] sm:w-[44px]">

                  <FiShoppingBag className="text-[15px] sm:text-[16px]" />

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