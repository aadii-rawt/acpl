import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5">
      <div className="max-w-8xl mx-auto bg-[#300506]/80 backdrop-blur-md border border-red-900 rounded-xl">

        <div className="flex items-center justify-between px-10 py-3">

          {/* Logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="w-24"
          />

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-14  text-white">
            <a href="/" className="hover:text-red-500 duration-300">
              Services
            </a>

            <a href="/" className="hover:text-red-500 duration-300">
              Products
            </a>

            <a href="/" className="hover:text-red-500 duration-300">
              ACPL Global
            </a>
          </nav>

          {/* Button */}

          <button className="hidden lg:block border text-white border-red-700 px-8 py-2 rounded-sm hover:bg-red-600 duration-300 font-semibold">
            Schedule A Call
          </button>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl text-white"
          >
            <FaBars />
          </button>
        </div>

        {open && (
          <div className="lg:hidden px-6 pb-5 flex flex-col gap-5 text-white">

            <a href="/">Services</a>

            <a href="/">Products</a>

            <a href="/">ACPL Global</a>

            <button className="border border-red-700 rounded-lg py-3">
              Schedule A Call
            </button>

          </div>
        )}
      </div>
    </header>
  );
}