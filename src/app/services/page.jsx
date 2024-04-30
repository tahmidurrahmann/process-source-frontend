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
                <p className="text-sm pt-4 lg:text-2xl text-center px-12 md:w-3/4 xl:w-1/2  2xl:w-1/3 mx-auto">Maximize your potential with smart BPO solutions, enhancing customer satisfaction while streamlining operational expenses.</p>
                <div className="flex flex-col max-w-screen-xl mx-auto lg:flex-row justify-center text-center pt-28 pb-12 px-12 2xl:px-0 gap-20 lg:gap-4">
                    <div className="flex flex-col flex-1 items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ_Contact-Centre-icon.png" width={100} height={100} alt="alt" />
                        <p className="lg:h-auto xl:h-[145px] 2xl:h-auto">At the heart of your business lies your connection with customers. That&#39;s why we offer
                            comprehensive customer contact solutions, spanning from acquisition to service and retention.</p>
                        <Link href="/contactCentre"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">Contact Centre</button></Link>
                    </div>
                    <div className="flex flex-col flex-1 items-center gap-4">
                        <Image className="pb-2" src="https://acquirebpo.com/wp-content/uploads/img/ACQ_BackOffice_icon.png" width={100} height={100} alt="alt" />
                        <p className="lg:h-auto xl:h-[165px] 2xl:h-auto">In addition to client interactions, we handle the behind-the-scenes operations, ensuring seamless
                            functionality. Our back office services encompass data cleansing, entry, finance, HR
                            administration, payroll, and design &amp; development, empowering your business at every level.</p>
                        <Link href="/backOffice"><button className="text-white border-4 border-white text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">Back Office</button></Link>
                    </div>
                    <div className="flex flex-col flex-1 items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ_Automation_icon.png" width={80} height={80} alt="alt" />
                        <p className="lg:h-auto xl:h-[170px] 2xl:h-auto">Elevate your efficiency and maintain your competitive edge with our comprehensive automation
                            solutions. From Robotic Process Automation (RPA) to chatbots, voice biometrics, and speech
                            analytics, we provide end-to-end automation services tailored to your needs.</p>
                        <Link href="/automation"><button className="text-white border-4 border-white text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">Automation</button></Link>
                    </div>
                </div>
            </div>
            <div className="background1 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4 xl:w-1/2">Promote Powerful Relationship with your Clients</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Results-oriented contact center solution tailored to meet your needs</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Elevate your customer experience with Processource BPO&#39;s outcome-focused inbound and outbound contact center services, spanning voice, chat, web, and email support.</p>
                    <Link href="/contactCentre"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background2 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">Make the best out of your business performance</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">A wide range of business process outsourcing solutions</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Allow us to manage all your back-office functions, freeing you to concentrate on your core business, enhancing performance, and cutting costs effectively.</p>
                    <Link href="/backOffice"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background3 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">Automation is a Universal Tool Accessible to all Business</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Leading-edge business process automation</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Accelerate processes, enhance experiences, fortify security, and gain invaluable insights with Processource BPO&#39;s cutting-edge automation and AI solutions.</p>
                    <Link href="/automation"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;