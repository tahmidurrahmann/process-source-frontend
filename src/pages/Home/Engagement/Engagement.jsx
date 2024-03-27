/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import engagement1 from "../../../assets/engagement1.jpg"
import engagement2 from "../../../assets/engagement2.jpg"
import engagement3 from "../../../assets/engagement3.jpg"
import engagement4 from "../../../assets/engagement4.jpg"
import Link from "next/link";

const Engagement = () => {
    return (
        <div className="mt-[800px] md:mt-56 lg:mt-44">
            <div className="text-white max-w-screen-2xl ml-auto">
                <div className="px-12 2xl:px-0">
                    <h1 className="font-extrabold text-2xl xl:text-5xl pt-12 pb-4">Find out how we can drive success for you</h1>
                    <p className="pb-12">At Process Source, our flexible engagement models enable us to deliver bespoke outsourcing solutions that exceed client expectations every time.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative">
                        <Image className="h-[220px] xl:h-[300px] object-cover" src={engagement4} alt="engagement1" />
                        <div className="absolute bottom-0 space-y-2 p-10 md:p-16 lg:p-10 xl:p-20 bg-gradient-to-b from-transparent via-[#15151588] to-black w-full h-full">
                            <h1 className="font-extrabold text-2xl xl:text-4xl">Comprehensive Outsourcing</h1>
                            <p className="text-[10px] lg:text-xs xl:text-base">We’ll drive all aspects of your operations—from process management, training, quality assurance, facilities management, technology and other shared support services.</p>
                            <Link href="/comprehensive"><button className="bg-[#0C71C3] text-sm xl:text-base hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">Get Started</button></Link>
                        </div>
                    </div>
                    <div className="relative">
                        <Image className="h-[220px] xl:h-[300px] object-cover" src={engagement3} alt="engagement2" />
                        <div className="absolute bottom-0 space-y-2 p-10 md:p-16 lg:p-10 xl:p-20 bg-gradient-to-b from-transparent via-[#151515a5] to-black w-full h-full">
                            <h1 className="font-extrabold text-2xl xl:text-4xl">Co-sourcing</h1>
                            <p className="text-[10px] lg:text-xs xl:text-base">You'll maintain control of your day-to-day operations while we take care of staffing, assets, facilities and support, with a menu of options readily accessible.</p>
                            <Link href="/coSourcing"><button className="bg-[#0C71C3] text-sm xl:text-base hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">Let's Partner</button></Link>
                        </div>
                    </div>
                    <div className="relative">
                        <Image className="h-[220px] xl:h-[300px] object-cover" src={engagement2} alt="engagement3" />
                        <div className="absolute bottom-0 space-y-2 p-10 md:p-16 lg:p-10 xl:p-20 bg-gradient-to-b from-transparent via-[#15151583] to-black w-full h-full">
                            <h1 className="font-extrabold text-2xl xl:text-4xl">Acquire@Home</h1>
                            <p className="text-[10px] lg:text-xs xl:text-base">Our Work from Home capability is enabled by VDI solutions that can be deployed on Process Source, client or employees' BYO devices utilizing a secure environment.</p>
                            <Link href="/process"><button className="bg-[#0C71C3] text-sm xl:text-base hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">Go Remote</button></Link>
                        </div>
                    </div>
                    <div className="relative">
                        <Image className="h-[220px] xl:h-[300px] object-cover" src={engagement1} alt="engagement4" />
                        <div className="absolute bottom-0 space-y-2 p-10 md:p-16 lg:p-10 xl:p-20 bg-gradient-to-b from-transparent via-[#151515c0] to-black w-full h-full">
                            <h1 className="font-extrabold text-2xl xl:text-4xl">Workspaces</h1>
                            <p className="text-[10px] lg:text-xs xl:text-base">Operate out of our world-class, modern, thoughtfully-designed delivery centres in Australia, the Dominican Republic and the Philippines.</p>
                            <Link href="/workspaces"><button className="bg-[#0C71C3] text-sm xl:text-base hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">Work Here</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Engagement;