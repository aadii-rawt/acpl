export default function IconCard({ icon }) {
    return (
        <div className="">

            {/* <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" /> */}

            <img
                src={icon}
                alt=""
                className="relative w-[150px] z-10 w-20 object-contain opacity-90"
            />

        </div>
    );
}

// group relative flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-3xl border border-red-900 bg-[#250304]