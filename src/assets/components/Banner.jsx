import React from "react";
import Slider from "react-slick";

function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  return (
    // <div className="">
    <div className="h-[580px] overflow-hidden relative">
      <div className="absolute w-[700px] left-[60px] top-[50px] z-10">
        <span className="text-white text-[50px] font-bold">
          <p>Top - quality</p>
          <p>
            <span className="text-[#78b132]">Agricultural</span> products{" "}
          </p>
          <p>in BULK at the best prices for farmers.</p>
        </span>

        <div className=" text-orange-400 text-[24px] flex [&>*:not(:last-child)]:after:content-['|'] [&>*]:after:mx-2 [&>*]:after:text-white">
          <a href=""> Bio-fertilizers</a>
          <a href="">Stimulants</a>
          <a href="">Other agricultural products</a>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <img
            src="/images/bio-plant-two.PNG"
            alt=""
            className="w-full object-fill"
          />
          <img
            src="/images/banner-two.webp"
            alt=""
            className="w-full object-fill"
          />
        </Slider>
      </div>
    </div>
    // </div>
  );
}

export default Banner;
