function ReviewCard({ image, name }) {
  return (
    <div
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[40px] p-8 hover:scale-105transition duration-300"
    >

      {/* TOP */}
      <div className="flex items-center gap-5">

        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>
          <h2 className="text-3xl font-semibold">
            {name}
          </h2>

          <p className="text-yellow-400 mt-2">
            ★ ★ ★ ★ ★
          </p>
        </div>

      </div>

      {/* TEXT */}
      <p className="text-gray-300 text-lg leading-relaxed mt-10">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </p>

    </div>
  );
}

export default ReviewCard;