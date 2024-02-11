import { menuLinks } from "../assets/data";
export default function Footer() {
  return (
    <>
      <section className="mt-[-20px] w-full">
        <div className="top[-20px] text-white border-t-50 relative z-20 flex flex-col items-start justify-between rounded-tl-3xl rounded-tr-3xl border-solid border-gray-500 bg-darkBlue px-16 py-9 pt-[135px] text-white md:flex-row">
          <div className="order-2 flex-1 px-4 py-2 md:order-1">
            <h1 className="text-[40px] font-bold leading-[48px]">Office</h1>
            <p className="flex flex-col leading-[32px]">
              <span className="text-[28px] font-bold text-brand">
                Juris Concept
              </span>
              <span className="text-white/50">
                Rruga Garibaldi Hyrja 51 K-II /5 10000 Prishtine
              </span>
            </p>
            <div className="mt-4 flex flex-col">
              <h4 className="pt-3 font-bold text-[18px]">Orari Punes</h4>
              <span className="text-white/50">
                E Hene - E Premte 8:30AM - 4:00PM
              </span>
            </div>
          </div>
          <div className="order-3 flex-1 px-4 py-2">
            <h1 className="text-[40px] font-bold leading-[48px]">Phone</h1>
            <p className="text-[18px] py-4 leading-[32px]">
              <a
                href="tel:+38349311500
"
                className="text-[28px] font-bold text-brand"
              >
                + 383 49 311 500
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between bg-darkBlue px-16 py-9 text-center md:flex-row">
          <h5 className="mt-6 text-white">© 2024 Juris Concept</h5>
          <ul className="hidden flex-col items-start justify-start gap-10 space-x-1 bg-darkBlue text-center text-[24px] text-gray-50 md:flex md:flex-row md:items-end md:justify-end">
            {menuLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.id}
                  className="flex justify-center rounded-full py-2 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <a
        className="flex justify-center bg-brand text-center text-darkBlue"
        href="http://naxiadesign.com"
      >
        Website Design By NAXIA Design
      </a>
    </>
  );
}
