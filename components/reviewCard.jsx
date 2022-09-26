export default function ReviewCard(props) {
  return (
    <div className="relative px-5 py-3 mt-3 max-w-[364px]">
      <img
        src="/reviewCard/quote.png"
        alt="quotation"
        className="absolute -top-5 right-4 -z-10 w-[74px] h-[56px]"
      />

      {props.bgBlob ? (
        <img
          src="/reviewCard/blob.png"
          alt="blob"
          className="absolute top-0 left-0 h-full w-full -z-20"
        />
      ) : null}
      <p className="z-50 text-[#6C6C6C] pb-3">{props.text}</p>
      <div className="flex ">
        <img
          src={props.img}
          alt="user image"
          className="rounded-full w-[60px] h-[60px]"
        />
        <div>
          <h1 className="text-[#053746]">{props.name}</h1>
          <p className="text-[#6C6C6C]">Director of Solit Team</p>
        </div>
      </div>
    </div>
  );
}
