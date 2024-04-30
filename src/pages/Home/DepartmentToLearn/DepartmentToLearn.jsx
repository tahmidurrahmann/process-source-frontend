"use client";
// import { FaArrowRight, FaCheck } from "react-icons/fa6";
import "./departmentToLearn.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import Image from "next/image";
import { FaCalculator, FaLaptop, FaHeadphones } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { RxSpeakerLoud } from "react-icons/rx";
import { BiPhoneCall } from "react-icons/bi";

const DepartmentToLearn = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="background17 text-white hidden lg:flex">
                <div className="max-w-screen-xl mx-auto xl:space-y-3 py-12 lg:py-28">
                    <div className="max-w-screen-xl mx-auto px-6 2xl:px-0">
                        <h1 className="pb-8 lg:mt-24 text-3xl md:text-4xl text-center xl:text-5xl font-semibold">Choose a department to<br /> Learn More</h1>
                        <Tabs>
                            <TabList className="flex items-center justify-center lg:gap-6 overflow-auto">
                                <Tab onClick={() => handleTabClick(0)} className={activeTab === 0 ?`flex items-center text-xs xl:text-base gap-4 border-t-8 border-t-[#006aff] bg-[#006aff] rounded-bl-lg py-4 px-8 font-bold` : `text-xs xl:text-base border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] flex items-center gap-4 py-4 px-8`}><FaHeadphones size={26} />Customer Support</Tab>
                                <Tab onClick={() => handleTabClick(1)} className={activeTab === 1 ? `flex items-center gap-4 border-t-8 border-t-[#006aff] bg-[#006aff] text-xs xl:text-base rounded-bl-lg py-4 px-8 font-bold` : `text-xs xl:text-base border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] flex items-center gap-4 py-4 px-8`}> <FaCalculator size={26}  />Finance & Accounting</Tab>
                                <Tab onClick={() => handleTabClick(2)} className={activeTab === 2 ? `flex text-xs xl:text-base items-center gap-4 border-t-8 border-t-[#006aff] bg-[#006aff] rounded-bl-lg py-4 px-8 font-bold` : `text-xs xl:text-base border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] flex items-center gap-4 py-4 px-8`}><FaLaptop size={26}  />Other Back-office</Tab>
                                <Tab onClick={() => handleTabClick(3)} className={activeTab === 3 ? `text-xs xl:text-base flex items-center gap-4 border-t-8 border-t-[#006aff] bg-[#006aff] rounded-bl-lg py-4 px-8 font-bold` : `text-xs xl:text-base border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] flex items-center gap-4 py-4 px-8`}><GoGraph size={26}  />Customer Success</Tab>
                                <Tab onClick={() => handleTabClick(4)} className={activeTab === 4 ? `text-xs xl:text-base flex items-center gap-4 border-t-8 border-t-[#006aff] bg-[#006aff] rounded-bl-lg py-4 px-8 font-bold` : `text-xs xl:text-base border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] flex items-center gap-4 py-4 px-8`}><BiPhoneCall size={26}  />Sales & Revenue</Tab>
                                <Tab onClick={() => handleTabClick(5)} className={activeTab === 5 ?`text-xs xl:text-base flex items-center gap-4 border-t-8 border-t-[#006aff] bg-[#006aff] rounded-bl-lg lg:py-4 xl:px-8 font-bold` : `text-xs xl:text-base border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] flex items-center gap-4 lg:py-4 xl:px-8`}><RxSpeakerLoud size={26} />Marketing</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="flex flex-col lg:flex-row justify-between w-full gap-12 items-center py-20">
                                    <div >
                                        <Image src="https://cdn-llelf.nitrocdn.com/AdehOXwxlXogRlVracgTpNrqrejKGzDj/assets/images/optimized/rev-7006202/catalystbpx.com/wp-content/uploads/2024/02/Business-Process-Outsourcing-BPO-Back-office-1-940x1024.webp" alt="image" width={433} height={472} />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="font-bold pb-4 text-xl">Improve customer retention with industry-leading CSAT and productivity.</h1>
                                        <p>Customer Support can be complicated and expensive, especially for younger businesses with maturing products. Our experience and relationships with talent from leading companies empower us to remove that burden for you. With Catalyst’s offshore teams, our clients reliably achieve SLAs and CSAT on par with teams in higher cost countries, at a fraction of the effort and cost.</p>
                                        <p className="pt-4">Customer Support roles we specialize in:</p>
                                        <div className="pt-6 flex flex-wrap gap-4">
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounting</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Payroll Management</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Tax Filings & Compliance</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounts Payable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Collections / Accounts Receivable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Order Operations</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Procurement</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Financial Planning & Analysis</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-col lg:flex-row justify-between w-full gap-12 items-center py-20">
                                    <div >
                                        <Image src="https://cdn-llelf.nitrocdn.com/AdehOXwxlXogRlVracgTpNrqrejKGzDj/assets/images/optimized/rev-7006202/catalystbpx.com/wp-content/uploads/2024/02/Business-Process-Outsourcing-BPO-Sales-Revenue-1-940x1024.webp" alt="image" width={433} height={472} />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="font-bold pb-4 text-xl">Improve customer retention with industry-leading CSAT and productivity.</h1>
                                        <p>Customer Support can be complicated and expensive, especially for younger businesses with maturing products. Our experience and relationships with talent from leading companies empower us to remove that burden for you. With Catalyst’s offshore teams, our clients reliably achieve SLAs and CSAT on par with teams in higher cost countries, at a fraction of the effort and cost.</p>
                                        <p className="pt-4">Customer Support roles we specialize in:</p>
                                        <div className="pt-6 flex flex-wrap gap-4">
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounting</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Payroll Management</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Tax Filings & Compliance</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounts Payable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Collections / Accounts Receivable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Order Operations</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Procurement</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Financial Planning & Analysis</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-col lg:flex-row justify-between w-full gap-12 items-center py-20">
                                    <div >
                                        <Image src="https://cdn-llelf.nitrocdn.com/AdehOXwxlXogRlVracgTpNrqrejKGzDj/assets/images/optimized/rev-7006202/catalystbpx.com/wp-content/uploads/2024/02/Business-Process-Outsourcing-BPO-Customer-Support-1-940x1024.webp" alt="image" width={433} height={472} />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="font-bold pb-4 text-xl">Improve customer retention with industry-leading CSAT and productivity.</h1>
                                        <p>Customer Support can be complicated and expensive, especially for younger businesses with maturing products. Our experience and relationships with talent from leading companies empower us to remove that burden for you. With Catalyst’s offshore teams, our clients reliably achieve SLAs and CSAT on par with teams in higher cost countries, at a fraction of the effort and cost.</p>
                                        <p className="pt-4">Customer Support roles we specialize in:</p>
                                        <div className="pt-6 flex flex-wrap gap-4">
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounting</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Payroll Management</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Tax Filings & Compliance</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounts Payable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Collections / Accounts Receivable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Order Operations</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Procurement</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Financial Planning & Analysis</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-col lg:flex-row justify-between w-full gap-12 items-center py-20">
                                    <div >
                                        <Image src="https://cdn-llelf.nitrocdn.com/AdehOXwxlXogRlVracgTpNrqrejKGzDj/assets/images/optimized/rev-7006202/catalystbpx.com/wp-content/uploads/2024/02/Business-Process-Outsourcing-BPO-Customer-Success-1-940x1024.webp" alt="image" width={433} height={472} />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="font-bold pb-4 text-xl">Improve customer retention with industry-leading CSAT and productivity.</h1>
                                        <p>Customer Support can be complicated and expensive, especially for younger businesses with maturing products. Our experience and relationships with talent from leading companies empower us to remove that burden for you. With Catalyst’s offshore teams, our clients reliably achieve SLAs and CSAT on par with teams in higher cost countries, at a fraction of the effort and cost.</p>
                                        <p className="pt-4">Customer Support roles we specialize in:</p>
                                        <div className="pt-6 flex flex-wrap gap-4">
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounting</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Payroll Management</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Tax Filings & Compliance</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounts Payable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Collections / Accounts Receivable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Order Operations</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Procurement</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Financial Planning & Analysis</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-col lg:flex-row justify-between w-full gap-12 items-center py-20">
                                    <div >
                                        <Image src="https://cdn-llelf.nitrocdn.com/AdehOXwxlXogRlVracgTpNrqrejKGzDj/assets/images/optimized/rev-7006202/catalystbpx.com/wp-content/uploads/2024/02/Business-Process-Outsourcing-BPO-Finance-Accounting-2-jpg.webp" alt="image" width={433} height={472} />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="font-bold pb-4 text-xl">Improve customer retention with industry-leading CSAT and productivity.</h1>
                                        <p>Customer Support can be complicated and expensive, especially for younger businesses with maturing products. Our experience and relationships with talent from leading companies empower us to remove that burden for you. With Catalyst’s offshore teams, our clients reliably achieve SLAs and CSAT on par with teams in higher cost countries, at a fraction of the effort and cost.</p>
                                        <p className="pt-4">Customer Support roles we specialize in:</p>
                                        <div className="pt-6 flex flex-wrap gap-4">
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounting</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Payroll Management</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Tax Filings & Compliance</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounts Payable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Collections / Accounts Receivable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Order Operations</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Procurement</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Financial Planning & Analysis</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="flex flex-col lg:flex-row justify-between w-full gap-12 items-center py-20">
                                    <div >
                                        <Image src="https://cdn-llelf.nitrocdn.com/AdehOXwxlXogRlVracgTpNrqrejKGzDj/assets/images/optimized/rev-7006202/catalystbpx.com/wp-content/uploads/2024/02/Business-Process-Outsourcing-BPO-Marketing-1-940x1024.webp" alt="image" width={433} height={472} />
                                    </div>
                                    <div className="flex-1">
                                        <h1 className="font-bold pb-4 text-xl">Improve customer retention with industry-leading CSAT and productivity.</h1>
                                        <p>Customer Support can be complicated and expensive, especially for younger businesses with maturing products. Our experience and relationships with talent from leading companies empower us to remove that burden for you. With Catalyst’s offshore teams, our clients reliably achieve SLAs and CSAT on par with teams in higher cost countries, at a fraction of the effort and cost.</p>
                                        <p className="pt-4">Customer Support roles we specialize in:</p>
                                        <div className="pt-6 flex flex-wrap gap-4">
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounting</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Payroll Management</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Tax Filings & Compliance</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Accounts Payable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Collections / Accounts Receivable</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Order Operations</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Procurement</button>
                                            <button className="border-t-8 bg-white text-black rounded-bl-lg font-bold border-t-[#006aff] py-4 px-8">Financial Planning & Analysis</button>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepartmentToLearn;