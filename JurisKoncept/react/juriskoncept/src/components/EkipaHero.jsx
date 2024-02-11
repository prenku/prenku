import profile from "../images/profile.jpg";
export default function EkipaHero() {
  return (
    <>
      <section className="mt-[-20px] bg-black min-h-max w-full">
        <div className="top[-20px] brand border-t-50 relative z-20 flex items-center rounded-tl-3xl rounded-tr-3xl border-solid border-gray-500 bg-black px-8 py-9 text-white md:px-16 md:py-16">
          <div className="w-full min-h-max">
            <h1 className="text-start w-full py-4 text-[40px] font-bold">
              Ekipa
            </h1>
            <h3 className="text-start mb-10 w-full text-white/50">
              Treshja me e persosur ne Prishtinë
            </h3>

            <div className="flex bg-black h-full flex-col justify-between gap-8 md:flex-row">
              <div className="w-full bg-black md:w-1/3">
                <div className="rounded-lg bg-black shadow-md">
                  <img
                    src={profile}
                    alt="image"
                    className="h-[300px] w-full rounded-t-lg object-cover md:h-[475px]"
                  />
                  <div className="mt-4 bg-black">
                    <h2 className="mb-2 text-2xl font-bold">Kushtrim Prenku</h2>
                    <p className="mb-4 font-bold text-white/50">
                      Avokat i sapo licencuar i përkushtuar ndaj ofrimit të
                      ekselencës ligjore: i apasionuar pas avokimit për të
                      drejtat e klientëve dhe ofrimit të zgjidhjeve strategjike
                      ligjore. I përkushtuar ndaj profesionalizmit, integritetit
                      dhe arritjes së drejtësisë.
                    </p>
                    <button className="rounded-md bg-purple px-4 py-2 text-[26px] font-bold text-white md:text-[34px]">
                      Shiko Profilin
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full min-h-max md:w-1/3">
                <div className="rounded-lg bg-black shadow-md">
                  <img
                    src={profile}
                    alt="image"
                    className="h-[300px] w-full rounded-t-lg object-cover md:h-[475px]"
                  />
                  <div className="mt-4">
                    <h2 className="mb-2 text-2xl font-bold">Bledar Gashi</h2>
                    <p className="mb-4 font-bold text-white/50">
                      Avokat i sapo licencuar i përkushtuar ndaj ofrimit të
                      ekselencës ligjore: i apasionuar pas avokimit për të
                      drejtat e klientëve dhe ofrimit të zgjidhjeve strategjike
                      ligjore. I përkushtuar ndaj profesionalizmit, integritetit
                      dhe arritjes së drejtësisë.
                    </p>
                    <button className="rounded-md bg-purple px-4 py-2 text-[26px] font-bold text-white md:text-[34px]">
                      Shiko Profilin
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full min-h-max md:w-1/3">
                <div className="rounded-lg bg-black shadow-md">
                  <img
                    src={profile}
                    alt="image"
                    className="h-[300px] w-full rounded-t-lg object-cover md:h-[475px]"
                  />
                  <div className="mt-4">
                    <h2 className="mb-2 text-2xl font-bold">Adnan Thaqi</h2>
                    <p className="mb-6 font-bold text-white/50">
                      Avokat i sapo licencuar i përkushtuar ndaj ofrimit të
                      ekselencës ligjore: i apasionuar pas avokimit për të
                      drejtat e klientëve dhe ofrimit të zgjidhjeve strategjike
                      ligjore. I përkushtuar ndaj profesionalizmit, integritetit
                      dhe arritjes së drejtësisë.
                    </p>
                    <button className="rounded-md bg-purple px-4 py-2 text-[26px] font-bold text-white md:text-[34px]">
                      Shiko Profilin
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
