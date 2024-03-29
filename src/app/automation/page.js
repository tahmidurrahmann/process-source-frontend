import "./automation.css";
import ai1 from "../../assets/ai1.png";
import ai2 from "../../assets/ai2.png";
import ai3 from "../../assets/ai3.png";
import ai4 from "../../assets/ai4.png";
import Image from "next/image";

export const metadata = {
    title: "Automation & AI | Process Source",
    description: "Process Source Automation & AI Page",
};

const Automation = () => {
    return (
        <div>
            <div className="background6 text-white">
                <div className="max-w-screen-xl mx-auto xl:space-y-3 py-28">
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Reliable BPO automation & AI solutions</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Leverage automation and intelligence to empower customers, boost engagement, reduce headcount and operational costs. Process Source's automation solutions improve processing speeds, streamline monitoring methods and reduce human errors.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-16 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai1} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-16 pb-3">Chatbots</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Customer engagement mechanisms define how companies provide great CX</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">In the race to deliver the best CX, more and more firms are now turning to automated chatbots for customer service across all channels. Chatbots are predicted to drive up to 85% of all customer service interactions in 2020. Provide optimal customer experience as you boost customer engagement with self-service capabilities.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai2} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Robotic Process Automation (RPA)</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">RPA is revolutionising the way companies do business, greatly improving turnaround times</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Robotic Process Automation in BPO automates business processes and tasks up to 76% faster. RPA equips you with a virtualised workforce that can be designed, trained, managed and optimised to execute repetitive tasks more accurately, efficiently and cost-effectively than humans.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai3} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Speech Analytics</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Improve customer interactions, leverage trends and optimise business processes</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Our speech analytics solution gives you the power to turn intelligent insights from call trends, keywords, phrases, tone and sentiment into more effective, data-driven operations. Furthermore, minimise compliance risks by having robots listening out for regulatory scripts.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai4} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Voice Biometrics</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">What if you had the technology to improve security using a person’s voice?</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">With our voice biometrics solution, you can provide customers with a secure and convenient self-service option, based solely on their unique voiceprint. Equip your business with industry regulation- and standards- compliant voice recognition technology.</p>
                </div>
            </div>
        </div>
    );
};

export default Automation;