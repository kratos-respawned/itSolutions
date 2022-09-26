import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [Nav, setNav] = useState(false);
  return (
    <nav className="relative flex justify-between items-center w-full">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="lg:w-40 lg:h-9 w-32 h-7" />
      </Link>
      <div
        className={`absolute w-full bottom-0 ${
          Nav
            ? " translate-y-full bg-[#FFE7D9] opacity-100 mt-2 lg:bg-transparent gap-3 z-50 p-3 rounded-md "
            : " opacity-0 pointer-events-none "
        } transform-gpu transition-all lg:static lg:opacity-100 lg:gap-0 lg:mt-0 lg:w-fit lg:p-0 lg:rounded-none flex flex-col lg:flex-row items-center`}
      >
        <Link href="/">
          <a className="px-3 text-base">Home</a>
        </Link>
        <Link href="/">
          <a className="px-3 text-base">Industries</a>
        </Link>
        <Link href="/">
          <a className="px-3 text-base">About Us</a>
        </Link>
        <Link href="/">
          <a className="px-3 text-base">Services</a>
        </Link>
        <Link href="/">
          <a className="px-3 text-base">Insights</a>
        </Link>
        <Link href="/">
          <a className="lg:hidden px-3 text-base">Contact US</a>
        </Link>
        <button className="hidden lg:block rounded-full text-white bg-orange-500 px-4 py-2 mx-2">
          Contact Us
        </button>
      </div>
      <button
        onClick={() => {
          setNav((Nav) => !Nav);
        }}
        className="lg:hidden text-xl"
      >
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}
