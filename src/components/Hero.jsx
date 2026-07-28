import {
  FaArrowRight,
  FaEye,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { MdVerified, MdDescription } from "react-icons/md";

const stats = [
  {
    icon: <MdVerified size={30} />,
    number: "1 M+",
    text: "Professional Services Hours",
  },
  {
    icon: <MdDescription size={30} />,
    number: "2,100+",
    text: "Industry Certifications",
  },
  {
    icon: <FaUserTie size={30} />,
    number: "350+",
    text: "Certified Engineers",
  },
  {
    icon: <FaUsers size={30} />,
    number: "400+",
    text: "Active Clients",
  },
];

export default function Hero() {
  return (
    <section className=" h-full  bg-primary text-white">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-red-700/20 blur-[170px]" />

      <div className="relative max-w-[1500px] mx-auto px-5 lg:px-10 h-full flex flex-col">

        {/* Hero */}
        <div className="flex-1 flex items-center mt-40">

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left */}
            <div className="w-full lg:w-1/2">

              <div className="inline-flex items-center border border-red-500 bg-red-600/15 rounded-full px-4 py-2 text-xs md:text-sm font-medium">
                ⭐ 35 Years of Excellence
              </div>

              <div className="mt-8 space-y-3">

                <h1 className="font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Assess{" "}
                  <span className="italic font-normal text-red-500">
                    with clarity.
                  </span>
                </h1>

                <h1 className="font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Implement{" "}
                  <span className="italic font-normal text-red-500">
                    with confidence.
                  </span>
                </h1>

                <h1 className="font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Deploy{" "}
                  <span className="italic font-normal text-red-500">
                    with precision.
                  </span>
                </h1>

                <h1 className="font-semibold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  Manage{" "}
                  <span className="italic font-normal text-red-500">
                    seamlessly.
                  </span>
                </h1>

              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                <button className="bg-red-600 hover:bg-red-700 duration-300 px-6 py-3 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base">
                  Talk to Our Experts
                  <FaArrowRight />
                </button>

                <button className="border border-red-500 hover:bg-red-600/20 duration-300 px-6 py-3 rounded-lg flex items-center gap-3 font-medium text-sm md:text-base">
                  <FaEye />
                  View Our Resources
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

              <img
                src="/Map.png"
                alt="Map"
                className="w-[80%] max-w-[520px] object-contain"
              />

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 pb-6 mt-20">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#320607]/80 border border-red-900 rounded-2xl px-5 py-6 text-center hover:border-red-600 transition"
            >

              <div className="flex justify-center text-white mb-2">
                {item.icon}
              </div>

              <h2 className="text-3xl md:text-3xl font-bold text-red-500">
                {item.number}
              </h2>

              <p className="text-xs md:text-sm text-gray-300 mt-1">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}