import Image from "next/image";

const Banner = () => {
    return (
        <div>
            <div className='relative'>
                <video className='w-full object-cover min-h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)]' autoPlay loop muted>
                    <source src="/bannerVideo.mp4" type="video/mp4" />
                </video>
                <div className='absolute top-0 bg-gradient-to-r from-[#151515] via-[#1515157d] to-[#151515fe] w-full h-full'>
                    <div className="max-w-screen-xl p-7 2xl:p-0 flex flex-col h-full justify-center items-center xl:items-start mx-auto top-20 text-white">
                        <div className="text-4xl font-black md:text-5xl lg:text-6xl pb-4 2xl:-mt-12">
                            <p className="text-center xl:text-left">Better Results.</p>
                            <p className="text-center xl:text-left">Lower Costs.</p>
                            <p className="text-center xl:text-left">Any Team.</p>
                        </div>
                        <p className="w-3/4 md:w-1/2 text-center xl:text-left pb-6 font-inter">The Process Source difference is all about quality. Schedule time to discuss how you could save 70%+, remove distractions, and watch your KPIs soar. </p>
                        <button className="bg-[#6366F1] p-4 rounded">Free Consultation</button>
                    </div>
                </div>
            </div>
            <div className="absolute lg:inline-block hidden w-full md:top-3/4 px-4">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <div className="bg-[#192230] p-4 rounded-lg flex flex-col justify-center items-center">
                            <div className="bg-gray-300 p-6 mb-4 rounded-full">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-1.svg" alt="j" width={50} height={50} />
                            </div>
                            <h1 className="pb-2 text-2xl font-bold text-center">Cloud Services</h1>
                            <p className="text-center font-inter">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                        </div>
                        <div className="bg-[#6366f1] text-white p-7 rounded-lg flex flex-col justify-center items-center">
                            <div className="bg-gray-300 p-3 mb-4 rounded-full">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-2.svg" alt="j" width={50} height={50} />
                            </div>
                            <h1 className="pb-2 text-2xl font-bold text-center">UI Development</h1>
                            <p className="text-center font-inter">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                        </div>
                        <div className="bg-[#192230] p-7 rounded-lg flex flex-col justify-center items-center">
                            <div className="bg-gray-300 p-3 mb-4 rounded-full">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/sr-icon-1-3.svg" alt="j" width={50} height={50} />
                            </div>
                            <h1 className="pb-2 text-2xl font-bold text-center">Digital Marketing</h1>
                            <p className="text-center font-inter">Deliver plug commerce with dynamic is expertise. leading edge products with business models</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
