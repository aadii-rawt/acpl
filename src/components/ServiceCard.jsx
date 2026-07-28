export default function ServiceCard({
    number,
    title,
    description,
    icon,
    className = "",
}) {
    return (
        <div
            className={`
        ${className}
        relative
        overflow-hidden
        rounded-[32px]
        border border-[#8b2020]
        bg-[#2b0304]
        min-h-[150px]
        max-w-7xl
        mx-auto
      `}
        >

            {/* Large Number */}

            {/* Content */}
            <div className="relative z-10 flex  gap-20 py-12">
                {/* Left */}
                <div className="flex items-center justify-left px-20 py-5">
                    <img
                        src={icon}
                        alt={title}
                        className="w-[220px] md:w-[280px] lg:w-[200px] object-contain"
                    />
                </div>

                {/* Right */}
                <div className="flex flex-col justify-center px-8 pb-12 lg:px-0 lg:pr-10">
                    <h1 className=" text-[90px] font-bold leading-none text-[#6b1111] opacity-30 md:text-[130px] lg:text-[180px] select-none">
                        {number}
                    </h1>

                    <h2 className="text-2xl font-semibold text-white md:text-4xl lg:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-8 text-base leading-8 text-gray-300 m">
                        {description}
                    </p>
                </div>
            </div>

            {/* Top Border Highlight */}
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70" />

            {/* Bottom Border Highlight */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-40" />
        </div>
    );
}