"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "../../../assets/safe-flexible-and-innovative-image-deskstop.jpg";
import image4 from "../../../assets/safe-flexible-and-innovative-text-deskstop-4.png";
import image2 from "../../../assets/core-purpose-bg-deskstop-3.jpg";
import image5 from "../../../assets/core-purpose-text-deskstop-1.png";
import image3 from "../../../assets/O-96827361_l-2.jpg";
import image6 from "../../../assets/h1-21APR-v2.png";
import image9 from "../../../assets/O-96827503_l-2.jpg";
import image10 from "../../../assets/h2-2-v2.png";
import image11 from "../../../assets/ACQ-AU-onshore-slider-image-16-10-2020-bg.jpg";
import image12 from "../../../assets/ACQ-AU-onshore-slider-image-16-10-2020-desktop.png";
import image13 from "../../../assets/safe-flexible-and-innovative-text-deskstop-v2.png";
import image14 from "../../../assets/ACQ-AU-workspaces-slider-image-bg.jpg";
import image15 from "../../../assets/ACQ-AU-workspaces-slider-image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Banner.module.css"; // Import CSS module for custom styles

const Banner = () => {
    const sliderRef = useRef(null); // Ref to the Slider component
    const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide index

    // Click handler for dots
    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index); // Go to the specified slide index
        setCurrentSlide(index); // Update the current slide index
    };

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        beforeChange: (current, next) => setCurrentSlide(next)
    };

    return (
        <div className="relative overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px]"
                        src={image1}
                        alt="image1"
                    />
                    <div className="hidden lg:block absolute bottom-0 2xl:left-60">
                        <Image
                            src={image4}
                            alt="image1" className="p-60"
                        />
                    </div>
                    <div className="lg:hidden absolute bottom-0 md:left-36">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/safe-flexible-and-innovative-text-mobile-4-980x545.png"
                            alt="image1" height={400} width={400} className="px-4 pb-52"
                        />
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px]"
                        src={image2}
                        alt="image1"
                    />
                    <div className="hidden lg:block absolute bottom-0 2xl:left-60">
                        <Image
                            src={image5}
                            alt="image1" className="p-60"
                        />
                    </div>
                    <div className="lg:hidden absolute bottom-0 md:left-36">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/core-purpose-text-mobile-1.png"
                            alt="image1" height={400} width={400} className="px-6 pb-52"
                        />
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px]"
                        src={image3}
                        alt="image1"
                    />
                    <div className="hidden lg:block absolute bottom-0 2xl:left-60">
                        <Image
                            src={image6}
                            alt="image1" className="px-20 pb-12"
                        />
                        <p className="text-white lg:px-72 lg:pb-72 text-[22px]">Our business process outsourcing solutions in Australia, the Philippines and the Dominican Republic will provide you with platforms for growth, combining skilled resources with the best technology.</p>
                    </div>
                    <div className="lg:hidden absolute bottom-0 md:left-36">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/h1-21APR-mob.png"
                            alt="image1" height={400} width={400} className="px-6 pb-4"
                        />
                        <p className="text-white px-6 pb-40 text-xl">Our business process outsourcing solutions in Australia, the Philippines and the Dominican Republic will provide you with platforms for growth, combining skilled resources with the best technology.</p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px] md:h-[400px]"
                        src={image14}
                        alt="image3"
                    />
                    <div className="hidden lg:block absolute bottom-0 2xl:left-60">
                        <Image
                            src={image15}
                            alt="image1" className="px-4 pb-72 md:p-20 lg:pb-72"
                        />
                    </div>
                    <div className="lg:hidden absolute bottom-0 md:left-36">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/ACQ-AU-workspaces-slider-image-mob.png"
                            alt="image1" height={400} width={400} className="px-6 pb-36"
                        />
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px] md:h-[400px]"
                        src={image9}
                        alt="image3"
                    />
                    <div className="hidden lg:inline-block absolute bottom-0 2xl:left-96">
                        <Image
                            src={image10}
                            alt="image1" className="pb-12 px-8"
                        />
                        <p className="text-white text-[22px] pb-40">Expand your digital capabilities Boost customer experience and process efficiencies with onshore and offshore BPO providers like us by leveraging our investments in automation technology and people expertise.</p>
                    </div>
                    <div className="lg:hidden absolute bottom-0 md:left-36">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/acq-header-mob2-3.png"
                            alt="image1" height={400} width={400} className="px-6 pb-6"
                        />
                        <p className="text-white px-6 pb-36">Expand your digital capabilities Boost customer experience and process efficiencies with onshore and offshore BPO providers like us by leveraging our investments in automation technology and people expertise.</p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px] md:h-[400px]"
                        src={image11}
                        alt="image3"
                    />
                    <div className="hidden lg:inline-block absolute bottom-0 2xl:left-60">
                        <Image
                            src={image12}
                            alt="image1" className="p-12"
                        />
                        <p className="text-white text-[22px] px-44 pb-60">We offer intelligent contact centre and back office solutions for Australian businesses with complete onshore AND offshore support.</p>
                    </div>
                    <div className="lg:hidden absolute bottom-0 px-12 md:px-40">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/ACQ-AU-onshore-slider-image-16-10-2020-mobile.png"
                            alt="image1" height={400} width={400} layout="responsive" className="pb-6"
                        />
                        <p className="text-white pb-36">We offer intelligent contact centre and back office solutions for Australian businesses with complete onshore AND offshore support.</p>
                    </div>
                </div>
                <div className="relative">
                    <Image
                        className="md:w-full object-cover min-h-screen lg:h-[800px]"
                        src={image1}
                        alt="image1"
                    />
                    <div className="hidden lg:block absolute bottom-0 2xl:left-60">
                        <Image
                            src={image13}
                            alt="image1" className="p-60"
                        />
                    </div>
                    <div className="lg:hidden absolute bottom-0 md:left-36">
                        <Image
                            src="https://acquirebpo.com/wp-content/uploads/img/safe-flexible-and-innovative-text-mobile-v2-980x966.png"
                            alt="image1" height={400} width={400} className="px-4 pb-40"
                        />
                    </div>
                </div>
            </Slider>
            <div className={styles.dots}>
                {/* Render dots dynamically based on the number of slides */}
                {[...Array(7).keys()].map((index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;