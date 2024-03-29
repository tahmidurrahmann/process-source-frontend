import Image from "next/image";
import { LuMoveRight } from "react-icons/lu";

const Services = () => {
    return (
        <div className="bg-[#1F2937] py-16">
            <h1 className="text-[#6366F1] text-center">OUR LATEST SERVICES</h1>
            <p className="text-3xl md:text-4xl lg:text-5xl text-center mx-auto font-bold pt-4">WHAT KIND OF SERVICES</p>
            <p className="text-3xl md:text-4xl lg:text-5xl text-center mx-auto font-bold pb-4 pt-1">WE ARE OFFERING</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto mt-10 px-4 2xl:px-0">
                <div className="bg-[#111827] p-10 rounded-lg flex flex-col justify-start items-start space-y-2 hover:bg-[#6366f1]">
                    <div className="bg-[#EFF1F5] p-6 mb-4 rounded-full">
                        <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-1.svg" alt="j" width={50} height={50} />
                    </div>
                    <h1 className="pb-2 text-2xl font-bold text-center">Cloud Services</h1>
                    <p className="font-inter pb-4">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                    <p className="p-3 bg-[#EFF1F5] rounded text-[#0E5AF2] flex items-center gap-2 font-inter font-semibold text-sm hover:bg-black hover:cursor-pointer hover:text-white">READ MORE <LuMoveRight /></p>
                </div>
                <div className="bg-[#111827] p-10 rounded-lg flex flex-col justify-start items-start space-y-2 hover:bg-[#6366f1]">
                    <div className="bg-[#EFF1F5] p-6 mb-4 rounded-full">
                        <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-2.svg" alt="j" width={50} height={50} />
                    </div>
                    <h1 className="pb-2 text-2xl font-bold text-center">UI Development</h1>
                    <p className="font-inter pb-4">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                    <p className="p-3 bg-[#EFF1F5] rounded text-[#0E5AF2] flex items-center gap-2 font-inter font-semibold text-sm hover:bg-black hover:cursor-pointer hover:text-white">READ MORE <LuMoveRight /></p>
                </div>
                <div className="bg-[#111827] p-10 rounded-lg flex flex-col justify-start items-start space-y-2 hover:bg-[#6366f1]">
                    <div className="bg-[#EFF1F5] p-6 mb-4 rounded-full">
                        <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-3.svg" alt="j" width={50} height={50} />
                    </div>
                    <h1 className="pb-2 text-2xl font-bold text-center">Digital Marketing</h1>
                    <p className="font-inter pb-4">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                    <p className="p-3 bg-[#EFF1F5] rounded text-[#0E5AF2] flex items-center gap-2 font-inter font-semibold text-sm hover:bg-black hover:cursor-pointer hover:text-white">READ MORE <LuMoveRight /></p>
                </div>
                <div className="bg-[#111827] p-10 rounded-lg flex flex-col justify-start items-start space-y-2 hover:bg-[#6366f1]">
                    <div className="bg-[#EFF1F5] p-6 mb-4 rounded-full">
                        <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-4.svg" alt="j" width={50} height={50} />
                    </div>
                    <h1 className="pb-2 text-2xl font-bold text-center">Web Development</h1>
                    <p className="font-inter pb-4">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                    <p className="p-3 bg-[#EFF1F5] rounded text-[#0E5AF2] flex items-center gap-2 font-inter font-semibold text-sm hover:bg-black hover:cursor-pointer hover:text-white">READ MORE <LuMoveRight /></p>
                </div>
                <div className="bg-[#111827] p-10 rounded-lg flex flex-col justify-start items-start space-y-2 hover:bg-[#6366f1]">
                    <div className="bg-[#EFF1F5] p-6 mb-4 rounded-full">
                        <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-5.svg" alt="j" width={50} height={50} />
                    </div>
                    <h1 className="pb-2 text-2xl font-bold text-center">Software Services</h1>
                    <p className="font-inter pb-4">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                    <p className="p-3 bg-[#EFF1F5] rounded text-[#0E5AF2] flex items-center gap-2 font-inter font-semibold text-sm hover:bg-black hover:cursor-pointer hover:text-white">READ MORE <LuMoveRight /></p>
                </div>
                <div className="bg-[#111827] p-10 rounded-lg flex flex-col justify-start items-start space-y-2 hover:bg-[#6366f1]">
                    <div className="bg-[#EFF1F5] p-6 mb-4 rounded-full">
                        <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-6.svg" alt="j" width={50} height={50} />
                    </div>
                    <h1 className="pb-2 text-2xl font-bold text-center">Machine Learning</h1>
                    <p className="font-inter pb-4">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                    <p className="p-3 bg-[#EFF1F5] rounded text-[#0E5AF2] flex items-center gap-2 font-inter font-semibold text-sm hover:bg-black hover:cursor-pointer hover:text-white">READ MORE <LuMoveRight /></p>
                </div>
            </div>
        </div>
    );
};

export default Services;