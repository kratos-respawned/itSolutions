export default function About() {
  return (
    <main className="max-w-screen-2xl pt-2  lg:px-20 px-4 w-full ">
      <div className="w-4/5 px-5  mx-auto flex flex-col sm:flex-row items-center gap-x-8">
        <div className="hidden flex-1 sm:block">
          <img alt="section image" src="/Frame.png" />
        </div>
        <div className="flex-1">
          <h1 className="relative font-bold z-20 text-2xl md:text-3xl pb-2 text-[#053746]">
            We Are All In One IT Solution & Technology Company
            <img
              alt="floater"
              src="/section2img.png"
              className="w-10 opacity-25 z-0 absolute top-2 right-0 sm:hidden"
            />
          </h1>
          <h2 className="font-normal text-xs py-3 text-[#6C6C6C] ">
            We are technology solutions providing company all over the world
            doing over 20 years.
          </h2>
          <h2 className="font-normal text-xs pb-5 text-[#6C6C6C]">
            We believe in true partnerships with our clients. Become one of
            them. The world&#39;s best brands trust us with their products.
            Explore our selected cases and convince yourself of our pragmatic
            and user-centered approach.
          </h2>
          <button className="bg-orange-500 rounded-full text-white px-2 py-1">
            Read More
          </button>
        </div>
      </div>
    </main>
  );
}
