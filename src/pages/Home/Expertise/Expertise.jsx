import Image from "next/image";
import image1 from "../../../assets/happy-customer-service-representative-using-computer-while-communicating-with-clients-online.jpg"
import image2 from "../../../assets/1177.jpg"
import image3 from "../../../assets/tr71123-ai-art.jpeg"
import Link from "next/link";

const Expertise = () => {
    return (
        <div className="text-white">
            <div className="text-white max-w-screen-xl mx-auto">
                <div className="px-12 2xl:px-0">
                    <h1 className="font-extrabold text-2xl xl:text-5xl pt-12 pb-4">Our expertise</h1>
                    <p className="pb-12">We’ve helped transform businesses—drawing on our global expertise, well-defined processes and continuous improvement approach.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 max-w-screen-xl">
                    <div className="relative">
                        <Image className="object-cover md:h-[250px] lg:h-[500px]" src={image1} alt="expertise1" />
                        <div className="absolute bottom-0 px-12 pt-28 lg:pt-80 pb-4 h-full bg-gradient-to-b from-transparent via-[#15151588] to-black hover:bg-gradient-to-b space-y-2">
                            <h1 className="font-extrabold text-2xl">Contact Centre</h1>
                            <p className="text-[10px] lg:text-xs">Positive customer experiences are vital to business success. Our contact centre solutions cover the entire customer lifecycle-from acquisition to retention.</p>
                            <Link href="/contactCentre"><button className="bg-[#0C71C3] text-sm hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">engage customers</button></Link>
                        </div>
                    </div>
                    <div className="relative">
                    <Image className="h-[220px] w-full lg:h-[500px] object-cover" src={image2} alt="expertise2" />
                        <div className="absolute bottom-0 space-y-2 h-full pt-16 lg:pt-80 pb-4 px-12 bg-gradient-to-b from-transparent via-[#15151588] to-black hover:bg-gradient-to-b">
                            <h1 className="font-extrabold text-2xl">Back Office</h1>
                            <p className="text-[10px] lg:text-xs">Efficient processes are key to running smooth operations. Our back office solutions streamline your non-voice, admin support and KPO functions, to name a few.</p>
                            <Link href="/backOffice"><button className="bg-[#0C71C3] text-sm hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">Get support</button></Link>
                        </div>
                    </div>
                    <div className="relative">
                    <Image className="object-cover md:h-[250px] lg:h-[500px]" src={image3} alt="expertise3" />
                        <div className="absolute bottom-0 space-y-2 h-full pt-28 lg:pt-80 px-12 pb-4 bg-gradient-to-b from-transparent via-[#15151588] to-black hover:bg-gradient-to-b">
                            <h1 className="font-extrabold text-2xl">Automation & AI</h1>
                            <p className="text-[10px] lg:text-xs">Our investments in automation technology and people expertise means you don't have to. We take a vendor-agnostic approach and provide fully managed, end-to-end solutions to suit business needs.</p>
                            <Link href="/automation"><button className="bg-[#0C71C3] text-sm hover:bg-transparent hover:border-2 my-4 px-5 py-2 rounded-full font-bold uppercase -mb-8">Automate now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;