import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className=" max-w-screen-2xl  min-h-full  px-4 w-full pt-9 bg-[#033342] text-white">
      <div className="w-[90%] mx-auto  gap-1 grid grid-cols-2 justify-between py-8 px-6 md:grid-cols-4  items-center">
        <div>
          <img src="/nsl.png" className="w-[90px] h-[50px]" />
          <p className="max-w-[300px] w-full my-4">
            With experience in entrepreneurship, leadership, project delivery,
            customer experience and technology, we are changing the existing IT
            market.
          </p>
          <div className="flex flex-row gap-x-4 text-xl">
            <button className="text-sm rounded-full p-3 bg-white text-black">
              <FaFacebookF />
            </button>
            <button className="text-sm rounded-full p-3  bg-white text-black">
              <BsTwitter />
            </button>
            <button className="text-sm   rounded-full p-3 bg-white  text-black">
              <FaLinkedinIn />
            </button>
            <button className="rounded-full p-3 text-sm  text-black bg-white">
              <AiOutlineInstagram />
            </button>
          </div>
        </div>

        <div>
          <h2 className="mb-5 font-bold text-2xl text-white  text-[18px]">
            About Us
          </h2>
          <ul className="">
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                About ITsolution Technologies
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Industries
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Careers
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Insights
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Awards & Success
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-bold text-2xl text-white  text-[18px]">
            Services
          </h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Software Development
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Web Development
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                App development
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                Cloud Native Services
              </a>
            </li>
            <li className="mb-1">
              <a
                href="#"
                className=" text-[13px] text-white font-medium hover:text-[#d1291c]"
              >
                IT Infrastructure Management
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Subscribe Here</h1>
          <form>
            <input
              placeholder="Enter your email here"
              className="my-8 bg-transparent border border-white text-sm py-2 px-4 max-w-[300px]   rounded-full focus:outline-none outline-none"
            />
            <br />
            <button
              type="submit"
              className="bg-orange-500 rounded-full text-base px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="py-6 px-4 md:flex md:items-start md:justify-between border-t border-gray-400">
        <span className=" text-[10px] text-white font-semibold leading-5 w-[30%]">
          © Copyright 2022 ITsolution Technologies - Email: demomail@gmail.com
        </span>
        <span className=" text-[10px] text-white font-semibold leading-5">
          Private Import Policy | Privacy | Terms & Conditions | Cookies |
          Sitemap
        </span>
      </div>
    </footer>
  );
}
