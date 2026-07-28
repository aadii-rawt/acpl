import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#220203] py-16">

      <div className="mx-auto flex max-w-7xl flex-col items-center">

        {/* Logo */}

        <img
          src="/logo.png"
          alt="ACPL"
          className="w-50 object-contain"
        />

        {/* Navigation */}

        <div className="mt-8 flex items-center gap-12">

          <a
            href="#"
            className="text-white transition duration-300 hover:text-red-500"
          >
            Services
          </a>

          <a
            href="#"
            className="text-white transition duration-300 hover:text-red-500"
          >
            Solutions
          </a>

          <a
            href="#"
            className="text-white transition duration-300 hover:text-red-500"
          >
            About ACPL
          </a>

        </div>

        {/* Social */}

        <a
          href="#"
          className="mt-8 flex items-center justify-center rounded-sm text-white transition duration-300 hover:border-red-500 hover:bg-red-600"
        >
          <FaLinkedin className="text-3xl" />
        </a>

        {/* Copyright */}

        <p className="mt-8 text-sm text-gray-500">
          © 2025 ACPL Systems All rights reserved.
        </p>
        <p className="text-white my-3">build with 🖤 by <a href="https://aadii.site/" target="_blank" className="underline">aadii rawt</a></p> 

      </div>

    </footer>
  );
}