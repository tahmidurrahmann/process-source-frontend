import Image from "next/image";
import "./clientsInfo.css";

const ClientsInfo = () => {
    return (
        <div>
            <div className="background16 text-white bg-fixed">
                <div className="bg-gradient-to-r from-[#000000] via-[#1515157d] to-[#151515]">
                    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 xl:gap-4 mx-auto xl:space-y-3 py-32">
                        <div className="flex lg:flex-col xl:flex-row items-center justify-center gap-4 lg:gap-0 xl:gap-4">
                            <div className="bg-[#6366F1] p-6 mb-4 rounded">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/count-1-1.svg" alt="j" width={50} height={50} />
                            </div>
                            <div className="text-left lg:text-center xl:text-left">
                                <h1 className="text-5xl font-bold">858</h1>
                                <p className="font-bold">SUCCESSFUL PROJECTS </p>
                            </div>
                        </div>
                        <div className="-ml-8 lg:-ml-0 flex lg:flex-col xl:flex-row items-center justify-center gap-4 lg:gap-0 xl:gap-4">
                            <div className="bg-[#6366F1] p-6 mb-4 rounded">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/count-1-2.svg" alt="j" width={50} height={50} />
                            </div>
                            <div className="text-left lg:text-center xl:text-left">
                                <h1 className="text-5xl font-bold">650</h1>
                                <p className="font-bold">MEDIA ACTIVITIES</p>
                            </div>
                        </div>
                        <div className="-ml-8 lg:-ml-0 flex lg:flex-col xl:flex-row items-center justify-center gap-4 lg:gap-0 xl:gap-4">
                            <div className="bg-[#6366F1] p-6 mb-4 rounded">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/count-1-3.svg" alt="j" width={50} height={50} />
                            </div>
                            <div className="text-left lg:text-center xl:text-left">
                                <h1 className="text-5xl font-bold">567</h1>
                                <p className="font-bold">SKILLED EXPERTS</p>
                            </div>
                        </div>
                        <div className="-ml-12 lg:-ml-0 flex lg:flex-col xl:flex-row items-center justify-center gap-4 lg:gap-0 xl:gap-4">
                            <div className="bg-[#6366F1] p-6 mb-4 rounded">
                                <Image src="https://wordpress.vecurosoft.com/techbiz/wp-content/uploads/2022/10/count-1-4.svg" alt="j" width={50} height={50} />
                            </div>
                            <div className="text-left lg:text-center xl:text-left">
                                <h1 className="text-5xl font-bold">28k</h1>
                                <p className="font-bold">HAPPY CLIENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsInfo;