import PartnerCard from "./PartnerCard";
import SolutionCard from "./SolutionCard";
import CenterNode from "./CenterNode";


const partnersTop = [
  { name: "Netskope", icon: "/partners/logo1.png" },
  { name: "Zscaler", icon: "/partners/logo2.png" },
  { name: "Fortinet", icon: "/partners/logo3.png" },
  { name: "Cloudflare", icon: "/partners/logo4.png" },
  { name: "Palo Alto Networks", icon: "/partners/logo5.png" },
];

const partnersBottom = [
  { name: "Okta", icon: "/partners/logo6.png" },
  { name: "CrowdStrike", icon: "/partners/logo7.png" },
  { name: "Microsoft", icon: "/partners/logo8.png" },
  { name: "Klassify", icon: "/partners/logo9.png" },
  { name: "AttackFence", icon: "/partners/logo10.png" },
];

const servicesTop = [
  { title: "Network Security", icon: "/solutions/logo1.png" },
  { title: "Endpoint Security", icon: "/solutions/logo2.png" },
  { title: "Identity & Access Management", icon: "/solutions/logo3.png" },
  { title: "Cloud Security", icon: "/solutions/logo4.png" },
  { title: "Zero Trust", icon: "/solutions/logo5.png" },
];

const servicesBottom = [
  { title: "Application Security", icon: "/solutions/logo6.png" },
  { title: "SIEM & SOAR", icon: "/solutions/logo7.png" },
  { title: "Data Classification", icon: "/solutions/logo8.png" },
  { title: "Data Security", icon: "/solutions/logo9.png" },
  { title: "Email Security", icon: "/solutions/logo10.png" },
];

export default function PartnersSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">

      <div className="mx-auto max-w-[1500px] px-5">


        <div className="text-center">

          <span className="rounded-full bg-red-600 px-5 py-2 text-xs  text-white font-semibold">
            Partners & Expertise
          </span>

          <h2 className="mt-6 text-5xl font-semibold text-white leading-tight">
            Powerful Solutions
            <br />
            with Trusted{" "}
            <span className="text-red-500">Partners</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-300">
            ACPL partners with the world's top cybersecurity innovators to
            deliver integrated, best-in-class solutions across cloud,
            data, identity and network security ecosystems.
          </p>

        </div>

        <div className="relative mt-20">


          <div className="grid grid-cols-5 gap-5">

            {partnersTop.map((item) => (
              <PartnerCard key={item.name} {...item} />
            ))}

          </div>

          <div className="grid grid-cols-5 gap-5 mt-5">

            {partnersBottom.map((item) => (
              <PartnerCard key={item.name} {...item} />
            ))}

          </div>


          <img
            src="/top.png"
            alt=""
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[240px]
              w-[80%]
              -translate-x-1/2
              z-10
            "
          />


          <div className="relative z-30 mt-[300px] flex justify-center">
            <CenterNode />
          </div>


          <img
            src="/bottom.png"
            alt=""
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[690px]
              w-[82%]
              -translate-x-1/2
              z-10
            "
          />

          <div className="mt-[305px]">

            <div className="grid grid-cols-5 gap-5">

              {servicesTop.map((item) => (
                <SolutionCard key={item.title} {...item} />
              ))}

            </div>

            <div className="grid grid-cols-5 gap-5 mt-5">

              {servicesBottom.map((item) => (
                <SolutionCard key={item.title} {...item} />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}