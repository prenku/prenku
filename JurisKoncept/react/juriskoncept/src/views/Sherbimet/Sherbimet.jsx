import Accordion from "../../components/Accordion";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Sherbimet() {
  return (
    <>
      <Header></Header>
      <section className="w-full bg-purple">
        <div className="text-white border-t-50 flex-col items-center rounded-tl-3xl rounded-tr-3xl border-solid border-gray-500 text-white">
          <div className="mb-10 flex min-h-[250px] items-center justify-center bg-purple py-16 text-center text-white">
            <h1 className="font-regular text-4xl text-[28px] text-white md:text-[60px]">
              Sherbimet
            </h1>
          </div>
        </div>
      </section>
      <Accordion></Accordion>
      <Footer></Footer>
    </>
  );
}
