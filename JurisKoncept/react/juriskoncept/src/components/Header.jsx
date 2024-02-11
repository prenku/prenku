import { useEffect, useState } from "react";
import { menuLinks } from "../assets/data";
import logoTop from "../images/top-logo.svg";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (menuOpen) {
        const mobileMenu = document.getElementById("mobile-menu");
        if (!mobileMenu.contains(event.target)) {
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };
  return (
    <header className="top-0 z-30 w-full border-b-4 border-b-brand bg-white text-darkBlue md:relative md:flex md:transform md:items-center md:justify-between md:transition-all md:duration-200">
      <div className="hidden md:flex md:w-full md:justify-between">
        <div className="md:flex md:items-center">
          <a
            data-aos="slide-right"
            data-aos-delay="300"
            className="md:block"
            href="/"
          >
            <img src={logoTop} />
          </a>
        </div>

        <div className="bottom-2 flex flex-col items-end justify-between">
          <div
            data-aos="slide-down"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            data-aos-delay="100"
            className="h-54 mb-2 hidden rounded-bl-2xl bg-lightPink px-4 py-2 md:block"
          >
            <a
              className="w-full rounded-bl-lg bg-lightPink pl-4 pr-24 text-2xl text-darkBlue md:block"
              href="tel:+38349311500"
            >
              Konsultohuni
              <strong style={{ fontSize: "34px" }}> +383 49 311 500 </strong>
            </a>
          </div>
          <div className="px-4 py-4">
            <nav
              className="z-40 mt-[20px] items-end pr-1 align-bottom"
              data-aos="slide-left"
              data-aos-delay="200"
            >
              <button className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <ul className="fixed left-0 top-[-1] flex hidden translate-x-full transform flex-col items-center justify-start gap-2 space-y-1 bg-white px-4 pt-12 text-[24px] text-darkBlue transition duration-300 md:relative md:flex md:min-h-0 md:translate-x-0 md:flex-row md:items-center md:space-x-10 md:space-y-0 md:px-0 md:py-0">
                {menuLinks.map((link) => (
                  <li key={link.id} className="">
                    <a
                      key={link.id}
                      href={link.id} // Assuming your href value is the same as the id
                      className="w-full py-6 text-center hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#">
            <img src={logoTop} className="md:hidden" alt="" />
          </a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className="relative h-8 w-8 cursor-pointer text-3xl text-brand md:hidden"
            onClick={toggleMenu}
          >
            <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-brand transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-brand before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-brand after:transition-all after:duration-500 after:content-['']"></div>
          </button>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`top-68 absolute z-40 w-full origin-top animate-open-menu flex-col justify-center bg-darkBlue text-5xl ${
          menuOpen ? "" : "hidden"
        }`}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8 text-white"
          aria-label="mobile"
        >
          {menuLinks.map((link) => (
            <a
              key={link.id}
              href={link.id} // Assuming your href value is the same as the id
              className="w-full py-6 text-center hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </section>
    </header>
  ); // Display count value
}
