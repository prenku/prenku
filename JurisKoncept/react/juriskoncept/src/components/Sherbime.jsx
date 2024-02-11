import sherbime from "../images/sherbimet.jpg";
export default function Sherbime() {
  return (
    <>
      <section className="mt-[-20px] w-full">
        <div className="md:gird-flow-row border-t-50 relative z-20 grid min-h-[800px] grid-flow-col grid-cols-1 items-center rounded-tl-3xl rounded-tr-3xl border-solid border-gray-500 bg-darkBlue px-4 py-9 text-white md:grid-cols-3 md:px-16">
          <div className="col-start-1 col-end-2 hidden px-4 py-2 md:col-end-2 md:block">
            <h1 className="mb-10 text-[40px] font-bold leading-[48px] md:text-[48px]">
              Shërbime ligjore të veçuara
            </h1>
            <img
              className="rounded-3xl"
              src={sherbime}
              alt="Sherbime te vequara"
            />
          </div>

          <div className="col-start-2 col-end-4 px-4 py-2 md:col-end-4">
            <ul className="mb-12 flex flex-row items-end justify-end gap-10 space-x-1 rounded-lg p-1 text-center">
              <li>
                <a
                  href="#page1"
                  className="flex justify-center rounded-full py-2 text-brand hover:text-brand"
                >
                  Kontesti Civil
                </a>
              </li>
              <li>
                <a
                  href="#page1"
                  className="flex justify-center rounded-full py-2 text-white hover:text-brand"
                >
                  E Drejta Penale
                </a>
              </li>
              <li>
                <a
                  href="#page1"
                  className="flex justify-center rounded-full py-2 text-white hover:text-brand"
                >
                  E Drejta Familjare
                </a>
              </li>
              <li>
                <a
                  href="#page1"
                  className="flex justify-center rounded-full py-2 text-white hover:text-brand"
                >
                  E Drejta Tregtare
                </a>
              </li>
            </ul>
            <h1 className="pb-4 text-[40px] font-bold leading-8 text-brand">
              Kontesti Civil
            </h1>
            <p className="mb-5 text-[18px] leading-8 text-white/50">
              Kur lindin mosmarrëveshje ligjore, është e rëndësishme që të keni
              një ekip me përvojë gjyqësore civile në anën tuaj. Në firmën
              ligjore Juris Concept, ne jemi të përkushtuar të mbrojmë të
              drejtat dhe interesat tuaja në një sërë çështjesh gjyqësore
              civile, duke përfshirë mosmarrëveshjet e kontratave, çështjet
              gjyqësore të biznesit, pretendimet për dëmtime personale dhe shumë
              më tepër. Avokatët tanë kanë një histori të provuar suksesi dhe do
              të luftojnë pa u lodhur për të siguruar rezultatin më të mirë të
              mundshëm për çështjen tuaj.
            </p>
            <ul className="mb-12 grid list-inside list-disc grid-flow-row rounded-lg p-1 font-bold text-brand">
              <li>
                <a
                  href="#page1"
                  className="py-2 font-bold text-white hover:text-brand"
                >
                  E Drejta e Pronësisë Intelektuale
                </a>
              </li>
              <li>
                <a
                  href="#page1"
                  className="py-2 font-bold text-white hover:text-brand"
                >
                  E Drejta Administrative
                </a>
              </li>
              <li>
                <a
                  href="#page1"
                  className="py-2 font-bold text-white hover:text-brand"
                >
                  Prokurimi publik
                </a>
              </li>
            </ul>
            <a href="sherbimet.html">
              Të gjitha Shërbimet e
              <span href="sherbimet.html" className="font-bold px-4 text-brand">
                Juris Concept
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
