import blogSample from "../images/blog-sample.jpg";
import blogSample1 from "../images/blog-sample-1.jpg";
import blogSample2 from "../images/blog-sample-2.jpg";
import blogSample3 from "../images/blog-sample-3.jpg";
export default function LajmeBallina() {
  return (
    <>
      <section className="top[-20px] border-t-50 relative z-20 mt-[-20px] mb-10 w-full rounded-tl-3xl rounded-tr-3xl border-solid border-gray-500 bg-white px-8 py-4 md:px-16 md:py-20">
        <div className="my-9 flex flex-row items-center justify-between md:flex-row">
          <h1 className="mb-2 text-[40px] font-bold text-darkBlue">Lajme</h1>
          <a
            href="lajme.html"
            className="get-started bg-yellowgood self-center rounded-xl bg-brand p-2 font-semibold text-white"
          >
            Shiko te gjitha lajmet
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div className="col-start-1 col-end-3 md:col-end-2">
            <div className="entry mb-4 overflow-hidden rounded-lg border border-solid border-black">
              <div className="entry__meta">
                <img
                  src={blogSample}
                  alt="image"
                  className="w-full rounded-t-lg object-cover md:h-[80%]"
                />
                <div className="p-4 md:h-[150px]">
                  <button className="rounded-md bg-brand px-2 py-1 text-sm text-white">
                    10 nentor 2023
                  </button>

                  <p className="my-2 text-black">
                    Betohen 52 avokatë të rinjë dhe 48 praktikantë para
                    kryetarit të Odës, z. Behar Ejupi
                  </p>
                  <p className="my-2 text-black">
                    Betohen 52 avokatë të rinjë dhe 48 praktikantë para
                    kryetarit të Odës, z. Behar Ejupi
                  </p>
                  <p className="my-2 text-black">
                    Betohen 52 avokatë të rinjë dhe 48 praktikantë para
                    kryetarit të Odës, z. Behar Ejupi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-1 col-end-3 grid gap-4 bg-white md:col-start-2">
            <div className="mb-10 grid max-h-[218px] grid-cols-1 md:mb-0 md:grid-cols-4">
              <div className="col-start-1 col-end-3 flex flex-col md:col-end-2">
                <img
                  src={blogSample1}
                  alt="image"
                  className="h-[142px] w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="col-start-1 col-end-5 flex flex-col border border-solid border-black md:col-start-2">
                <div className="flex-grow">
                  <div className="p-4">
                    <button className="rounded-md bg-brand px-4 py-1 text-[14px] text-white">
                      10 nentor 2023
                    </button>
                    <p className="mb-4 text-black">
                      Betohen 52 avokatë të rinjë dhe të Odës, z. Behar Ejupi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-10 grid max-h-[218px] grid-cols-1 md:mb-0 md:grid-cols-4">
              <div className="col-start-1 col-end-3 flex flex-col md:col-end-2">
                <img
                  src={blogSample1}
                  alt="image"
                  className="h-[142px] w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="col-start-1 col-end-5 flex flex-col border border-solid border-black md:col-start-2">
                <div className="flex-grow">
                  <div className="p-4">
                    <button className="rounded-md bg-brand px-4 py-1 text-[14px] text-white">
                      10 nentor 2023
                    </button>
                    <p className="mb-4 text-black">
                      Betohen 52 avokatë të rinjë dhe të Odës, z. Behar Ejupi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 grid max-h-[218px] grid-cols-1 md:mb-0 md:grid-cols-4">
              <div className="col-start-1 col-end-3 flex flex-col md:col-end-2">
                <img
                  src={blogSample2}
                  alt="image"
                  className="h-[142px] w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="col-start-1 col-end-5 flex flex-col border border-solid border-black md:col-start-2">
                <div className="flex-grow">
                  <div className="p-4">
                    <button className="rounded-md bg-brand px-4 py-1 text-[14px] text-white">
                      10 nentor 2023
                    </button>
                    <p className="mb-4 text-black">
                      Betohen 52 avokatë të rinjë dhe të Odës, z. Behar Ejupi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-10 grid max-h-[218px] grid-cols-1 md:mb-0 md:grid-cols-4">
              <div className="col-start-1 col-end-3 flex flex-col md:col-end-2">
                <img
                  src={blogSample3}
                  alt="image"
                  className="h-[142px] w-full rounded-t-lg object-cover"
                />
              </div>
              <div className="col-start-1 col-end-5 flex flex-col border border-solid border-black md:col-start-2">
                <div className="flex-grow">
                  <div className="p-4">
                    <button className="rounded-md bg-brand px-4 py-1 text-[14px] text-white">
                      10 nentor 2023
                    </button>
                    <p className="mb-4 text-black">
                      Betohen 52 avokatë të rinjë dhe të Odës, z. Behar Ejupi
                    </p>
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
