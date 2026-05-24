function ReviewCard({ image, name }) {

  return (

    <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:scale-[1.02] sm:rounded-[40px] sm:p-8">

      {/* ================= TOP ================= */}
      <div className="flex items-center gap-4 sm:gap-5">

        {/* IMAGE */}
        <img
          src={image}
          alt={name}
          className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
        />

        {/* CONTENT */}
        <div>

          <h2 className="text-[24px] font-semibold text-white sm:text-3xl">
            {name}
          </h2>

          <p className="mt-2 text-[14px] text-yellow-400 sm:text-[15px]">
            ★ ★ ★ ★ ★
          </p>

        </div>

      </div>

      {/* ================= TEXT ================= */}
      <p className="mt-8 text-[15px] leading-[1.9] text-gray-300 sm:mt-10 sm:text-lg">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>

    </div>
  );
}

export default ReviewCard;