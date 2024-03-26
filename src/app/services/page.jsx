import Link from "next/link";
import "./service.css";
import Image from "next/image"

export const metadata = {
    title: "Service | Process Source",
    description: "Process Source Service Page",
  };

const Services = () => {
    return (
        <div>
            <div className="background min-h-screen text-white">
                <h1 className="text-center font-extrabold text-4xl pt-24 lg:pt-40 lg:text-6xl">Services</h1>
                <p className="text-sm pt-4 lg:text-2xl text-center px-12 md:w-3/4 xl:w-1/2  2xl:w-1/3 mx-auto">Leverage intelligent BPO solutions and boost customer experience while reducing operational costs.</p>
                <div className="flex flex-col max-w-screen-lg mx-auto lg:flex-row justify-center items-center text-center pt-28 pb-12 px-12 gap-8 lg:gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ_Contact-Centre-icon.png" width={100} height={100} alt="alt" />
                        <p>Your relationship with end-customers sustains your business, which is why we provide customer contact solutions. Our services cover customer acquisition to customer service and retention.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ_BackOffice_icon.png" width={100} height={100} alt="alt" />
                        <p>Apart from client-facing functions, we help you run the show behind the scenes. Our back office functions cover everything from data cleansing, data entry, finance & accounting, HR admin, payroll, design & development.</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ_Automation_icon.png" width={90} height={90} alt="alt" />
                        <p>Our end-to-end automation solutions drive efficiencies and help you stay competitive. Our services include Robotic Process Automation (RPA), chatbots, voice biometrics, speech analytics.</p>
                    </div>
                </div>
            </div>
            <div className="background1 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4 xl:w-1/2">Nurture strong relationships with your customers</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Results-driven contact centre solutions</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Provide great customer experience with Process Source’s results-driven inbound and outbound contact centre services, including voice, chat, web and email support.</p>
                    <Link href="/contactCentre"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background2 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">Optimise your business performance</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Comprehensive business process outsourcing solutions</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Let us handle all of your back office functions so you can focus on your core business, improve performance and reduce costs.</p>
                    <Link href="/backOffice"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background3 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">All businesses can leverage automation</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Leading-edge business process automation</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Speed up processes, provide optimal experience, improve security and get better insights with Acquire BPO’s automation and AI solutions.</p>
                    <Link href="/automation"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;