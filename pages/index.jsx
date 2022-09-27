import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Jumbotron from "../components/jumboTron";
import Sponsors from "../components/Sponsors";
import About from "../components/About";
import ServiceCard from "../components/serviceCard";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import ReviewCard from "../components/reviewCard";
import ACard from "../components/ACard";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto max-w-screen-2xl">
      <Head>
        <title>IT Solutions</title>
      </Head>
      {/* ///////////////////////////////////////// */}
      <main
        className={`max-w-screen-2xl  min-h-full lg:px-28 px-4 w-full pt-9  ${styles.jumbotron}`}
      >
        <Navbar />
        <Jumbotron />
        <Sponsors />
      </main>
      {/* ///////////////////////////////////////// */}
      <About />
      {/* ///////////////////////////////////////// */}
      <main className="max-w-screen-2xl mt-2 py-5 mb:pb-16  items-center  lg:pl-48  px-7 w-full bg-[#f6f6f6] flex flex-col  md:flex-row md:justify-between">
        <div className="md:max-w-[200px] flex-1/4">
          <h1 className="text-2xl  font-semibold text-[#053746] py-2">
            We Provide The Best Quality Services
          </h1>
          <h2 className="text-sm  text-[#6C6C6C] py-2 ">
            We are technology solutions providing company all over the world
            doing over 20 years.
          </h2>
          <button className="hidden text-xs md:block rounded-full bg-orange-500 px-3 py-2 text-white">
            Explore All
          </button>
        </div>
        <div className=" flex flex-col md:flex-row ">
          <ServiceCard
            bg={true}
            heading="Cyber Security"
            text="We provide cybersecurity services. Our team of security experts
          deliver a range of risk, compliance, and IT security..."
            img="/card/security.png"
          />
          <ServiceCard
            bg={false}
            shifted={true}
            heading="Cloud Development"
            text="We provide cloud software development services to help companies become more agile and streamline..."
            img="/card/cloud.png"
          />
          <ServiceCard
            bg={false}
            heading="Technical Solutions"
            text="ITsolutions offers a total end to end support solution for the IT and technology within your company.We understand ..."
            img="/card/solutions.png"
          />
        </div>
      </main>
      {/* ///////////////////////////////////////// */}
      <main
        className={`max-w-screen-2xl  min-h-full lg:px-28 px-5 w-full pt-9  `}
      >
        <section className="flex justify-between">
          <h1 className="max-w-[440px] mx-auto md:m-0 text-[#053746] font-bold text-4xl ">
            Some Sweet Talk Of Our Happy Clients!
          </h1>
          <div className="hidden  md:flex self-end gap-x-3">
            <button className="rounded-full bg-[#E6EAEC] p-2">
              <AiOutlineArrowLeft />
            </button>
            <button className="rounded-full text-white bg-orange-500 p-2">
              <AiOutlineArrowRight />
            </button>
          </div>
        </section>
        {/* ///////////  Slider //////////////////// */}

        <section className="md:px-7 grid place-items-center mt-8 grid-cols-1 md:grid-cols-3  md:gap-x-8 ">
          <ReviewCard
            name="Herry Hopper"
            text=" We look and sound so good! I’m still in shock at how smooth this process
        was. The professionalism, collaboration and the design"
            img="/reviewCard/user.png"
          />
          <ReviewCard
            bgBlob={true}
            name="Herry Hopper"
            text=" We look and sound so good! I’m still in shock at how smooth this process
        was. The professionalism, collaboration and the design"
            img="/reviewCard/user.png"
          />
          <ReviewCard
            name="Herry Hopper"
            text=" We look and sound so good! I’m still in shock at how smooth this process
        was. The professionalism, collaboration and the design"
            img="/reviewCard/user.png"
          />
        </section>
        <div className="hidden md:flex w-fit flex-row mx-auto gap-x-2 mt-3">
          <button className="w-[25px] h-[6px] bg-[#E6EAEC] rounded-full"></button>
          <button className="w-[25px] h-[6px] bg-[#053746] rounded-full"></button>
          <button className="w-[25px] h-[6px] bg-[#E6EAEC] rounded-full"></button>
        </div>
        <hr className="md:hidden my-2" />
        <section className="flex md:mt-20 justify-between flex-col md:flex-row">
          <ACard
            text="Projects Done"
            number="250+"
            img="/achievement/tick.png"
          />
          <ACard
            text="Consultants"
            number="850+"
            img="/achievement/consultant.png"
          />
          <ACard
            text="Happy Clients"
            number="650+"
            img="/achievement/service.png"
          />
          <ACard text="Awards Won" number="150+" img="/achievement/medal.png" />
        </section>
        {/* //////////////////////////////// */}
        <section className="my-4">
          <div>
            <h1 className="pt-7 pb-9 text-[#053746] max-w-[587px] font-bold text-3xl">
              Get Answer To Your Questions
            </h1>
            <h2 className="pr-5 max-w-[739px] text-xs">
              Our clients turn to us to help them reimagine ways of working with
              technology. We are technology solutions providing company all over
              the world doing over 20 years.
            </h2>
          </div>
          <section className="flex items-center justify-between gap-3 mt-5">
            <div className="hidden md:block">
              <img src="/support.png" alt="qna image filler " />
            </div>
            <form className=" w-fit mx-auto ">
              <div className="flex flex-col sm:flex-row sm:gap-x-3 sm:gap-y-0 gap-y-3 my-3 w-full ">
                <input
                  placeholder="Name"
                  className="max-w-[270px] py-1 px-2 max-h-[47px] rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none;
                "
                />
                <input
                  placeholder="E-mail"
                  className="max-w-[270px] py-1 px-2 max-h-[47px] rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none;
                "
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-x-3 sm:gap-y-0 gap-y-3 my-3 w-full ">
                <input
                  placeholder="Organization"
                  className="max-w-[270px] py-1 px-2 max-h-[47px] rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none;
                "
                />
                <input
                  placeholder="Contact Number"
                  className="max-w-[270px] py-1 px-2 max-h-[47px] rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none;
                "
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-x-3 sm:gap-y-0 gap-y-3 my-3 w-full ">
                <input
                  placeholder="Region"
                  className="max-w-[270px] py-1 px-2 max-h-[47px] rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none;
                "
                />
                <input
                  placeholder="Inquiry Type"
                  className="max-w-[270px] py-1 px-2 max-h-[47px] rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none;
                "
                />
              </div>
              <textarea
                className="px-2 py-1 w-full rounded-md bg-[#F6F6F6] text-black outline-none border-none focus:outline-none focus:border-none"
                rows="5"
                placeholder="message"
              ></textarea>
              <div className="flex w-full">
                <input type="checkbox" value="" />
                <label className="text-sm text-[#6C6C6C]" htmlFor="consent">
                  Yes, I have read and agree to the Data Privacy and Privacy
                  notice.
                </label>
              </div>
              <button className="text-white my-1 bg-orange-500 w-full rounded-full py-2">
                Send Message
              </button>
            </form>
          </section>
        </section>
        {/* /////////////////////////////////// */}
        <hr />
        <section className="my-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-5">
              <h1 className="max-w-[477px]  mx-auto md:m-0 text-[#053746] font-bold text-4xl ">
                View All Upcoming Events
              </h1>
              <p className="text-[#474948] max-w-[739px] text-base">
                When you join the movement, you become part of the answer. Our
                events and volunteer opportunities allow you to form meaningful
                connections and find ways to give back.
              </p>
            </div>
            <div className="hidden  md:flex self-end gap-x-3">
              <button className="rounded-full bg-[#E6EAEC] p-2">
                <AiOutlineArrowLeft />
              </button>
              <button className="rounded-full text-white bg-orange-500 p-2">
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          {/* card area */}
          <div className="grid grid-cols-1 gap-y-4 my-8 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 ">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </section>
        {/* //////////////////////////////////// */}
      </main>

      <Footer />
    </main>
  );
}
{
  /* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */
}
