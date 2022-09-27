import Image from "next/image";
export default function PromoCard({ img, title, text }) {
  return (
    <div className="mx-auto w-fit p-5 flex flex-col items-center">
      <div className="relative  w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] ">
        <Image src={img} layout="fill" objectFit="contain" />
      </div>
      <h1 className="text-center font-semibold text-sm md:text-base lg:text-xl poppins green my-2">
        {title}
      </h1>
      <p className="text-xs text-center inter grey max-w-xs ">{text}</p>
    </div>
  );
}
