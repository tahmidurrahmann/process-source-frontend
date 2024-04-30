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
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Canadian customer service outsourcing solutions</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Delegate your contact center responsibilities to a customer-focused workforce located in
                        Canada. Processource BPO&#39;s call center outsourcing solutions empower you to connect with a
                        broader audience and elevate your customer experience to unprecedented heights.

                        Being a Canadian-owned and managed call center outsourcing service provider, we specialize in
                        assisting private and ASX-listed organizations in fostering strong customer relationships. With
                        our track record of successful partnerships, operational excellence, and thorough comprehension
                        of the Canadian business landscape, we ensure that your onshore contact center becomes a
                        seamless extension of your operations.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto">
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pt-12 pb-4">At Processource BPO, our proficient contact center agents and sales experts seamlessly integrate
                    with our clients&#39; in-house teams, offering a comprehensive range of customer service outsourcing
                    solutions. From inbound customer services to sales, outbound sales, and lead generation, our
                    Canadian-centric approach extends to our offshore operations in Bangladesh. Here, our results-
                    oriented teams deliver exceptional voice, chat, and email support to your customers.</p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 md:px-16 2xl:px-0 pb-4">
                    We maintain a dynamic talent pool of professional and extensively trained resources,
                    guaranteeing that your customers receive nothing short of outstanding experiences.
                </p>
                <p className="text-white text-sm font-extralight lg:text-base text-left px-12 2xl:px-0 md:px-16">Whether your
                    engagement is onshore or offshore, our Client Relationship Managers and Project Managers
                    ensure a seamless transition and provide hands-on attention to mitigate any risks.</p>
            </div>
            {/* <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[200px]" src={contact1} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Capability & performance</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Process Source, our expert, high-performing Australian contact centre agents and sales professionals serve as extensions of our clients’ in-house teams for a brand range of customer service outsourcing tasks including inbound customer services and sales, outbound sales and lead generation. Our Australian-centric culture extends to our offshore operations in the Philippines, where our results-driven teams provide your customers with voice, chat and email support. We maintain a vibrant talent pool of professional and highly-trained resources to ensure your customers have only the most positive experience.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Whether your customer service outsourcing engagement is onshore or offshore, our Australian-based Client Relationship Managers (CRMs) and PRINCE2-certified Project Managers ensure risk-free transition and hands-on focus.</p>
                </div>
            </div> */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[170px]" src={contact2} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Scalability & flexibility</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Maintaining agility in your business is essential for adapting to ever-changing market dynamics,
                        seasonal variations, and unforeseen circumstances. Our right-shoring solutions offer flexibility
                        through various engagement models. Whether it&#39;s our traditional full-managed operations from
                        our top-tier BPO facilities in Canada and Bangladesh or a resilient Work from Home setup with
                        dedicated remote staff, secure technology, and ongoing support, we tailor our services to your
                        needs. With robust Business Continuity Planning (BCP) measures in place, we guarantee
                        business resilience and uninterrupted operations, providing peace of mind in the face of any
                        challenges.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[160px]" src={contact3} alt="png" /></div>
                <div>
                    <h1 className="font-bold text-white text-xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-4">Technology & innovation</h1>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Outsourcing not only reduces risks and overhead costs but also frees up resources for
                        reinvestment in technology and innovation. Our redundant infrastructure boasts onshore data
                        centers strategically located in secure and stable environments, along with industry-leading

                        integrated web applications. Moreover, our dependable BPO automation solutions, crafted by our
                        team of automation and intelligence specialists, enhance customer service outsourcing support,
                        boost operational efficiencies, lower costs, and mitigate security risks.</p>
                    {/* <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Furthermore, our reliable BPO automation solutions are designed by our specialist automation and intelligence experts to improve customer service outsourcing support, increase operational efficiencies, reduce costs and minimise security risks.</p> */}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[140px]" src={contact4} alt="png" /></div>
                <div>
                    <h1 className="text-[#C60081] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Customer Acquisition</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Boost acquisition rates through insight and intelligence</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Processource BPO, we follow a structured approach in every engagement to ensure alignment
                        among all stakeholders, enabling us to excel in customer acquisition and sales targets.
                        Leveraging our expertise in business process outsourcing, along with a team of adept sales and
                        CX professionals, and cutting-edge technology for generating intelligent customer insights, our
                        clients can anticipate steady growth.</p>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16">Understanding your customers&#39; needs even before they articulate them is the cornerstone of
                        successful customer acquisition. Our proven customer acquisition strategies span across diverse
                        industries, empowering you to drive more sales and unlock your business&#39;s full potential through
                        strategic and sustained customer acquisition solutions:</p>
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
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">We understand the significance of meaningful interactions facilitated by tailored customer
                        service outsourcing solutions. That&#39;s why we&#39;ve crafted our call center outsourcing services to
                        align with real-world customer service scenarios in mind, ensuring scalability to meet diverse
                        business requirements. Our dedication to clients mirrors our dedication to their customers,
                        ensuring adept assistance, swift issue resolution, and opportunities for added value with every
                        interaction. Our Customer Service Representatives adhere to rigorous quality standards,
                        leveraging cutting-edge processes and technologies to promptly address callers&#39; needs and
                        deliver optimal support. Unlock exceptional customer service solutions through proficient
                        customer care professionals, streamlined workflows, and state-of-the-art BPO technology
                        accessible to your customers 24/7.</p>
                    {/* <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />Level 1, 2 and 3 Technical Support</li>
                        <li className="flex items-center gap-2"><FaCheck />Web Chat and Email Support</li>
                    </ul> */}
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[600px] xl:w-[350px] 2xl:w-[400px]" src={contact6} alt="png" /></div>
                <div>
                    <h1 className="text-[#C60081] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Customer Retention</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Promote brand loyalty through effective customer retention solutions</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">At Processource BPO, we handle your business with the same care and dedication as our own.
                        Bid farewell to high churn rates as we collaborate to transform your current customers into
                        enthusiastic brand advocates. Our team of customer retention experts, along with proven CRM
                        techniques and tools, is adept at enhancing response rates and boosting order values, thus
                        optimizing your revenue and profit margins. We believe in fostering customer relationships that
                        extend beyond mere acquisition—we strive to build, nurture, and maintain connections that
                        foster enduring brand loyalty. Let us assist you in retaining your existing customer base,
                        pinpointing and addressing sources of dissatisfaction through our customer service outsourcing
                        solutions, and achieving success by focusing on the metrics that truly matter.</p>
                    {/* <ul className="text-white text-sm font-extralight lg:text-base text-left space-y-4  px-12 2xl:px-0 md:px-16 pt-4">
                        <li className="flex items-center gap-2"><FaCheck />Collections</li>
                        <li className="flex items-center gap-2"><FaCheck />Retention and Win-Back</li>
                        <li className="flex items-center gap-2"><FaCheck />Sales Verification and Quality Assurance</li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
};

export default ContactCentre;