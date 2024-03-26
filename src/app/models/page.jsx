import Image from "next/image";
import Link from "next/link";
import "./models.css";

export const metadata = {
    title: "Models | Process Source",
    description: "Process Source Models Page",
};

const ModelsPage = () => {
    return (
        <div>
            <div className="background7 min-h-screen text-white">
                <h1 className="text-center font-extrabold text-4xl pt-24 lg:pt-40 lg:text-6xl">Models</h1>
                <p className="text-sm pt-4 lg:text-2xl text-center px-12 md:w-3/4 xl:w-1/2  2xl:w-1/3 mx-auto">Outsource the way you want with our range of engagement models—from traditional site-based operations to Work from Home.</p>
                <div className="flex flex-col max-w-screen-lg mx-auto lg:flex-row justify-between items-center text-center pt-28 pb-12 px-12 gap-8 lg:gap-4">
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ-Comprehensive-icon-white.png" width={100} height={100} alt="alt" />
                        <Link href="/comprehensive"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">Comprehensive</button></Link>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ-Co-Sourcing-icon-white.png" width={100} height={100} alt="alt" />
                        <Link href="/coSourcing"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">co-sourcing</button></Link>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ-Acquire@Home-icon-white.png" width={90} height={90} alt="alt" />
                        <Link href="/process"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">process@home</button></Link>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Image src="https://acquirebpo.com/wp-content/uploads/img/ACQ-Workspaces-icon-white.png" width={90} height={90} alt="alt" />
                        <Link href="/workspaces"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">workspaces</button></Link>
                    </div>
                </div>
            </div>
            <div className="background8 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4 xl:w-1/2">Outsource the traditional way</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Comprehensive, fully-managed operations</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Choose our Comprehensive Outsourcing model and we’ll do it all for you—from operations management, facilities, technology and shared support services.</p>
                    <Link href="/comprehensive"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background9 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">Outsource on your terms</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Collaborative, tailor-made outsourcing</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Maintain control of your day-to-day operations while we take care of staffing, assets, facilities and support for you through our Co-Sourcing model.</p>
                    <Link href="/coSourcing"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background10 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">Outsource without limitations</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Remote staffing solutions for business continuity</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Build your virtual contact centre or back-office team with talented resources, secure technology and compliant processes—from anywhere.</p>
                    <Link href="/process"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
            <div className="background11 min-h-screen text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3">
                    <h1 className="text-left font-black text-xl md:text-2xl lg:text-3xl pt-52 xl:pt-72 text-[#F9F9F9AB] px-12 md:px-16 md:w-3/4">Thoughtfully-designed, secure delivery centres</h1>
                    <p className="text-[27px] md:text-4xl font-black pt-4 lg:text-5xl px-12 md:px-16 md:w-3/4 lg:w-3/5">Inspired BPO spaces around the world</p>
                    <p className="text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 xl:w-1/2">Operate out of our network of well-appointed, world-class sites in Australia, the Dominican Republic, the Philippines and the United States.</p>
                    <Link href="/workspaces"><button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16">learn more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ModelsPage;