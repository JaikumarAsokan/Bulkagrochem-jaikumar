import React from "react";
import Slider from "react-slick";
import { FiShoppingCart } from "react-icons/fi";

function ProductsYouMayLIke() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="px-[60px] py-[100px]">
      <p className="text-black text-[30px] font-semibold ">
        Products You May Like
      </p>
      <div className="underline"></div>
      <div className="flex flex-row justify-between gap-2">
        <div className="w-[400px] h-[600px] overflow-hidden basis-1/4">
          <video
            className="w-full h-full  object-cover rounded shadow-lg"
            // controls
            autoPlay
            muted
            loop
          >
            <source
              src="/Bulkagrochem-jaikumar/vedios/fertilizing-seedlings.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-5 justify-between gap-2 basis-3/4">
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
                src="https://bulkagrochem.ca/assets/images/products/17388218071GkUEEif.webp"
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
                src="https://bulkagrochem.ca/assets/images/products/17388218071GkUEEif.webp"
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
        </div>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
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
                src="https://bulkagrochem.ca/assets/images/products/17388218071GkUEEif.webp"
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
        </Slider>
      </div>
    </div>
  );
}

export default ProductsYouMayLIke;
