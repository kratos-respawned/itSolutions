import Image from "next/image";
export default function ServiceCard(props) {
  return (
    <div
      className={` rounded-md shadow-xl max-w-[350px] mx-auto  p-7 ${
        props.index ? " bg-white text-black " : " orange text-white  "
      }  relative`}
    >
      <div className="relative w-24 h-28">
        <Image
          src={props.img}
          priority
          layout="fill"
          objectFit="contain"
          className=""
        />
      </div>
      <h1 className="mt-5 font-bold md:text-xl lg:text-2xl text-2xl  poppins ">
        {props.title}
      </h1>
      <p
        className={`inter mt-2 mb-4 md:text-xs lg:text-sm ${
          props.index ? " grey " : " white "
        }`}
      >
        {props.text}
      </p>
      <hr
        className={` absolute w-[115px] border-t bottom-7 ${
          props.index ? " border-t-black " : " border-t-white "
        }`}
      />
    </div>
  );
}
