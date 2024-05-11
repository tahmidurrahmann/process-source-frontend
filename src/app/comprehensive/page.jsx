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
                <div className="max-w-screen-xl mx-auto xl:space-y-3 py-28">
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Fully-managed, results-driven operations</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Through our Comprehensive Outsourcing model, we take the wheel in managing every facet of
                        your operations, including process oversight, training, quality assurance, facilities management,
                        technology, and various shared support services, ensuring seamless and efficient performance
                        across the board.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center max-w-screen-xl mx-auto font-extralight pt-12 2xl:px-0 md:px-16">
                <div className="px-12">
                    <Image src={comprehensive1} alt="comprehensive" className="w-24 md:w-72 2xl:w-24" />
                </div>
                <div>
                    <h1 className="text-[#0081C6] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Comprehensive Outsourcing</h1>
                    <p className="text-white px-12 2xl:px-0 md:px-16">Introducing our classic, full-spectrum outsourcing solution, where we lead the charge in
                        achieving operational excellence, meeting KPIs, ensuring Quality Assurance, conducting
                        thorough training, and providing a comprehensive array of shared support services. With our
                        Comprehensive model, you&#39;ll benefit from the following components:</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4 px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">People</span> – Our skilled workforce, meticulously recruited, trained, and employed by us,
                            seamlessly integrates as a high-performing extension of your local teams, ensuring
                            continuity and excellence in service delivery.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Performance</span> – Entrust us with the complete management of your operations,
                            encompassing comprehensive support, training, rigorous quality assurance, and diligent
                            compliance oversight, allowing you to focus on your core objectives with confidence.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Technology</span> – Engage with cutting-edge contact center systems like Genesys&#39; omni-
                            channel platforms and the Verint WFM platform, complemented by Segue, our scalable,
                            cloud-based platform, ensuring seamless integration and optimal performance for your
                            operations.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Assets</span> – Experience dedicated workspaces equipped with top-notch hardware and
                            software, bolstered by redundant network connectivity and enterprise-grade telephony
                            platforms, ensuring uninterrupted operations and optimal performance for your business
                            needs.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Support</span> – Benefit from access to a spectrum of shared services, including IT support,
                            facilities management, recruitment, HR management, payroll, and an array of other
                            essential functions, streamlining your operations and enhancing efficiency across the
                            board.</p></li>
                    </ul>
                </div>
            </div>
            <div className="font-extralight pt-12 max-w-screen-xl mx-auto">
                <h1 className="text-[#0081C6] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Outsource with confidence</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center self-center gap-6 md:gap-8 lg:gap-12">
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16 xl:px-8">
                        <div className="px-12">
                            <Image src={comprehensive2} alt="comprehensive2" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Operational excellence</h2>
                            <p className="text-sm lg:text-base">Rely on our track record of proven operational excellence, driven by a
                                talented and experienced international workforce, guided by a global executive team, ensuring
                                consistent delivery of exceptional results for your business objectives.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16 xl:px-8">
                        <div className="px-12">
                            <Image src={comprehensive3} alt="comprehensive3" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">End-to-end client experience</h2>
                            <p className="text-sm lg:text-base"> Experience a seamless and risk-free transition with hands-on
                                attention from our local Customer Relationship Managers and Project Managers, ensuring a
                                smooth journey as we navigate your project together. </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16 xl:px-8">
                        <div className="px-12">
                            <Image src={comprehensive4} alt="comprehensive4" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">99.999% network availability</h2>
                            <p className="text-sm lg:text-base">Benefit from redundant infrastructure and onshore data storage
                                housed in highly secure and stable locations, featuring purpose-built designs tailored for real-
                                time traffic applications, voice, and video, ensuring robust performance and reliability for your
                                operations.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center px-12 2xl:px-0 md:px-16 xl:px-8">
                        <div className="px-12">
                            <Image src={comprehensive5} alt="comprehensive5" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Security & compliance</h2>
                            <p className="text-sm lg:text-base">Global PCI certification and compliance to standards including SOC,
                                HIPAA, ISO/IEC 27001:2013.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensivePage;