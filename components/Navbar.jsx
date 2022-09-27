import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Navbar() {
  const [Nav, setNav] = useState(false);
  const route = useRouter();
  return (
    <nav className="relative flex justify-between items-center w-full">
      <Link href="/">
        <div className="relative w-24 h-9">
          <Image
            priority
            alt="logo"
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
      </Link>
      <div
        className={`absolute w-full bottom-0 ${
          Nav
            ? " translate-y-full pointer-events-auto  bg-[#FFE7D9] opacity-100 mt-5 lg:bg-transparent gap-3 z-50 p-3 rounded-md "
            : " opacity-0 pointer-events-none "
        } transform-gpu transition-all lg:pointer-events-auto lg:static lg:opacity-100 lg:gap-0 lg:mt-0 lg:w-fit lg:p-0 lg:rounded-none flex flex-col lg:flex-row items-center`}
      >
        <Link href="/">
          <a className={`px-3 text-base cursor-pointer `}>Home</a>
        </Link>
        <Link href="/industries">
          <a
            href="#"
            className={`cursor-pointer px-3 text-base  ${
              route.pathname === "/industries" ? "text-orange-500" : "  "
            }`}
          >
            Industries
          </a>
        </Link>
        <Link href="/about">
          <a
            href="#"
            className={`cursor-pointer px-3 text-base  ${
              route.pathname === "/about" ? "text-orange-500" : "  "
            }`}
          >
            About Us
          </a>
        </Link>
        <Link href="/services">
          <a
            href="#"
            className={`cursor-pointer px-3 text-base  ${
              route.pathname === "/services" ? "text-orange-500" : "  "
            }`}
          >
            Services
          </a>
        </Link>
        <Link href="/insights">
          <a
            href="#"
            className={`cursor-pointer px-3 text-base  ${
              route.pathname === "/insights" ? "text-orange-500" : "  "
            }`}
          >
            Insights
          </a>
        </Link>
        <Link href="/">
          <a href="#" className="lg:hidden px-3 text-base">
            Contact US
          </a>
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
