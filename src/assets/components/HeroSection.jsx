import React from "react";
import { FiShoppingCart } from "react-icons/fi";

function HeroSection() {
  return (
    <div className="px-[60px] py-[100px] ">
      <h3 className="text-black text-[30px] font-semibold">
        Trending Products
      </h3>
      <div className="underline"></div>
      <div className=" flex gap-2">
        <div className="heroSection-product group">
          <div className="overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738902231dsyqDuB7.webp"
              alt=""
              className="heroSection-image"
            />
          </div>
          <div className=" heroSection-details ">
            <div>
              {" "}
              <p> Thiostar</p>
              <p>₹ 200 </p>
            </div>

            <div className=" heroSection-cart">
              <FiShoppingCart className="text-[24px]  " />
            </div>
          </div>
        </div>
        <div className="heroSection-product group">
          <div className="overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/173890129675Gs5ksG.webp"
              alt=""
              className="heroSection-image"
            />
          </div>
          <div className=" heroSection-details ">
            <div>
              {" "}
              <p> Agressor</p>
              <p>₹ 200 </p>
            </div>

            <div className=" heroSection-cart">
              <FiShoppingCart className="text-[24px]  " />
            </div>
          </div>
        </div>
        <div className="heroSection-product group">
          <div className="overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/17388214388uYA2SsI.webp"
              alt=""
              className="heroSection-image"
            />
          </div>
          <div className=" heroSection-details ">
            <div>
              {" "}
              <p> Unimol 10000</p>
              <p>₹ 200 </p>
            </div>

            <div className=" heroSection-cart">
              <FiShoppingCart className="text-[24px]  " />
            </div>
          </div>
        </div>
        <div className="heroSection-product group">
          <div className="overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738902231dsyqDuB7.webp"
              alt=""
              className="heroSection-image"
            />
          </div>
          <div className=" heroSection-details ">
            <div>
              {" "}
              <p> Thiostar</p>
              <p>₹ 200 </p>
            </div>

            <div className=" heroSection-cart">
              <FiShoppingCart className="text-[24px]  " />
            </div>
          </div>
        </div>
        <div className="heroSection-product group">
          <div className="overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738819576adWrPkME.webp"
              alt=""
              className="heroSection-image"
            />
          </div>
          <div className=" heroSection-details ">
            <div>
              {" "}
              <p> Unimol 3000</p>
              <p>₹ 200 </p>
            </div>

            <div className=" heroSection-cart">
              <FiShoppingCart className="text-[24px]  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
