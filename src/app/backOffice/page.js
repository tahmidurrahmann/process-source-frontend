import { FaCheck } from "react-icons/fa6";
import "./office.css"
import Image from "next/image";
import contact1 from "../../assets/contact1.png"
import contact2 from "../../assets/contact2.png"
import contact3 from "../../assets/contact3.png"
import backOffice from "../../assets/backOffice.png"

export const metadata = {
    title: "Back Office | Process Source",
    description: "Process Source Back Office Page",
};

const BackOffice = () => {
    return (
        <div>
            <div className="background5 text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3 py-28">
                    <h1 className="text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16 2xl:px-0">Comprehensive back office outsourcing solutions</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Delegate your back-office tasks to a dynamic and innovative service provider while you
                        concentrate on your core operations. Processource BPO specializes in optimizing back-office
                        processes to enhance performance cost-effectively.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pt-12 pb-4">
                    Processource BPO, a Canadian-owned and operated back-office service provider, assists both
                    private and publicly listed companies in optimizing business processes through outsourcing.
                </p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pb-4">
                    Our
                    team comprises professionally qualified resources skilled in accounting, bookkeeping,
                    administration, image and document processing, software development, and more.
                </p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 2xl:px-0 md:px-16">
                    Information
                    security is paramount to us; therefore, our back-office solutions are meticulously crafted to
                    comply with Canadian regulatory mandates.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[140px]" src={contact1} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Capability & performance</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Processource BPO, we offer top-notch outsourced teams both onshore in Canada and offshore
                        in Bangladesh. Our commitment to excellence is evident in our establishment of a Centre of
                        Excellence (CoE), dedicated to innovating our back-office outsourcing solutions continually.
                        Guided by subject matter experts (SMEs), our CoE team adopts a strategic consultancy approach
                        to your project, ensuring consistent service delivery.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We extend our Canadian-centric ethos to our offshore teams in Bangladesh, maintaining a
                        vibrant talent pool of skilled professionals dedicated to providing your customers with
                        exceptional experiences. Our seasoned experts undergo rigorous training programs, adhering to
                        best practices while using cutting-edge tools and platforms.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Whether your project is onshore or offshore, our Canadian-based Customer Relationship
                        Managers (CRMs) and Project Managers provide unwavering support, facilitating seamless
                        culture transfer, risk-free transition, and hands-on attention, giving you a distinct competitive
                        advantage.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[170px]" src={contact2} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Scalability & flexibility</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Experience our comprehensive right-shoring services, available through various flexible
                        engagement models tailored to your needs. Choose from traditional full-managed operations at
                        our premium BPO workspaces or opt for a secure Work from Home (WFM) setup featuring
                        highly skilled remote staff, fortified technology, secure connections, and ongoing support.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left px-12 2xl:px-0 md:px-16">Our outsourcing engagement models empower you to adapt swiftly to evolving market trends,
                        seasonal fluctuations, and unforeseen circumstances. With robust Business Continuity Planning
                        (BCP) options in place, we guarantee business resilience and uninterrupted operations, providing
                        you with peace of mind.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={contact3} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Technology & innovation</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Redirect your outsourcing cost savings towards technology and innovation. Our comprehensive
                        BPO automation solutions, crafted by specialist Artificial Intelligence (AI) experts, aim to
                        streamline your operations. By leveraging Robotic Process Automation (RPA), we eliminate
                        repetitive, time-consuming tasks.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Additionally, we provide secure self-service options for customers through voice biometrics and ensure round-the-clock support with dedicated chatbots. Let&#39;s maximize efficiency and enhance customer satisfaction together.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={backOffice} alt="png" /></div>
                <div>
                    <h1 className="text-[#FF8B00] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Back Office</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Achieve Back Office function through BPO</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We recognize the significance of every facet of your business, including the back office, we&#39;re
                        committed to ending missed deadlines, inaccuracies, and subpar output. At Processource BPO,
                        we offer comprehensive back-office functions and adaptable Knowledge Process Outsourcing
                        (KPO) services. Elevate the quality and efficiency of your operations while trimming overhead
                        costs with our scalable back-office solutions. From data entry and email correspondence to
                        payroll and beyond, our offshore professionals are equipped to handle a wide array of
                        administrative tasks. Our services include (but are not limited to):</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />Back Office</li>
                        <li className="flex items-center gap-2"><FaCheck />Data Cleaning</li>
                        <li className="flex items-center gap-2"><FaCheck />Data Entry</li>
                        <li className="flex items-center gap-2"><FaCheck />KPO</li>
                        <li className="flex items-center gap-2"><FaCheck />Information Gathering</li>
                        <li className="flex items-center gap-2"><FaCheck />HR Admin and Payroll</li>
                        <li className="flex items-center gap-2"><FaCheck />Accounting and Book keeping</li>
                        <li className="flex items-center gap-2"><FaCheck />Content Moderation</li>
                        <li className="flex items-center gap-2"><FaCheck />Payment Processing and Tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BackOffice;