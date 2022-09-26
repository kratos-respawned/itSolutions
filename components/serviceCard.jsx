export default function ServiceCard(props) {
  return (
    <div
      className={` relative max-w-[280px] my-4 lg:h-[300px] max-h-[373px] mx-auto flex flex-col p-5 lg:p-3  ${
        props.bg ? " bg-orange-500 text-white " : " bg-white "
      } md:mx-2 rounded-lg ${props.shifted ? " md:translate-y-7 " : " "}`}
    >
      <img className="w-20 md:w-12 pb-6" src={props.img} />
      <div className="mb-10">
        <h1 className="py-4 font-bold  text-xl md:text-lg">{props.heading}</h1>
        <h2 className="text-sm md:text-xs font-normal">{props.text}</h2>
      </div>
      <hr
        className={`absolute border-t ${
          props.bg ? "border-white " : " border-black "
        } bottom-4 w-[115px] `}
      />
    </div>
  );
}
