import hero from "../images/hero-img.jpg";
import heroBgImage from "../images/hero.jpg";
export default function Hero() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${heroBgImage})` }}
        className="bg-hero-svg animate slide delay-15 relative z-10 px-8 pb-16"
      >
        <div className="top-32 mx-auto flex max-w-7xl flex-col items-center justify-center md:h-[700px] md:flex-row">
          <div
            className="flex-1 items-center justify-center md:mr-6"
            data-aos="fade-right"
            data-aos-easing="ease-in"
            data-aos-delay="300"
          >
            <h1 className="reveal-type mt-10 text-[40px] font-bold leading-tight text-white md:text-[60px]">
              Mbrojtja e interesave tuaja ligjore
            </h1>
            <p className="my-4 text-lg text-white/80">
              “Juris Concept” Law Firm, është ekip profesionale dhe e
              përkushtuar të ofrojë ndihmë të plotë për të gjitha kërkesat
              ligjore. Në secilën sfidë tuajen, ne shohim dhe kuptojmë qartë
              aspektin e çështjeve ligjore dhe jemi për të bërë përfaqësimin në
              mënyrë të dinjitetshme dhe profesionale. Avokatët dhe
              bashkëpunëtorët e zyres sonë ligjore, janë me integritet,
              kredibilitet, guxim e profesionalizëm që është dëshmuar në kohë!
            </p>
            <button
              onClick="callNumber(+38349311500)"
              className="rounded-2xl bg-purple p-3 text-[26px] font-semibold text-white md:p-6 md:text-3xl"
            >
              Telefono tani
            </button>
            <p className="py-3 text-white/70 md:text-[18px]">
              Thirrni per tu konsultuar
            </p>
          </div>
          <div className="flex-1">
            <img src={hero} alt="Best House Cleaning in Boston" />
          </div>
        </div>
      </section>
    </>
  );
}
