const ACard = (props) => {
  return (
    <div className="relative flex gap-x-2 w-fit mx-auto items-center justify-between py-6 my-6">
      <img
        alt="blob"
        src="/achievement/blob.png"
        className="absolute top-0 left-0 w-full h-full -z-10 scale-110 md:scale-100"
      />
      <div>
        <img src={props.img} className="w-[45px] h-[45px]" />
      </div>
      <div>
        <h1 className="text-[#053746] font-semibold text-5xl">
          {props.number}
        </h1>
        <p className="text-base">{props.text}</p>
      </div>
    </div>
  );
};
export default ACard;
