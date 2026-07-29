
const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
  "/logos/logo7.png",
  "/logos/logo8.png",
];

export default function Marquee() {
  return (
    <section className="w-full ralative overflow-hidden my-20">

      <div className="max-w-[1600px] relative mx-auto flex items-center bg-gradient-to-t from-[#E41F26]/20  to-[#1D0001]">

 {/* <div className="absolute left-1/2 bottom-[-180px] -translate-x-1/2 w-[1200px] h-[450px] rounded-full bg-red-600/30 blur-[160px]" /> */}
        {/* Fixed Left */}

        <div className="w-[320px] shrink-0 px-10 py-8 text-white">
          <h2 className="text-xl font-semibold leading-tight">
            Our Technology Partners
          </h2>

          <p className="text-xl font-semibold text-gray-300">
            and Expertise
          </p>
        </div>

        {/* Marquee */}

        <div className="flex-1 overflow-hidden">

          <div className="marquee">

            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="mx-14 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={logo}
                  className="w-28"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}