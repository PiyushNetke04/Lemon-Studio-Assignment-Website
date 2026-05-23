import ReviewCard from "./ReviewCard";

import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";

function ReviewSection() {

  return (

    <section className="px-6 py-20 md:px-10">

      {/* ================= TITLE ================= */}
      <div className="mb-[75px] flex justify-center">

        <div className="relative inline-flex items-center justify-center px-[42px] py-[10px]">

          {/* BOTTOM LEFT */}
          <span className="absolute bottom-0 left-0 h-[32px] w-[32px] rounded-bl-[14px] border-b-[4px] border-l-[4px] border-[#8AE234] opacity-90"></span>

          {/* TOP RIGHT */}
          <span className="absolute right-0 top-0 h-[32px] w-[32px] rounded-tr-[14px] border-r-[4px] border-t-[4px] border-[#8AE234] opacity-90"></span>

          {/* TITLE */}
          <h2 className="text-[44px] font-semibold leading-none text-white">
            Customer Review
          </h2>

        </div>

      </div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

        <ReviewCard image={profile2} name="Maxn Raval" />

        <ReviewCard image={profile3} name="Venely K" />

        <ReviewCard image={profile4} name="Lii Thakur" />

      </div>

    </section>
  );
}

export default ReviewSection;