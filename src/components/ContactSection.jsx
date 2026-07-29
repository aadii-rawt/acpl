import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden  ma py-10 bg-gradient-to-br from-[#2C0002] via-[#560E0E] to-[#2C0002]">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5b0707_0%,#320303_45%,#220203_100%)]" />

      <div className="relative mx-auto max-w-[1600px] px-6 max-w-8xl mx-auto">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
              We Are Here To Help You
            </span>

            <h2 className="mt-5 text-5xl font-primary font-semibold leading-[1.15] text-white">
              Discuss Your
              <br />
              Cybersecurity
              <br />
              Challenges!
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-8 text-gray-300">
              Are you looking for top-quality cybersecurity solutions tailored
              to your needs? Reach out to us.
            </p>

            {/* Contact */}

            <div className="mt-10 space-y-10">

              <div className="flex items-center gap-6">

                <div className="flex  items-center justify-center rounded-lg text-2xl text-white">
                  <FaEnvelope />
                </div>

                <div>

                  <p className="text-gray-400 text-sm">
                    E-mail
                  </p>

                  <h4 className="text-lg  font-semibold text-red-500">
                    info@acpl.com
                  </h4>

                </div>

              </div>

              <div className="flex items-center gap-6">

                <div className="flex  items-center justify-center rounded-lg text-2xl text-white">
                  <FaPhoneAlt />
                </div>

                <div>

                  <p className="text-gray-400 text-sm">
                    Phone number
                  </p>

                  <h4 className="text-3xl font-semibold text-red-500 text-lg ">
                    +61 410 485 811
                  </h4>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="text-center">

              <h2 className=" text-4xl font-primary font-bold text-white">
                Questions or Comments?
              </h2>

              <h3 className="mt-2 text-4xl font-bold text-primary">
                Get in Touch
              </h3>

            </div>

            <div className="mt-16 grid grid-cols-2 gap-8">

              <input
                type="text"
                placeholder="Your Name*"
                className="h-12 rounded border border-red-600 bg-transparent px-5 text-lg text-white outline-none placeholder:text-gray-300 focus:border-red-500"
              />

              <input
                type="text"
                placeholder="Company Name*"
                className="h-12 rounded border border-red-600 bg-transparent px-5 text-lg text-white outline-none placeholder:text-gray-300 focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Company Email*"
                className="h-12 rounded border border-red-600 bg-transparent px-5 text-lg text-white outline-none placeholder:text-gray-300 focus:border-red-500"
              />

              <div className="flex gap-4">

                <select
                  className="w-24 rounded border border-red-600 bg-transparent px-3 text-white outline-none"
                >
                  <option className="text-black">+1</option>
                  <option className="text-black">+61</option>
                  <option className="text-black">+91</option>
                </select>

                <input
                  type="text"
                  placeholder="Contact Number*"
                  className="flex-1 rounded border border-red-600 bg-transparent px-5 text-lg text-white outline-none placeholder:text-gray-300 focus:border-red-500"
                />
                              </div>

              <select
                className="h-12 rounded border border-red-600 bg-transparent px-5 text-lg text-white outline-none focus:border-red-500"
              >
                <option className="text-black">
                  Preferred Service Area*
                </option>
                <option className="text-black">
                  Cyber Security
                </option>
                <option className="text-black">
                  SOC Services
                </option>
                <option className="text-black">
                  Cloud Security
                </option>
              </select>

              <select
                className="h-12 rounded border border-red-600 bg-transparent px-5 text-lg text-white outline-none focus:border-red-500"
              >
                <option className="text-black">
                  Preferred Contact Method
                </option>
                <option className="text-black">
                  Email
                </option>
                <option className="text-black">
                  Phone
                </option>
                <option className="text-black">
                  WhatsApp
                </option>
              </select>

              <textarea
                rows={2}
                placeholder="Description*"
                className="col-span-2 resize-none rounded border border-red-600 bg-transparent px-5 py-5 text-lg text-white outline-none placeholder:text-gray-300 focus:border-red-500"
              />

            </div>

            {/* Button */}

            <div className="mt-10 flex justify-center">

              <button
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-[#ff2a2a]
                  to-[#b81414]
                  px-10
                  py-2
                  text-lg
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_10px_35px_rgba(255,0,0,.35)]
                "
              >
                SUBMIT
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[180px]" />

    </section>
  );
}

              