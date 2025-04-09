export default function Hero() {
  return (
    <>
      <section className="py-14">
        <div className="container mx-auto px-5 flex justify-center md:justify-between items-center flex-wrap gap-7">
          <div className="info">
            <h1 className="font-bold text-3xl md:text-5xl">Start learning <br /> with us now</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Ipsa laboriosam voluptates sed beatae?</p>
            <button className="text-white bg-[#682C0E] px-5 py-1 rounded-md cursor-pointer font-bold">Start learning</button>
          </div>
          <div className="image">
            <img src="/images/hero.webp" alt="hero" />
          </div>
        </div>
      </section>
    </>
  );
}
