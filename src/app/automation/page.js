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
                    <h1 className="2xl:px-0 text-left font-black text-2xl md:text-3xl lg:text-5xl px-12 md:px-16">Trustworthy BPO Automation and AI solutions</h1>
                    <p className="2xl:px-0 text-sm pt-4 lg:text-xl px-12 md:px-16 md:w-3/4 lg:w-4/5">Utilize automation and intelligence to empower customers, enhance engagement, minimize staff
and operational expenses. Processource BPO&#39;s automation solutions elevate processing speeds,
refine monitoring techniques, and diminish human errors, leading to efficiency and cost-
effectiveness.</p>
                    <button className="text-white border-4 border-white mt-4 text-sm hover:bg-white hover:text-[#0C71C3] px-5 py-2 rounded-full font-bold uppercase mx-12 md:mx-16 2xl:mx-0">talk to us</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-16 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai1} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-16 pb-3">Chatbots</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Customer engagement mechanisms define how companies provide great CX</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">As companies strive to excel in customer experience, automated chatbots are becoming the go-to
solution for customer service across all platforms. Forecasts suggest that chatbots will handle up
to 85% of customer service interactions by 2020. By leveraging self-service capabilities, enhance
customer engagement while delivering optimal customer experiences.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai2} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Robotic Process Automation (RPA)</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">RPA is revolutionising the way companies do business, greatly improving turnaround times</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">RPA in BPO accelerates business processes and tasks by up to 80%. With RPA, you gain access
to a virtual workforce that can be tailored, trained, supervised, and enhanced to perform
repetitive tasks with greater precision, efficiency, and cost-effectiveness compared to human
counterparts.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai3} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Speech Analytics</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">Improve customer interactions, leverage trends and optimise business processes</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">Harness the potential of our speech analytics solution to transform valuable insights derived from
call patterns, keywords, phrases, tone, and sentiment into enhanced, data-informed operations.
Additionally, mitigate compliance risks by employing robots to monitor regulatory scripts,
ensuring adherence to guidelines and regulations.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 justify-center items-start max-w-screen-xl mx-auto">
                <div className="px-12"><Image className="pt-10 pb-4 md:pt-12 md:w-[400px] xl:w-[250px] 2xl:w-[120px]" src={ai4} alt="png" /></div>
                <div>
                    <h1 className="text-[#81C600] text-2xl text-left px-12 2xl:px-0 md:px-16 md:pt-12 pb-3">Voice Biometrics</h1>
                    <h2 className="text-[#0C71C3] font-bold text-xl pb-5  px-12 2xl:px-0 md:px-16">What if you had the technology to improve security using a person’s voice?</h2>
                    <p className="text-white text-sm font-extralight lg:text-base text-left 2xl:px-0 px-12 md:px-16 pb-4">What if you had the technology to improve security using a person’s voice?
Leverage our voice biometrics solution to offer customers a secure and convenient self-service
option, relying solely on their unique voiceprint. Equip your business with voice recognition

technology that complies with industry regulations and standards, ensuring both security and
convenience for your customers.</p>
                </div>
            </div>
        </div>
    );
};

export default Automation;