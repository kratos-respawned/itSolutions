import Image from "next/image";
export default function AchievementCard({ img, title }) {
  return (
    <div className="mx-auto w-fit p-5 flex flex-col items-center">
      <div className="relative  w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] ">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
      <h1 className="text-center font-semibold text-sm md:text-base  poppins green my-2">
        {title}
      </h1>
    </div>
  );
}
