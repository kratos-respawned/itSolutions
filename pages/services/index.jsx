import Head from "next/head";
import Navbar from "../../components/Navbar";
import { AiFillHome } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "../../components/service/ServiceCard";
import PromoCard from "../../components/service/PromoCard";
import AchievementCard from "../../components/service/AchievementCard";
import Footer from "../../components/Footer";
import TimelineCard from "../../components/service/TimelineCard";
export default function Services() {
  const services = [
    {
      img: "/servicePage/serviceCard/ops.png",
      title: "Operations",
      text: "We build a strategy to streamline process, implement workfows to run your business from any where and ensure operational excellence in effective.",
    },
    {
      img: "/servicePage/serviceCard/cloud.png",
      title: "Cloud Development",
      text: "Our custom software developers provide your business with velocity, reliability, and functionality of the cloud technology that guards stability and fosters growth.",
    },
    {
      img: "/servicePage/serviceCard/native.png",
      title: "Native Apps",
      text: "Our navtive developers expertise in providing solutions in native OS platforms to drive your business needs.",
    },
    {
      img: "/servicePage/serviceCard/custom.png",
      title: "Custom Software",
      text: "Looking for unique custom software for your product to drive business and end user customers.",
    },
    {
      img: "/servicePage/serviceCard/nextgen.png",
      title: "NextGen Network",
      text: "Developing  enterpise sultion with new cutting edge technology and stay update to date with latest tools and frameworks to compete with business partners.",
    },

    {
      img: "/servicePage/serviceCard/support.png",
      title: "24/7 Support",
      text: "An excellent customer experience creates an emotional bond between you and your customer. Our expertise combines business and customer experience strategy.",
    },
    {
      img: "/servicePage/serviceCard/legacy.png",
      title: "Legacy",
      text: "Our Legacy developers enhance your new futures development to support your bussiness.",
    },
    {
      img: "/servicePage/serviceCard/dev.png",
      title: "Development",
      text: "Our softwre developers expertise in developing solution with latest tech stack in the market with cost efficient.",
    },
    {
      img: "/servicePage/serviceCard/fastrackDev.png",
      title: "Fast Track Development",
      text: "Our excellence in deploying separate fast track development teams stay focused on designing and build new products & solutions with high quality and delivery in time.",
    },
    {
      img: "/servicePage/serviceCard/mobility.png",
      title: "Mobility",
      text: "Our Android, Ios, react Native developer are stay up to date to build new products by adopting new patterns. Make your product available in mobile to access billions of customers and grow your bussiness.",
    },
    {
      img: "/servicePage/serviceCard/rnd.png",
      title: "Research & Development",
      text: "ITsolutions offers a total end to end support solution for the IT and technology within your company.We understand ...",
    },
    {
      img: "/servicePage/serviceCard/automation.png",
      title: "Automation",
      text: "Our automation engineers are expertise in transitioning from manual to automation. To save millions of dollars with out any impact to your business and make your products robust.",
    },
  ];
  const promo = [
    {
      title: "Excellent Support",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      img: "/servicePage/promoCard/support.png",
    },
    {
      title: "Reliable Experts",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      img: "/servicePage/promoCard/expert.png",
    },
    {
      title: "Endless Possibilities",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      img: "/servicePage/promoCard/possibility.png",
    },
    {
      title: "Unique Technologies",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
      img: "/servicePage/promoCard/technology.png",
    },
  ];
  const achievement = [
    {
      img: "/servicePage/achievementCard/leader.png",
      title: "Experienced Leadership",
    },
    {
      img: "/servicePage/achievementCard/blend.png",
      title: "Blend of Culture",
    },
    {
      img: "/servicePage/achievementCard/sustain.png",
      title: "Designed For Sustainability",
    },
    {
      img: "/servicePage/achievementCard/quality.png",
      title: "Committed to the Highest Quality",
    },
  ];
  const timeline = [
    {
      img: "/servicePage/working/discovery.png",
      title: "Discovery",
      text: "Contrary to popular belief, Lorem Ipsum is not.",
    },
    {
      img: "/servicePage/working/planning.png",
      title: "Planning",
      text: "Contrary to popular belief, Lorem Ipsum is not.",
    },
    {
      img: "/servicePage/working/practice.png",
      title: "Practice",
      text: "Contrary to popular belief, Lorem Ipsum is not.",
    },
    {
      img: "/servicePage/working/delivery.png",
      title: "Delivery",
      text: "Contrary to popular belief, Lorem Ipsum is not.",
    },
  ];
  return (
    <main className=" mx-auto max-w-screen-2xl  ">
      <Head>
        <title>Services</title>
      </Head>
      <main
        className={`max-w-screen-2xl h-full min-h-full lg:px-28  px-4  w-full pt-9  bg-[#F5EFEB]`}
      >
        <Navbar />
        <section className="sm:mt-4  lg:w-full mx-auto grid items-center justify-center sm:gap-x-1 lg:gap-x-3 sm:grid-cols-2 sm:justify-between  h-[60vh] min-h-full sm:h-full">
          <div className="">
            <h1 className="poppins font-bold text-4xl green text-center sm:text-left">
              Our Services
            </h1>
            <div className=" flex items-center justify-center sm:justify-start text-sm mt-3">
              <AiFillHome className="text-[#6C6C6C] mr-1" />
              <Link href="/">
                <a className="inter">Home</a>
              </Link>
              <BsDot />
              <h2 className="inter green ">Our Service</h2>
            </div>
            <p className="text-base text-center sm:text-left inter grey w-2/3 sm:w-full mx-auto mt-5">
              We help visionary executives transform their ventures with
              technology to thrive in the digital era With more than 20 years of
              experience.
            </p>
          </div>
          <div className="hidden h-full sm:block  ">
            <div className="relative w-full sm:h-[50vh] lg:h-[430px] ">
              <Image
                priority
                src="/servicePage/Frame.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </main>
      {/* services */}
      <main
        className={`max-w-screen-2xl h-full min-h-full lg:px-28  px-4  w-full pt-9 `}
      >
        <div className="flex justify-center md:justify-between items-center sm:px-2 lg:px-0 sm:gap-x-3 ">
          <h1 className=" green poppins text-xl md:text-3xl max-w-[412px]  font-semibold text-center md:text-left">
            We Provide The Best Quality Services
          </h1>
          <p className="hidden md:block sm:text-sm  grey inter text-lg sm:max-w-[410px]">
            We are technology solutions providing company all over the world
            doing over 20 years.
          </p>
        </div>
        <section className="grid my-5 gap-y-4 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 md:mt-7 lg:mt-12 lg:w-[90%] mx-auto">
          {services.map((card, key) => {
            return (
              <ServiceCard
                key={key}
                index={key}
                img={card.img}
                title={card.title}
                text={card.text}
              />
            );
          })}
        </section>
      </main>
      {/* promo */}
      <main className="bg-[#F6F6F6] py-7">
        <div className="text-center w-full flex flex-col gap-y-4 items-center">
          <h1 className="mx-3 text-xl lg:px-4  poppins green max-w-[520px] font-bold sm:text-2xl lg:text-4xl">
            Our Services Make Your Work Productive
          </h1>
          <p className=" max-w-[400px] mx-3 grey inter md:max-w-[630px]  text-sm lg:text-lg">
            We appreciate your trust. Our clients choose us and our products
            because they know we’re the best.
          </p>
        </div>
        <section className="grid grid-cols-2 items-center mx-2 md:mx-28 sm:mx-20 sm:gap-x-1 md:gap-2 gap-2 my-3 sm:grid-cols-4 ">
          {promo.map((card, key) => {
            return (
              <PromoCard
                img={card.img}
                title={card.title}
                text={card.text}
                key={key}
              />
            );
          })}
        </section>
      </main>
      {/* timeline */}
      {/* ////////// */}
      <main>
        <div className="w-[90%] md:w-fit mx-auto my-10">
          <h1 className="poppins green text-4xl font-bold text-center">
            Our Working Process
          </h1>
          <p className="text-[#646464] text-sm sm:text-base inter max-w-[740px] text-center  mt-3">
            Our clients turn to us to help them reimagine ways of working with
            technology. We are technology solutions providing company all over
            the world doing over 20 years.
          </p>
        </div>
        {/* timeline */}
        <section>
          <div className="hidden md:block relative w-[80%]  md:h-64 lg:h-80  max-h-[321px] mx-auto ">
            <Image
              src="/servicePage/timeline.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="grid gap-y-10 sm:gap-y-10  sm:grid-cols-2 md:hidden">
            {timeline.map((card, key) => {
              return (
                <TimelineCard
                  key={key}
                  img={card.img}
                  title={card.title}
                  text={card.text}
                />
              );
            })}
          </div>
        </section>
        {/* red box */}
        <section className="w-[80%] lg:w-[70%] mx-auto flex justify-between gap-x-4 items-center bg-[#FFEFE8] rounded-2xl my-4 px-5 md:px-12">
          <div className="hidden md:block relative md:w-72 md:h-72 lg:h-[413px] lg:w-[397px] max-w-[413px] max-h-[397px] ">
            <Image
              src="/servicePage/registerFrame.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="p-5 md:p-0">
            <h1 className="text-center md:text-left poppins green font-semibold text-xl md:text-xl lg:text-3xl max-w-[659px]">
              Ready to improve your online customer experience?
            </h1>
            <div className="mx-auto md:mx-0 flex justify-between mt-3 w-full max-w-[300px] md:w-full md:max-w-[310px] lg:max-w-[350px] rounded-full bg-white my-2">
              <input
                className="text-sm lg:text-base rounded-full pl-3 pr-2  w-[80%] md:w-full outline-none border-none focus:outline-none focus:border-none"
                placeholder="Enter your email"
              />
              <button className="orangebtn  text-white flex-1 basis-full max-w-[90px] md:w-max lg:max-w-[100px]  text-xs lg:text-sm  px-1 py-1.5 sm:px-2 md:py-2 rounded-full">
                Get a Quote
              </button>
            </div>
            <p className="grey text-xs text-center md:text-left">
              Got a Question?
              <Link href="/contact">
                <a className="text-orange-500 mx-1">Contact Us</a>
              </Link>
            </p>
          </div>
        </section>
        {/* hiring  */}
        <section className=" h-full min-h-full lg:px-28  px-4 pb-5  w-full pt-4 sm:mt-4  lg:w-full mx-auto grid items-center justify-center sm:gap-x-1 lg:gap-x-3 sm:grid-cols-2 sm:justify-between  sm:h-full">
          <div className="text-center sm:text-left w-[90%] sm:w-full mx-auto">
            <h1 className=" poppins font-bold text-2xl md:text-3xl lg:text-4xl max-w-[611px] green text-center sm:text-left">
              We Are Hiring The World’s Best professionals
            </h1>
            <p className="text-sm  lg:text-base text-center sm:text-left max-w-[520px] inter grey  sm:w-full  mt-5">
              We are technology solutions providing company all over the world
              doing over 20 years.
            </p>
            <p className="text-sm lg:text-base text-center sm:text-left max-w-[520px] inter grey  sm:w-full  mt-5">
              We believe in true partnerships with our clients. Become one of
              them. he world's best brands trust us with their products. Explore
              our selected cases and convince yourself of our pragmatic and
              user-centered approach.
            </p>
            <button className=" text-white text-sm lg:text-base orange max-w-[171px] max-h-[54px] rounded-full px-3 py-2 mt-4 my-3">
              Apply Now
            </button>
          </div>
          <div className="hidden h-full sm:block  ">
            <div className="relative w-full my-auto sm:h-80 lg:h-[430px] ">
              <Image
                priority
                src="/servicePage/hiring.png"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </main>
      {/* ////////// */}
      {/* promise */}
      <main className="bg-[#F6F6F6] py-7">
        <div className="text-center w-full flex flex-col gap-y-4 items-center">
          <h1 className="mx-3 text-xl lg:px-4  poppins green max-w-[520px] font-bold sm:text-2xl lg:text-4xl">
            Why We Are The Best In Providing Services
          </h1>
          <p className=" max-w-[400px] mx-3 grey inter md:max-w-[630px]  text-sm lg:text-lg">
            We appreciate your trust. Our clients choose us and our products
            because they know we’re the best.
          </p>
        </div>
        <section className="grid grid-cols-2 items-center mx-2 md:mx-28 sm:mx-20 sm:gap-x-1 md:gap-2 gap-2 my-3 sm:grid-cols-4 ">
          {achievement.map((card, key) => {
            return (
              <AchievementCard key={key} img={card.img} title={card.title} />
            );
          })}
        </section>
      </main>
      {/* refer a friend */}
      <main className=" h-full min-h-full lg:px-28  px-4 pb-5  w-full pt-4 sm:mt-4  lg:w-full mx-auto grid items-center justify-center sm:gap-x-1 lg:gap-x-3 sm:grid-cols-2 sm:justify-between  sm:h-full">
        <div className="text-center sm:text-left w-[90%] sm:w-full mx-auto">
          <h1 className=" poppins font-bold text-2xl md:text-4xl max-w-[611px] green text-center sm:text-left">
            Refer A Friend &#38; Get Some Exciting Bonus
          </h1>
          <p className="text-sm md:text-base text-center sm:text-left max-w-[520px] inter grey  sm:w-full  mt-5">
            We believe in true partnerships with our clients. Become one of
            them. he world's best brands trust us with their products. Explore
            our selected cases and convince yourself of our pragmatic and
            user-centered approach.
          </p>
          <button className=" text-white orange max-w-[171px] max-h-[54px] rounded-full px-3 py-2 mt-4 my-3">
            Refer a friend
          </button>
        </div>
        <div className="hidden h-full sm:block  ">
          <div className="relative w-full sm:h-[50vh] lg:h-[430px] ">
            <Image
              priority
              src="/servicePage/referal.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
}
