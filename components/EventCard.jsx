export default function EventCard() {
  return (
    <section className="border border-orange-500 rounded-lg ">
      <div className="flex flex-row items-center justify-between p-4">
        <div>
          <h1 className="text-base font-normal">- Sept 22 </h1>
          <h1 className="font-semibold text-lg">Word Cyber Security Summit</h1>
          <h1 className="text-orange-500 font-bold ">- Free</h1>
        </div>
        <img className="w-28" src="/events/security.png" />
      </div>
      <div className="bg-[#FEDFCC] border-t border-b border-orange-500 p-4">
        <div className="flex flex-row items-center justify-between">
          <h1 className="max-w-[170px] font-semibold text-sm">
            World Cyber Security Summit
          </h1>
          <h1 className="font-semibold text-xl text-orange-500">Mumbai</h1>
        </div>
        <div className="flex flex-row bg-white rounded-full px-4 py-2 w-fit mx-auto gap-x-2">
          <img alt="calendar" src="/events/calendar.png" />
          <h1 className="text-sm font-medium">Begins in 7 Days</h1>
        </div>
      </div>
      <div className="grid place-items-center">
        <button className="mx-auto my-3 bg-orange-500 px-4 py-1 text-white rounded-full ">
          Free Register Now
        </button>
      </div>
    </section>
  );
}
