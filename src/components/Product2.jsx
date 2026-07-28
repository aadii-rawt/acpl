import { FaArrowRight } from "react-icons/fa";
import Capsule from "./Capsule";
import Button from "../UI/Button";

export default function Product2() {
  const features = [
  "Enriches SIEM/XDR with high-fidelity network telemetry to cut false positives.",
  "Prioritises high-risk threats so SOC teams focus only on what matters.",
  "Exposes lateral movement that EDR alone can't see.",
  "Feeds clean, contextual logs to SOAR for faster automated playbooks and auto-remediation.",
  "Acts as a unified sensor layer powering MDR/SOC efficiency across IT, OT, IoT, and cloud.",
];

const tabs = [
  "NDR",
  "XDR",
  "Log Manager",
  "NBAD",
];

    return (
        <section className="relative overflow-hidden ">

            <div className="relative mx-auto max-w-[1500px] px-6">

                <div className=" grid grid-cols-1 gap-20 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* LEFT */}

                    <div className="relative">



                        {/* Divider */}

                        {/* <div className="absolute left-0 top-0 hidden h-full w-px bg-red-900 lg:block" /> */}

                        <div className="space-y-8 pl-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden px-8 py-8"
                                >
                                    {/* Dot Pattern */}
                                    <img
                                        src="/bg-corner.png"
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-fill pointer-events-none"
                                    />

                                    {/* Left Border */}
                                    {/* <div className="absolute left-0 top-0 h-full w-[3px] bg-red-600 scale-y-0 origin-top " /> */}

                                    {/* Text */}
                                    <p className="relative z-10 text-lg leading-6 text-gray-200">
                                        {feature}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>
               
                    {/* RIGHT */}

                         <div>

                        <h2 className="text-5xl font-bold text-white leading-tight">
                          AttackFence - 
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-6 text-gray-300">
                        Intelligent NDR and log management with unified visibility, threat detection, and automated response across enterprise environments.
                        </p>

                        {/* Product Images */}

                        <div className="relative py-4">

                            <img
                                src="/banner2.png"
                                alt=""
                                className=" w-full"
                            />

                        </div>

                        {/* Tabs */}

                        <div className="mt-8 flex flex-wrap gap-4">

                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    className="rounded-lg border border-[#4C4C4C] bg-[#111111] px-5 py-3 text-[13px] text-gray-200"
                                >
                                    {tab}
                                </button>
                            ))}

                        </div>

                        <Button title="Explore AttackFence" icon={<FaArrowRight />} />


                    </div>



                </div>

            </div>


        </section>
    );
}
