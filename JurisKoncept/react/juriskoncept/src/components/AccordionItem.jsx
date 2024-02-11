import PropTypes from "prop-types";
export default function AccordionItem(props) {
  console.log(props.title);
  return (
    <section className="mt-[-60px] w-full">
      <div className="top[-120px] border-t-50 relative z-20 flex flex-col items-start justify-between rounded-tl-3xl rounded-tr-3xl border-solid border-gray-500 bg-white text-white md:flex-row">
        <div className="grid-cold-1 grid w-full items-start gap-4 py-16 px-4 md:grid-cols-2 md:px-40">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center min-h-scre">
              <div
                onClick={props.toggleAccordion}
                className="w-full max-w-lg px-10 py-8 mx-auto bg-darkBlue rounded-lg shadow-xl"
              >
                <div className="max-w-md mx-auto space-y-6">
                  <div className="flex items-center w-full overflow-hidden mt-32 md:mt-0 mb-5 mx-auto">
                    <div
                      onClick={props.toggleAccordion}
                      className="w-10 border-r px-2 transform transition duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center px-2 py-3">
                      <div className="mx-3">
                        <button className="flex w-full items-center justify-center text-[24px] hover:underline">
                          {props.title}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-5 md:p-0 w-full transform transition duration-300 ease-in- pb-10">
                    <p className="px-8 text-[18px] text-white/60">
                      {props.isOpen && (
                        <div className="p-2">{props.content}</div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center min-h-scre">
              <div
                onClick={props.toggleAccordion}
                className="w-full max-w-lg px-10 py-8 mx-auto bg-darkBlue rounded-lg shadow-xl"
              >
                <div className="max-w-md mx-auto space-y-6">
                  <div className="flex items-center w-full overflow-hidden mt-32 md:mt-0 mb-5 mx-auto">
                    <div
                      onClick={props.toggleAccordion}
                      className="w-10 border-r px-2 transform transition duration-300 ease-in-out"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center px-2 py-3">
                      <div className="mx-3">
                        <button className="flex w-full items-center justify-center text-[24px] hover:underline">
                          {props.title}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex p-5 md:p-0 w-full transform transition duration-300 ease-in- pb-10">
                    <p className="px-8 text-[18px] text-white/60">
                      {props.isOpen && (
                        <div className="p-2">{props.content}</div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
AccordionItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  isOpen: PropTypes.bool,
  toggleAccordion: PropTypes.func,
};
