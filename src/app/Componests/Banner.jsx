'use client'
import React from 'react';
import Slider from "react-slick";
import banner from "../Images/bannerone.jpg"
import banner1 from '../Images/bannertwo.jpg'
import banner2 from '../Images/bannerthree.jpg'
import BannerText from './BannerText';
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from 'next/image';
const Banner = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
    return (
       <div className="reletive">
         <Slider {...settings}>
       <div>
       <Image
            src={banner}
            alt="bannerone"
            className="w-full h-full relative"
            priority
          />
     
       </div>



       <div>
       <Image
            src={banner1}
            alt="bannerone"
            className="w-full h-full relative"
            priority
          />
    
       </div>
       <div>
       <Image
            src={banner2}
            alt="bannerone"
            className="w-full h-full relative"
            priority
          />
    
       </div>


            
      
      

        
      </Slider>
       </div>
    );
};

export default Banner;