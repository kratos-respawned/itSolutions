import Image from "next/image";
export default function TimelineCard(props) {
  return (
    <div className="bg-white shadow-sm w-fit mx-auto">
      <div className="mx-auto relative w-14 h-14 max-w-[60px] max-h-[60px]">
        <Image src={props.img} layout="fill" objectFit="contain" />
      </div>
      <h1 className="green text-center poppins font-bold text-lg">
        {props.title}
      </h1>
      <p className="mx-auto grey inter text-base text-center max-w-[220px]">
        {props.text}
      </p>
    </div>
  );
}
