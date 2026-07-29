import { FaArrowRight } from "react-icons/fa";
import Button from "../UI/Button";

export default function Request() {
  return (
    <section className="relative overflow-hidden bg-[#3B0000]  py-20 my-40">

   
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/10 blur-[180px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 text-center">

        <h2 className="max-w-5xl text-4xl font-semibold text-4xl font-primary leading-tight text-white md:text-3xl lg:text-5xl">
          Ready to Leverage ACPL’s IP Platforms
          <br />
          for Deeper Security Insights!!
        </h2>

<Button title="Request a Demo" icon={  <FaArrowRight />} />
       
      </div>
    </section>
  );
}