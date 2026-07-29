import Capsule from "./Capsule";
import ServiceCard from "./ServiceCard";

const services = [
    {
        number: "01",
        title: "Health Checks",
        icon: "/services/icon4.png",
        description:
            "Continuously monitor and optimise your security infrastructure to improve performance, resilience, and operational efficiency.",

    },
    {
        number: "02",
        title: "Deployment",
        icon: "/services/icon3.png",
        description:
            "Deploy enterprise-grade cybersecurity solutions with minimal downtime, ensuring seamless integration with your existing infrastructure.",

    },
    {
        number: "03",
        title: "Assessment & POCs",
        icon: "/services/icon2.png",
        description:
            "Evaluate security posture, identify risks, and validate technologies through detailed assessments and proof of concepts before deployment.",
    },
    {
        number: "04",
        title: "Architecture",
        icon: "/services/icon1.png",
        description: "Design secure and scalable cybersecurity architectures aligned with your business goals while ensuring compliance, resilience, and long-term flexibility.",
    },
];

export default function ServicesSection() {
    return (
        <section id="service" className="relative  py-24">

            <div className="relative max-w-[1500px] mx-auto px-5">

                {/* Heading */}

                <div className="text-center">

                           <Capsule title="Our Services" />


                    <h2 className="mt-8 text-2xl text-white md:text-3xl lg:text-4xl font-primary font-semibold leading-tight">
                        Precision-Engineered
                        <br />
                        <span className="text-primary">
                            Cybersecurity Services
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-white  text-base">
                        From planning and assessment to deployment and optimisation,
                        we help organisations build secure, scalable, and future-ready
                        cybersecurity environments.
                    </p>
                </div>

                {/* Sticky Cards */}

                <div className="relative mt-28">

                    {services.map((service, index) => (
                        <div
                            key={service.number}
                            className="sticky"
                            style={{
                                top: `${350 + index * 24}px`,
                                zIndex: index + 1,
                            }}
                        >
                            <ServiceCard
                                {...service}
                                className="mb-28"
                            />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}