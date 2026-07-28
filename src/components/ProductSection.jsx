import { FaArrowRight } from "react-icons/fa";
import Capsule from "./Capsule";
import Button from "../UI/Button";

export default function ProductSection() {
    const features = [
        "Auto-discover and tag scattered sensitive data across endpoints, servers, and cloud drives.",
        "Real-time email classification to prevent accidental or malicious data leakage.",
        "AI-powered screenshot and image DLP to detect and block sensitive content in visual formats.",
        "Enforce data handling policies at source before files are shared, copied, or uploaded.",
        "Seamless metadata labelling that integrates with DLP, CASB, and M365 for end-to-end policy enforcement.",
    ];

    const tabs = [
        "Data Discovery",
        "Data Classification",
        "Data Protection",
        "Regulatory Compliance",
    ];

    return (
        <section className="relative overflow-hidden py-24">

            <div className="relative mx-auto max-w-[1500px] px-6">

                {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">

                    <Capsule title="Our Products" />
                    <h2 className="mt-8 text-4xl font-bold text-white">
                        The ACPL{" "}
                        <span className="text-primary">
                            Differentiator
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-2xl text-base leading-6 text-gray-300">
                        From data classification to network defense, ACPL's product suite
                        ensures visibility, compliance, and control across hybrid, cloud,
                        and on-prem environments.
                    </p>

                </div>

                {/* Main Layout */}

                <div className="mt-24 grid grid-cols-1 gap-20 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* LEFT */}

                    <div>

                        <h2 className="text-5xl font-bold text-white leading-tight">
                            Klassify —
                            Data Knows Its Place
                        </h2>

                        <p className="mt-4 max-w-2xl text-base leading-6 text-gray-300">
                            Klassify helps enterprises identify, classify, and protect
                            sensitive data across endpoints and cloud, ensuring compliance,
                            visibility, and strong governance.
                        </p>

                        {/* Product Images */}

                        <div className="relative py-4">

                            <img
                                src="/banner1.png"
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

                        <Button title="  Explore Klassify" icon={<FaArrowRight />} />


                    </div>

                    {/* RIGHT */}

                    <div className="relative">

                        {/* Divider */}

                        <div className="absolute left-0 top-0 hidden h-full w-px bg-red-900 lg:block" />

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
                                    <div className="absolute left-0 top-0 h-full w-[3px] bg-red-600 scale-y-0 origin-top " />

                                    {/* Text */}
                                    <p className="relative z-10 text-lg leading-6 text-gray-200">
                                        {feature}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
