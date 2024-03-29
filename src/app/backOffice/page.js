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
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Outsource your back-office functions to an efficient and innovative service provider while you focus on your core business. Process Source optimises back office process and improves performance cost efficiently.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pt-12 pb-4">
                    As an Australian-owned and managed call centre outsourcing service provider, we have 15-years’ experience helping private and ASX-listed organisations build solid relationships with their customers. Our demonstrable partnership experience, proven operational performance and deep understanding of the Australian business landscape are driven by a Melbourne-based executive team—ensuring your onshore contact centre is a seamless extension of your business.
                </p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pb-4">
                    Our award-winning call centre outsourcing services are trusted by a wide range of Australian businesses, including government and blue-chip companies, that require some or all work to be done onshore—from customer service through to sales and marketing. In July 2020, The SMART Group became part of Process Source after a 100% acquisition.
                </p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 2xl:px-0 md:px-16">
                    We take information security seriously, so our back-office solutions are designed with a keen understanding of Australian regulatory mandates. Our security and compliance standards include global PCI-DSS certification (Version 3.2, Level 1 Service Provider), SOC 1&2, COPC, Australian Privacy Laws, Australian Financial Services Regulatory Framework and ISO/IEC 27001:2013. Read more about our certifications here.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[140px]" src={contact1} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Capability & performance</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Process Source, we provide high-performing outsourced teams based onshore in Australia or offshore in the Philippines. We’ve established a Centre of Excellence (CoE) focused on continually innovating our back-office outsourcing solutions. Led by subject matter experts (SMEs), our CoE team approaches your engagement with a strategic consultancy approach and ensures consistent service delivery.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We extend our Australian-centric culture to our offshore teams in the Philippines, where we maintain a vibrant talent pool of professional and highly trained resources to ensure your customers have only the most positive experience. Our seasoned experts have undergone extensive training programs and follow best practices while using the latest tools and platforms.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Whether it’s onshore or offshore, your back-office outsourcing engagement is supported by our Australian-based Client Relationship Managers (CRMs) and PRINCE2-certified Project Managers to ensure seamless culture transfer, risk-free transition and hands-on focus for a truly competitive advantage.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[170px]" src={contact2} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Scalability & flexibility</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Our right-shoring services are delivered via a range of flexible engagement models, including traditional full-managed operations out of our premium BPO workspaces in the Philippines or a secure Work from Home (WFM) setup with high-performing remote staff, safeguarded technology and connection and ongoing support. These outsourcing engagement models enable you stay agile to changing market trends, seasonal shifts and unexpected events. We have stringent Business Continuity Planning (BCP) options to ensure business resiliency and uninterrupted operations.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={contact3} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Technology & innovation</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Reinvest the cost savings from outsourcing into technology and innovation. Our holistic BPO automation solutions are designed by specialist Artificial Intelligence (AI) experts who can help you eliminate repetitive, time-consuming tasks with Robotic Process Automation (RPA), provide customers with secure self-service options with voice biometrics and offer 24/7 customer support with dedicated chatbots.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Process Source is the only known BPO to operate its own MPLS network servicing Australia, the Philippines and the United States. This enables us to proudly guarantee business continuity with 99.999% network availability and a redundant infrastructure that includes onshore data centres in highly secure and stable locations and industry-leading integrated web applications.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={backOffice} alt="png" /></div>
                <div>
                    <h1 className="text-[#FF8B00] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Back Office</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Fulfill back office functions through business process outsourcing</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We understand that every part of a business is vital, including back office. Put a stop to missed deadlines, inaccuracy and mediocre output and give your business the results it deserves. At Process Source, we provide extensive back-office functions and flexible Knowledge Process Outsourcing (KPO) services. Boost work quality and productivity and reduce overhead costs with our scalable back office services. Whether it’s data entry, email correspondence, payroll or any other administrative task, we have offshore professionals to take care of it. Our services include (but are not limited to):</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />Accounting and Bookkeeping</li>
                        <li className="flex items-center gap-2"><FaCheck />Back Office</li>
                        <li className="flex items-center gap-2"><FaCheck />Content Moderation</li>
                        <li className="flex items-center gap-2"><FaCheck />Data Cleansing</li>
                        <li className="flex items-center gap-2"><FaCheck />Data Entry</li>
                        <li className="flex items-center gap-2"><FaCheck />HR Admin and Payroll</li>
                        <li className="flex items-center gap-2"><FaCheck />KPO</li>
                        <li className="flex items-center gap-2"><FaCheck />Payment Processing and Tracking</li>
                        <li className="flex items-center gap-2"><FaCheck />Legal and Medical Transcription</li>
                        <li className="flex items-center gap-2"><FaCheck />Research and Information-Gathering</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BackOffice;