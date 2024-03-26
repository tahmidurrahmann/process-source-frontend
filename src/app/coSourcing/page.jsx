import Image from "next/image";
import "./coSourcing.css"
import { FaCheck } from "react-icons/fa6";
import co1 from "../../assets/co1.png";
import co2 from "../../assets/co2.png";
import co3 from "../../assets/co3.png";
import co4 from "../../assets/co4.png";
import co5 from "../../assets/co5.png";

const CoSourcing = () => {
    return (
        <div>
            <div className="background13 text-white">
                <div className="max-w-screen-2xl mx-auto xl:space-y-3 py-28">
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Collaborative & flexible outsourcing</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Maintain control of your day-to-day operations while we take care of staffing, assets, facilities and support through our Co-Sourcing model.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center max-w-screen-2xl mx-auto font-extralight pt-12 2xl:px-0 md:px-16">
                <div className="px-12">
                    <Image src={co1} alt="co" className="w-28 md:w-96 2xl:w-36" />
                </div>
                <div>
                    <h1 className="text-[#15887D] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Co-Sourcing</h1>
                    <p className="text-white px-12 2xl:px-0 md:px-16">An effective outsourcing solution needs to be designed around a client’s unique objectives in order to achieve optimal results—a ‘one size fits all’ solution won’t work. Our Co-Sourcing model is outsourcing at its most flexible, allowing clients to manage daily operations while we provide skilled resources, modern facilities and access to a menu of shared support services.</p>
                    <p className="pt-8 pb-2 text-white px-12 2xl:px-0 md:px-16">With our Co-Sourcing model, you’ll enjoy the following components:</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4 px-12 2xl:px-0 md:px-16">
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">People</span> – Qualified resources recruited, trained and employed by us to serve as a high-performing extension of your local teams.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Assets</span> – Secure, world-class office space, equipment, high-speed connectivity and enterprise-grade technology platforms.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Support</span> – Access to shared services such as IT support, facilities management, recruitment, HR management, payroll and more.</p></li>
                    </ul>
                </div>
            </div>
            <div className="font-extralight pt-12 max-w-screen-2xl mx-auto">
                <h1 className="text-[#15887D] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Outsource with confidence</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12 ">
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={co2} alt="co2" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Flexible engagement</h2>
                            <p className="text-sm lg:text-base">Ownership and control of your outsourced operations, ensuring compliance to your company’s best practices and driving results.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={co3} alt="co3" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Seamless client experience</h2>
                            <p className="text-sm lg:text-base">Risk-free transition and hands-on focus through local Client Relationship Managers (CRMs) and PRINCE2-certified Project Managers.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={co4} alt="co4" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">99.999% network availability</h2>
                            <p className="text-sm lg:text-base">Redundant infrastructure, onshore data storage in highly secure and stable locations, purpose-built design for real-time traffic applications, voice and video.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={co5} alt="co5" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Security & compliance</h2>
                            <p className="text-sm lg:text-base">Global PCI certification and compliance to standards including SOC, HIPAA, ISO/IEC 27001:2013.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoSourcing;