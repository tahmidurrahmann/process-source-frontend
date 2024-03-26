import Image from "next/image";
import "./Process.css"
import { FaCheck } from "react-icons/fa6";
import ac1 from "../../assets/ac1.png";
import ac2 from "../../assets/ac2.png";
import ac3 from "../../assets/ac3.png";
import ac4 from "../../assets/ac4.png";

export const metadata = {
    title: "Process | Process Source",
    description: "Process Source Process Page",
};

const ProcessHome = () => {
    return (
        <div>
            <div className="background14 text-white">
                <div className="max-w-screen-2xl mx-auto xl:space-y-3 py-28 lg:py-48">
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Scalable Work from Home solutions</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Flexible solutions to keep your contact centre or back-office operations up and running remotely with Process@Home.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center max-w-screen-2xl mx-auto font-extralight pt-12 2xl:px-0 md:px-16">
                <div className="px-12">
                    <Image src={ac1} alt="ac" className="w-24 md:w-72 2xl:w-24" />
                </div>
                <div>
                    <h1 className="text-[#68398e] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Process@Home</h1>
                    <p className="text-white px-12 2xl:px-0 md:px-16">At Process Source, we understand the importance of business continuity. Our Process@Home engagement model enables you to respond rapidly to market demands or unexpected events such as the global COVID-19 crisis, which has shifted most people from a traditional office environment to a home-based arrangement.</p>
                    <p className="text-white px-12 2xl:px-0 md:px-16">With Process@Home, your campaign will leverage the same rigorous operational standards, redundant network connectivity and continuous improvement initiatives that you’d find in any of our delivery centres—all from the safety and security of our employees’ homes so your business never misses a step.</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4 px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">People</span> – Talented, disciplined, high-performing staff proficient in working independently and supported by an operations management team.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Technology</span> – An SOE will be defined during onboarding. PCs will be connected to our Active Directory domain, providing a granular level of security control over software installation, connection of media devices and storage of information.</p></li>
                        <li className="flex items-center gap-2"><FaCheck size={22} /><p><span className="font-bold">Support</span> – Access to shared services teams such as Learning & Development, QA, HR, experienced in supporting Work from Home staff via proven communication channels.</p></li>
                    </ul>
                </div>
            </div>
            <div className="font-extralight pt-12 max-w-screen-xl mx-auto">
                <h1 className="text-[#68398e] text-2xl text-center md:text-left pb-4 px-12 2xl:px-0 md:px-16">Outsource with confidence</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 ">
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={ac2} alt="ac2" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Flexible engagement</h2>
                            <p className="text-sm lg:text-base">Scale up or ramp down with resources you need to stay efficient. A dedicated and bespoke WFH-based team can be quickly deployed, regardless of geography.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={ac3} alt="ac3" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Proficient support systems</h2>
                            <p className="text-sm lg:text-base">Experienced Recruitment, Learning & Development, IT teams utilise proven methodologies and processes to attract, train and equip the right team.</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-12 2xl:px-0 md:px-16">
                        <div className="px-12">
                            <Image src={ac4} alt="ac4" className="w-24 md:w-72 2xl:w-24" />
                        </div>
                        <div className="text-white text-center">
                            <h2 className="font-bold py-2">Security & compliance</h2>
                            <p className="text-sm lg:text-base">Business systems will be delivered within a VDI environment, with aggregation capabilities and multi-factor authentication. We can also provide PCI credit card de-scoping technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessHome;