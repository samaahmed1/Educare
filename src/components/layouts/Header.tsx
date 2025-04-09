export default function Header() {
  return (
    <>
      <header className="py-5 sticky top-0 bg-[#F9E0AE]">
        <div className="container mx-auto px-5 flex justify-center md:justify-between items-center flex-wrap gap-2">
          <div className="logo">
            <a href="#">
              {" "}
              <img className="w-28 mt-1" src="/images/logo.webp" alt="logo" />
            </a>
          </div>
          <nav className="flex items-center gap-5 font-bold flex-wrap justify-center">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
            <button className="text-white bg-[#C24914] px-3 py-1 rounded-md cursor-pointer">Contact us</button>
          </nav>
        </div>
      </header>
    </>
  );
}
