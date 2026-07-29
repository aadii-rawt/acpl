import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Stepper from "./Stepper";
import IconColumn from "./IconColumn";
import Capsule from "./Capsule";
// import IconColumn from "./IconColumn";

const steps = [
  {
    badge: "CyberCare Pro",
    title: "One Engineering Bench",
    heading: "One Bench, One",
    highlight: "Banner",
    description:
      "At the heart of ACPL is CyberCare — a unified services framework that seamlessly integrates advisory, implementation, and managed security, ensuring resilient, scalable, and outcome-driven protection across your enterprise.",
  },
  {
    badge: "CyberCare Pro",
    title: "Multi-Vendor Expertise",
    heading: "Multi Vendor",
    highlight: "Expertise",
    description:
      "Access deep expertise across multiple cybersecurity vendors with seamless deployment, optimisation, and long-term operational support.",
  },
  {
    badge: "CyberCare Pro",
    title: "All-in-One Security Hub",
    heading: "All-in-One",
    highlight: "Security Hub",
    description:
      "Bring together security operations, governance, compliance, and monitoring into a unified platform for complete visibility.",
  },
  {
    badge: "CyberCare Pro",
    title: "Customer Led Engagements",
    heading: "Customer Led",
    highlight: "Engagements",
    description:
      "Every engagement is customised around your business priorities to deliver measurable cybersecurity outcomes.",
  },
];

export default function BannerSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const active = steps[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#160000] ">
      <div className="mx-auto md:flex  gap-5 max-w-8xl mx-auto items-center justify-between gap-20 px-6">
        {/* Left Side */}
        <div className="w-full max-w-2xl">

          <Capsule title="Cybercare Pro" />
          <h1 className="mt-8 text-2xl font-bold leading-tight text-white lg:text-4xl font-primary">
            One Bench, One
            <span className="text-red-500"> Banner</span>
          </h1>

          <p className="mt-3 leading-6 text-gray-300">
            At the heart of ACPL is CyberCare — a unified services framework that seamlessly integrates advisory, implementation, and managed security, ensuring resilient, scalable, and outcome-driven protection across your enterprise.
          </p>

          <div className=" my-4">
            <Stepper
              steps={steps}
              activeIndex={activeIndex}
            />
          </div>

          <button className="mt-10 flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#E41F26] to-[#7E1115] px-8 py-3 font-semibold text-white transition hover:scale-105">
            Request a Demo
            <FaArrowRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="">
          <IconColumn activeIndex={activeIndex} />
        </div>
      </div>

      {/* Background Glow */}
      {/* <div className="absolute -bottom-60 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-700/10 blur-[180px]" /> */}
    </section>
  );
}