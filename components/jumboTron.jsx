import Image from "next/image";
export default function Jumbotron() {
  return (
    <div className="flex-1 max-h-[85%] flex flex-col sm:flex-row items-center  pt-12">
      <div className="mx-auto w-11/12 self-start pt-9 flex-1 flex flex-col">
        <div className="">
          <h1 className="relative text-[#053746] z-20 w-fit  font-semibold text-4xl py-3 mb-4 md:text-5xl lg:text-6xl">
            Transforming
            <br />
            Industries With
            <br />
            Technology
            <img
              src="/jumboIco.png"
              className="absolute block sm:hidden opacity-25 top-0 z-0 right-0"
            />
          </h1>
          <h1 className="text-[#6C6C6C] max-w-sm text-sm pr-3  ">
            We help visionary executives transform their ventures with
            technology to thrive in the digital era With more than 20 years of
            experience.
          </h1>
        </div>
        <div className=" max-w-sm w-[80%] min-w-max bg-[#053746] flex rounded-full mt-9">
          <input
            className="h-full flex-1 bg-transparent text-md text-white pl-3 pr-1 py-1.5 lg:py-2.5"
            placeholder="Enter your email"
          />
          <button className=" bg-orange-500 text-sm text-white rounded-full px-2 ">
            Try for free
          </button>
        </div>
      </div>
      <div className="hidden sm:block   h-full basis-1/2 ">
        <div className="relative max-w-full min-w-full h-96 lg:h-[500px] max-h-[695px]">
          <Image
	priority
	  alt="hero"
            src="/jumboHer.png"
            layout="fill"
            objectFit="contain"
            className=" bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
