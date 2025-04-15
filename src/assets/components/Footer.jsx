import React from "react";

function Footer() {
  return (
    <div className="h-[500px] bg-[#78b132] text-white relative">
      <div className=" flex justify-between p-[60px]">
        <div className=" flex flex-col gap-2">
          <h3 className="text-black font-bold text-[24px] ">Customer Support</h3>
          <a href="">Help Center</a>
          <a href="">User Guide</a>
          <a href="">Return & Cancellation Policy</a>
          <a href="">Shipping & Delivery Policy</a>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className="text-black font-bold text-[24px]">About Us</h3>
          <a href="">About Our Company</a>
          <a href="">Success Stories</a>
          <a href="">Jobs & Careers</a>
          <a href="">Contact Us</a>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className="text-black font-bold text-[24px]">Our Services</h3>
          <a href="">Advertise with Us</a>
          <a href="">Book Domains</a>
          <a href="">TI Pay</a>
          <a href="">Trade Khata </a>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className="text-black font-bold text-[24px]">For Sellers</h3>
          <a href="">Display New Products</a>
          <a href="">Buy Trade Leads</a>
          <a href="">Subscribe Buy Trade Alerts</a>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className="text-black font-bold text-[24px]">For Buyers</h3>
          <a href="">Post Your Requirement</a>
          <a href="">Browse Suppliers</a>
          <a href="">Subscribe Sell Trade Alerts</a>
        </div>
        <div className=" flex flex-col gap-2">
          <h3 className="text-black font-bold text-[24px]">Directory</h3>
          <a href="">Manufacturers</a>
          <a href="">Business Services</a>
          <a href="">Industry Hubs</a>
          <a href="">Sitemap</a>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h3 className="text-black font-bold text-[24px]">Countries</h3>
        <div className="flex [&>*:not(:last-child)]:after:content-['|'] [&>*]:after:mx-2 [&>*]:after:text-orange-400">
          <a href="">India</a>
          <a href="">Japan</a>
          <a href="">Canada</a>
          <a href="">Taiwan</a>
          <a href="">Thailand</a>
          <a href="">Malaysia</a>
          <a href="">Indonesia</a>
          <a href="">UAE</a>
          <a href="">Saudi</a>
          <a href="">Arabia</a>
          <a href="">USA</a>
          <a href="">Iran</a>
        </div>
      </div>
      <div className="absolute bottom-0 bg-green-700 w-full p-5">
        <p className="flex justify-center">
          COPYRIGHT © 2024 | All Rights Reserved By Bulkagrochem
        </p>
      </div>
    </div>
  );
}

export default Footer;
