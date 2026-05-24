import ReviewCard from "./ReviewCard";

import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";

function ReviewSection() {

  return (

    <section className="px-5 py-20 sm:px-8 md:px-10">

      {/* ================= TITLE ================= */}
      <div className="mb-[70px] flex justify-center lg:mb-[75px]">

        <div className="relative inline-flex items-center justify-center px-5 py-[10px] sm:px-[42px]">

          {/* BOTTOM LEFT */}
          <span className="absolute bottom-0 left-0 h-[24px] w-[24px] rounded-bl-[10px] border-b-[3px] border-l-[3px] border-[#8AE234] opacity-90 sm:h-[32px] sm:w-[32px] sm:rounded-bl-[14px] sm:border-b-[4px] sm:border-l-[4px]"></span>

          {/* TOP RIGHT */}
          <span className="absolute right-0 top-0 h-[24px] w-[24px] rounded-tr-[10px] border-r-[3px] border-t-[3px] border-[#8AE234] opacity-90 sm:h-[32px] sm:w-[32px] sm:rounded-tr-[14px] sm:border-r-[4px] sm:border-t-[4px]"></span>

          {/* TITLE */}
          <h2 className="text-center text-[28px] font-semibold leading-none text-white sm:text-[38px] lg:text-[44px]">
            Customer Review
          </h2>

        </div>

      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">

        <ReviewCard image={profile2} name="Maxn Raval" />

        <ReviewCard image={profile3} name="Venely K" />

        <ReviewCard image={profile4} name="Lii Thakur" />

      </div>

    </section>
  );
}

export default ReviewSection;