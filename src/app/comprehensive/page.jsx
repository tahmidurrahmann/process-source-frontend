import "./comprehensive.css";
import comprehensive1 from "../../assets/comprehensive1.png";
import comprehensive2 from "../../assets/comprehensive2.png";
import comprehensive3 from "../../assets/comprehensive3.png";
import comprehensive4 from "../../assets/comprehensive4.png";
import comprehensive5 from "../../assets/comprehensive5.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export const metadata = {
    title: "Comprehensive | Process Source",
    description: "Process Source Comprehensive Page",
};

const ComprehensivePage = () => {
    return (
        <div>
            <div className="background12 text-white">
                <div className="max-w-screen-2xl mx-auto xl:space-y-3 py-28">
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Fully-managed, results-driven operations</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">With our Comprehensive Outsourcing model, we’ll drive all aspects of your operations—from process management, training, quality assurance, facilities management, technology and other shared support services.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center max-w-screen-2xl mx-auto font-extralight pt-12 2xl:px-0 md:px-16">
                <div className="px-12">
                    <Image src={comprehensive1} alt="comprehensive" className="w-24 md:w-72 2xl:w-24" />
                </div>
                <div>
                    <h1 className="text-[#0081C6] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Comprehensive Outsourcing</h1>
                    <p className="text-white px-12 2xl:px-0 md:px-16">This is our traditional, full-scope outsourcing solution where we drive operational performance & KPI success, Quality Assurance, training and a complete range of shared support services. With our Comprehensive model, you’ll enjoy the following components:</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4 px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">People</span> – Qualified resources recruited, trained and employed by us to serve as a high-performing extension of your local teams.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Performance</span> – Full outsourced management of your operations, including support, training, QA and compliance.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Technology</span> – Contact centre systems such Genesys’ omni-channel platforms, Verint WFM platform and Segue, our scalable, cloud-based platform.Moderation</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Assets</span> – Dedicated workspaces, hardware and software, redundant network connectivity and enterprise-grade telephony platforms.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Support</span> – Access to shared services such as IT support, facilities management, recruitment, HR management, payroll and more.</p></li>
                    </ul>
                </div>
            </div>
            <div className="font-extralight pt-12 max-w-screen-2xl mx-auto">
                <h1 className="text-[#0081C6] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Outsource with confidence</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-12 ">
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={comprehensive2} alt="comprehensive2" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                        <h2 className="font-bold py-2">Operational excellence</h2>
                        <p className="text-sm lg:text-base">Proven operational performance by high-performing talent and experienced international teams, directed by a global executive team.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={comprehensive3} alt="comprehensive3" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                        <h2 className="font-bold py-2">End-to-end client experience</h2>
                        <p className="text-sm lg:text-base">Risk-free transition and hands-on focus through local Client Relationship Managers (CRMs) and PRINCE2-certified Project Managers.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={comprehensive4} alt="comprehensive4" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                        <h2 className="font-bold py-2">99.999% network availability</h2>
                        <p className="text-sm lg:text-base">Redundant infrastructure, onshore data storage in highly secure and stable locations, purpose-built design for real-time traffic applications, voice and video.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={comprehensive5} alt="comprehensive5" className="w-24 md:w-72 2xl:w-24" />
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

export default ComprehensivePage;