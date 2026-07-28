import { FaQuoteLeft } from "react-icons/fa";
import Capsule from "./Capsule";

const testimonials = [
  {
    text: "ACPL team is extremely well versed with the cybersecurity landscape. Their advice has allowed us to be early adopters of technologies like NDR, SASE and DSPM. Their sense of urgency has allowed me to vouch for them for over a decade now.",
    name: "John Williams",
    role: "Lead designer",
    image: "/testimonial/user.png",
  },
  {
    text: "Some immense scale projects have been completed by the ACPL team within weeks. They helped us build a service platform that suits our organisations needs. Our core ACPL representatives have not changed over 15 years which has added a lot of stability to our engagement.",
    name: "John Williams",
    role: "Lead designer",
    image: "/testimonial/user.png",
  },
  {
    text: "The attention to detail and a vast partner ecosystem allowed me to really be confident about my procurement and deployment. I could focus on running the OT and IT portion while security was taken care of by team ACPL.",
    name: "John Williams",
    role: "Lead designer",
    image: "/testimonial/user.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden  py-28">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/5 blur-[180px]" />

      <div className="relative mx-auto max-w-[1500px] px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

<Capsule title={"Testimonials"} />
        

          <h2 className="mt-8 text-5xl font-semibold text-white">
            Trusted by Industry Leaders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-6 text-gray-300">
            Our customers speak for us — read how ACPL’s end-to-end
            cybersecurity services deliver value, protection, and trust
            across industries and geographies.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-20 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-[#2b0b0b] p-10 "
            >

            
              <img
                src="/test-bg.png"
                alt=""
                className="absolute inset-0 h-full w-full object-fill pointer-events-none"
            />
              {/* Quote */}

              <FaQuoteLeft className="relative z-10 text-3xl text-white" />

              {/* Text */}

              <p className="relative z-10 mt-8 min-h-[180px] text-lg leading-8 text-white">
                {item.text}
              </p>

              {/* User */}

              <div className="relative z-10 mt-12 flex items-center gap-4">

                <img
                  src="./user.png"
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover border border-red-500"
                />

                <div>

                  <h4 className="text-xl font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="mt-1 text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}