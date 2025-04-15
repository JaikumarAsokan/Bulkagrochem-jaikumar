import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function LatestProducts() {
  return (
    <div className="bg-gradient-to-b from-orange-400 to-white  h-full px-[60px] py-[30px] ">
      <p className="text-black text-[30px] font-semibold">Latest Products</p>
      <div className="underline"></div>
      <div className="grid grid-cols-3 gap-2 ">
        <div className="group latestProducts-product">
          <div className="w-[250px] overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738819576adWrPkME.webp"
              alt=""
              className="w-full heroSection-image"
            />
          </div>

          <div className="text-black ">
            <p className="font-semibold text-[24px]">Unimol 3000</p>
            <p className="text-gray-400">Insecticide new</p>
            <p className="text-gray-400">Unicrop</p>
            <div className="get-enquiry-btn mt-3">
              <button className="">Get Inquiry</button>
            </div>
          </div>
        </div>
        <div className="group latestProducts-product">
          <div className="w-[250px] overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738822529CBfNiIQh.webp"
              alt=""
              className="w-full heroSection-image"
            />
          </div>

          <div className="text-black ">
            <p className="font-semibold text-[24px]">Pre Alert</p>
            <p className="text-gray-400">Insecticide new</p>
            <p className="text-gray-400">Unicrop</p>
            <div className="get-enquiry-btn mt-3">
              <button className="">Get Inquiry</button>
            </div>
          </div>
        </div>
        <div className="group latestProducts-product">
          <div className="w-[250px] overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738821067pGKBIRlX.webp"
              alt=""
              className="w-full heroSection-image"
            />
          </div>

          <div className="text-black ">
            <p className="font-semibold text-[24px]">Uni Pride 30</p>
            <p className="text-gray-400">Insecticide new</p>
            <p className="text-gray-400">Unicrop</p>
            <div className="get-enquiry-btn mt-3">
              <button className="">Get Inquiry</button>
            </div>
          </div>
        </div>
        <div className="group latestProducts-product">
          <div className="w-[250px] overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738820418WCvty11L.webp"
              alt=""
              className="w-full heroSection-image"
            />
          </div>

          <div className="text-black ">
            <p className="font-semibold text-[24px]">Unimol 300</p>
            <p className="text-gray-400">Insecticide new</p>
            <p className="text-gray-400">Unicrop</p>
            <div className="get-enquiry-btn mt-3">
              <button className="">Get Inquiry</button>
            </div>
          </div>
        </div>
        <div className="group latestProducts-product">
          <div className="w-[250px] overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/173890129675Gs5ksG.webp"
              alt=""
              className="w-full heroSection-image"
            />
          </div>

          <div className="text-black ">
            <p className="font-semibold text-[24px]">Agressor</p>
            <p className="text-gray-400">Insecticide new</p>
            <p className="text-gray-400">Unicrop</p>
            <div className="get-enquiry-btn mt-3">
              <button className="">Get Inquiry</button>
            </div>
          </div>
        </div>
        <div className="group latestProducts-product">
          <div className="w-[250px] overflow-hidden">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
              className="w-full heroSection-image p-14 bg-white"
            />
          </div>

          <div className="text-black ">
            <p className="font-semibold text-[24px]">Metrixen</p>
            <p className="text-gray-400">Insecticide new</p>
            <p className="text-gray-400">Unicrop</p>
            <div className="get-enquiry-btn mt-3">
              <button className="">Get Inquiry</button>
            </div>
          </div>
        </div>
      </div>
      <div className="view-all-products mx-auto my-10">
        <button>View All Products </button>
        <FaArrowRightLong />
      </div>
    </div>
  );
}

export default LatestProducts;
