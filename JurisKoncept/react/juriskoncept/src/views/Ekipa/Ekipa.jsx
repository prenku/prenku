import Footer from "../../components/Footer";
import Header from "../../components/Header";
import profile from "../../images/profile.jpg";
import { sherbimet } from "../../assets/data";
export default function Ekipa() {
  return (
    <>
      <Header></Header>
      <section>
        <div
          className="w-100 h-100 min-h-screen"
          style={{
            background:
              "linear-gradient(to right, #c1913f 0%, #c1913f 20%, #741b47 20%, #741b47 100%)",
          }}
        >
          <div className="gird-cols-1 grid gap-8 px-4 py-20 md:grid-cols-9 md:px-20">
            <aside
              className="col-start-1 col-end-1 md:col-start-1 md:col-end-2"
              style={{ borderRadius: "3rem" }}
            >
              <div className="sticky top-10 bottom-[-200px] widget js-sticky-widget">
                <div data-aos="fade-up" data-aos-delay="400">
                  <div className="md:w-[450px] ">
                    {" "}
                    {/* Adjust the width here */}
                    <div
                      className="relative rounded-lg bg-white shadow-md"
                      style={{
                        borderRadius: "3rem",
                        maxHeight: "calc(100vh - 100px)",
                        overflowY: "auto",
                      }}
                    >
                      <img
                        style={{ borderRadius: "3rem" }}
                        src={profile}
                        alt="image"
                        className="h-[300px] w-full rounded-t-xl object-cover md:h-[575px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="container w-full px-8 md:col-start-4 md:col-end-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
                <div className="md:col-span-1">
                  {/* <img
                    src={profile}
                    alt="Lawyer"
                    className="rounded-full w-32 h-32 mx-auto mb-4"
                  /> */}
                </div>
                <div className="text-white md:col-span-2">
                  <p className="text-[48px] font-semibold">Kushtrim Prenku</p>
                  <p className="text-white/50">
                    Kushtrim Prenku is a lawyer at Juris Concept he advises,
                    litigates and teaches in particular on civil law aspects of
                    real estate. Specialized in apartment law, commercial
                    property rental law and healthcare real estate. It is
                    typical of Kushtrim that he works with calmness and clarity,
                    with a goal-oriented approach. In addition to his legal
                    expertise, Kushtrim distinguishes himself through his
                    knowledge and experience in the field of legal engineering.
                    Examples of this include creating broadly applicable model
                    contracts, practical guidelines and databases on behalf of
                    trade organizations, housing associations and government
                    institutions. He effectively uses automation and AI to
                    increase the efficiency and accessibility of these
                    solutions.
                  </p>
                  Kushtrim joined the practice in 2013 after graduating in the
                  top 10 of her law school className. He represents clients in
                  transactions and litigation involving real estate, business,
                  estate planning, and employment law. With expertise in real
                  estate and landlord tenant law, Kushtrim drafts leases,
                  easements, purchase and sale agreements, land sale contracts
                  involving seller financing, promissory notes, deeds of trust,
                  and other transactional documents. He is seasoned in
                  mediation, arbitration, and trials relating to boundary
                  disputes, ejectment claims, fraud and breach of contract
                  allegations stemming from property sales, and other real
                  estate issues. Kushtrim further educates homeowners and
                  property management companies on rapidly changing landlord
                  tenant laws, drafts rental policies and agreements, and
                  represents landlords in disputes including eviction trials,
                  property damage suits, and actions brought by the Oregon
                  Bureau of Labor and Industries and the U.S. Department of
                  Housing and Urban Development. Kushtrim assists business
                  owners in forming the corporate entity which best meets their
                  individual needs. He counsels her clients on how to maintain
                  all necessary corporate formalities, such as keeping accurate
                  corporate minutes, and drafts substantive business contracts
                  such as construction contracts. Kushtrim also drafts and
                  reviews business asset or stock sale transactional documents.
                  He has extensive motion practice and civil litigation
                  experience in breach of contract and other business disputes.
                  Kushtrim also advises clients on estate planning issues such
                  as how to provide for minor children. He drafts wills and
                  trusts to meet her clients’ estate planning goals.
                  Additionally, Kushtrim defends employers against wage and
                  hour, discrimination, and other employee claims. He provides
                  classNamees on best employer practices and drafts employee
                  handbooks, rules and regulations. Kushtrim became interested
                  in employment law, in part, while clerking at Kohn, Kohn &
                  Colapinto, LLP. The Washington, D.C. firm specializes in
                  whistleblower law. He became familiar with whistleblower
                  provisions in the 50 states and assisted in bringing a qui tam
                  action on behalf of the federal government.
                  <p className="mt-4 text-lg font-semibold text-white">
                    Contact Information
                  </p>
                  <ul className="list-disc pl-4">
                    <li>Email: lawyer@email.com</li>
                    <li>Phone: (555) 123-4567</li>
                    <li>Office: 123 Main St, Cityville</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-white">
                <p className="text-lg font-semibold">Practice Areas</p>
                <ul className="list-disc pl-4">
                  <li>Criminal Defense</li>
                  <li>Family Law</li>
                  <li>Personal Injury</li>
                </ul>
              </div>
            </div>
            <div className="grid-cold-1 grid w-full  gap-4 px-4 text-white md:col-start-8 md:col-end-10 md:grid-cols-1">
              <div>
                <ul className="list-disc space-y-2 text-[22px]">
                  {sherbimet.services.map((item) => (
                    <li
                      key={item.id}
                      data-aos="slide-up"
                      data-duration="100"
                      className="flex w-full bg-darkBlue hover:bg-brand"
                    >
                      <a
                        href="sherbimet"
                        className="flex h-[90px] w-full items-center justify-center"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
