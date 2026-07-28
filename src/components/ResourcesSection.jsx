import { FaArrowRight } from "react-icons/fa";
import Capsule from "./Capsule";

export default function ResourcesSection() {
  const resources = [
    {
      title: "BCCL",
      image: "/resources/resource2.png",
      readTime: "10 MINS READ",
      date: "Apr 8, 2022",
    },
    {
      title: "AttackFence NDR",
      image: "/resources/resource3.png",
      readTime: "10 MINS READ",
      date: "Apr 8, 2022",
    },
    {
      title: "Klassify",
      image: "/resources/resource4.png",
      readTime: "10 MINS READ",
      date: "Apr 8, 2022",
    },
  ];

  return (
    <section className="relative overflow-hidden  py-28">

      <div className="relative mx-auto max-w-[1500px] px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

<Capsule title={"Resrouces"} />
        

          <h2 className="mt-8 text-5xl font-semibold text-white">
            Insights That Drive Security{" "}
            <span className="text-red-500">Forward</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-6 text-gray-300">
            Explore ACPL's expert-led whitepapers, reports, and playbooks
            designed to help CISOs, CIOs, and security leaders make informed,
            strategic decisions in a complex threat landscape.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_1.3fr]">

          {/* Featured Card */}

          <div className="group p-5 overflow-hidden rounded-3xl border border-[#E41F26] bg-[#3B0000] transition duration-300 hover:border-red-500">

           
              <img
                src="/resources/resource.png"
                alt=""
                className=" w-full object-cover "
              />


            <div className="mt-5">

              <p className="text-sm uppercase tracking-wide text-red-400">
                20 MINS READ
              </p>

              <h3 className="mt-4 text-3xl font-semibold text-white">
                BCCL Embraces Advanced Security
              </h3>

              <p className="mt-5 leading-6 text-gray-300">
                As BCCL looked to the future, it recognised the need for a
                critical evolution to revitalise its ageing IT infrastructure,
                which had become a bottleneck to its operational agility and
                security.
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-gray-500">
                  Jan 12, 2022
                </span>

              </div>

            </div>

          </div>

          {/* Right Cards */}

          <div className="space-y-6">

            {resources.map((item, index) => (

              <div
                key={index}
                className="group flex items-center gap-6 overflow-hidden rounded-3xl border border-[#E41F26] bg-[#3B0000] p-3 "
              >

                <div className="overflow-hidden rounded-2xl">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-56 object-cover"
                  />

                </div>

                <div className="flex-1">

                  <p className="text-sm uppercase text-red-400">
                    {item.readTime}
                  </p>

                  <h3 className="mt-3 text-3xl font-medium text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400">
                    {item.date}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}