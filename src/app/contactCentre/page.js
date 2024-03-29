import Image from "next/image";
import "./contact.css"
import contact1 from "../../assets/contact1.png"
import contact2 from "../../assets/contact2.png"
import contact3 from "../../assets/contact3.png"
import contact4 from "../../assets/contact4.png"
import contact5 from "../../assets/contact5.png"
import contact6 from "../../assets/contact6.png"
import { FaCheck } from "react-icons/fa";

export const metadata = {
    title: "Contact Centre | Process Source",
    description: "Process Source Contact Centre Page",
  };

const ContactCentre = () => {
    return (
        <div>
            <div className="background4 text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3 py-28">
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Australian customer service outsourcing solutions</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Outsource your contact centre tasks to a customer-centric workforce based in Australia or the Philippines. Process Source’s call centre outsourcing services help you reach more customers and take your CX to the next level.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pt-12 pb-4">At Process Source, we’re an Australian-owned and managed back-office service provider with 15-years’ experience helping private and publicly listed companies streamline business processes through outsourcing. Directed by a Melbourne-based executive team, we provide professionally qualified back-office resources that have expertise in the areas of accounting and bookkeeping, administration, image & document processing and software development, to name a few.</p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pb-4">
                We have demonstrable experience driving operational efficiencies for a diverse array of Australian organisations, including government and blue-chip companies, that require some or all work to be done onshore. The SMART Group, a Melbourne-based outsourcer, became part of Process Source in July 2020 after a 100% acquisition.
                </p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 2xl:px-0 md:px-16">We design outsourcing solutions specifically around Australian regulatory mandates. Our security and compliance standards include global PCI-DSS certification (Version 3.2, Level 1 Service Provider), SOC 1&2, COPC, Australian Privacy Laws, Australian Financial Services Regulatory Framework and ISO/IEC 27001:2013. Read more about our certifications here.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[200px]" src={contact1} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Capability & performance</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Process Source, our expert, high-performing Australian contact centre agents and sales professionals serve as extensions of our clients’ in-house teams for a brand range of customer service outsourcing tasks including inbound customer services and sales, outbound sales and lead generation. Our Australian-centric culture extends to our offshore operations in the Philippines, where our results-driven teams provide your customers with voice, chat and email support. We maintain a vibrant talent pool of professional and highly-trained resources to ensure your customers have only the most positive experience.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Whether your customer service outsourcing engagement is onshore or offshore, our Australian-based Client Relationship Managers (CRMs) and PRINCE2-certified Project Managers ensure risk-free transition and hands-on focus.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[170px]" src={contact2} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Scalability & flexibility</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Keeping your business agile is critical in order to successfully navigate evolving market demands, seasonal shifts and unexpected events. Our right-shoring services are delivered via a range of flexible engagement models, including traditional full-managed operations out of our premium BPO workspaces in Australia and the Philippines or a resilient Work from Home (WFM) setup with dedicated remote staff, secure technology and continuous support. We have stringent Business Continuity Planning (BCP) options to ensure business resiliency and uninterrupted operations.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[160px]" src={contact3} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Technology & innovation</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Outsourcing minimises risks and overhead costs to pave the way for reinvestment in technology and innovation. Acquire is the only known BPO to operate its own MPLS network servicing Australia, the Philippines and the United States. This enables us to proudly guarantee business continuity with 99.999% network availability to ensure ‘local call’ clarity. Our redundant infrastructure includes onshore data centres in highly secure and stable locations and industry-leading integrated web applications.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Furthermore, our reliable BPO automation solutions are designed by our specialist automation and intelligence experts to improve customer service outsourcing support, increase operational efficiencies, reduce costs and minimise security risks.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[140px]" src={contact4} alt="png" /></div>
                <div>
                    <h1 className="text-[#C60081] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Customer Acquisition</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Boost acquisition rates through insight and intelligence</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Process Source, we approach each engagement using a structured model that ensures all stakeholders are on the same page—allowing us to win at customer acquisition and sales targets. With 15-years’ experience in business process outsourcing, a team of savvy sales & CX professionals and leading technology to generate intelligent customer insight, our clients can expect consistent growth.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">The key to customer acquisition is knowing what your customers need before they even ask for it. Our customer acquisition strategies are proven in virtually every industry—from banking & financial services, technology, retail and telecommunications. Start driving more sales and realise your business’s full potential through our strategic and sustained customer acquisition solutions:</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />List-Building and Lead Generation</li>
                        <li className="flex items-center gap-2"><FaCheck />Order-Taking and Payment Processing</li>
                        <li className="flex items-center gap-2"><FaCheck />Sales, Telemarketing and Account Management</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[700px] xl:w-[500px] 2xl:w-[300px]" src={contact5} alt="png" /></div>
                <div>
                    <h1 className="text-[#C60081] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Customer Service</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Fast, consistent and always on customer support at all touchpoints</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We recognise the importance of great interactions through personalised customer service outsourcing solutions. This is why we designed our call centre outsourcing solutions around actual customer service scenarios and made them scalable to match specific business needs. Our commitment to clients is the same as our commitment to their customers—ensure expert care, rapid resolution and opportunities to create additional value from every call. Our Customer Service Representatives apply high quality standards, processes and technologies to respond promptly to callers and provide the appropriate level of support. Leverage exceptional customer service solutions through trained customer care experts, streamlined processes and advanced BPO technology that is available to your customers anytime, anywhere.</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />Level 1, 2 and 3 Technical Support</li>
                        <li className="flex items-center gap-2"><FaCheck />Web Chat and Email Support</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[220px]" src={contact6} alt="png" /></div>
                <div>
                    <h1 className="text-[#C60081] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Customer Retention</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Promote brand loyalty through effective customer retention solutions</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We treat your business like our own. Say goodbye to high churn rates and let’s help you turn existing customers into brand advocates. Our customer retention experts, CRM techniques and tools are tried and tested to improve response rates and increase order values that maximise client revenue and profit. At Process Source, customer relationships go beyond acquisition–we establish, maintain and nourish customer relationships that make way for stronger brand loyalty. Let us help you keep existing customers, target and measure causes of dissatisfaction with our customer service outsourcing solutions and succeed at crunching numbers that matter. Talk to us about:</p>
                    <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />Collections</li>
                        <li className="flex items-center gap-2"><FaCheck />Retention and Win-Back</li>
                        <li className="flex items-center gap-2"><FaCheck />Sales Verification and Quality Assurance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactCentre;