import logo from '@/assets/logo-highlight.svg';
export default function HighLight() {
  return (
    <section className="bg-greeHighlight h-[473px] flex flex-col place-items-center gap-1 pt-14 pb-28 shadow-2xl">
      <img src={logo} alt="logo highlight" className="h-20 sm:h-28" />
      <div className="flex flex-col place-items-center max-w-lg gap-2">
        <h1 className="text-5xl md:text-7xl text-logoText font-manrope font-extralight tracking-tight">
          Moda Muse
        </h1>
        <p className="text-center text-greyText">
          At Moda Muse, style meets convenience.
          <br />
          Explore curated collections, find your inspiration,
          <br />
          and elevate your wardrobe with a seamless shopping experience!
        </p>
      </div>
    </section>
  );
}
