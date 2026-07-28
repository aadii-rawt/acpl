const Capsule = ({ title }) => {
  return (
    <div className="relative inline-flex">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 180 48"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="178"
          height="46"
          rx="23"
          ry="23"
          className="border-path"
        />
      </svg>

      <span className="relative rounded-full bg-gradient-to-r from-[#6D0005] to-[#D3000A] px-10 py-3 font-semibold text-white">
        {title}
      </span>
    </div>
  );
};

export default Capsule;