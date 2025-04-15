import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Categories() {
  return (
    <div className="flex flex-row justify-between px-[60px]">
      <div className=" sticky top-[80px] h-fit ">
        <p className="text-black text-[30px] font-semibold ">Categories</p>
        <div className="underline"></div>
        <div className="flex gap-5">
          <div className="basis-2/4 overflow-hidden w-[330px] h-[510px] relative">
            <img
              src="https://bulkagrochem.ca/assets/images/categoriesbg.webp"
              alt=""
              className="rounded-md w-full h-full"
            />
            <div className="absolute bottom-2 p-5 bg-black/50 w-full ">
              <p className="text-white text-[24px]">Best Categories of </p>
              <div className="flex text-[24px]">
                {" "}
                <p className="text-green-600">chem</p>
                <p className="text-orange-400">Bulkagro</p>
                <p className="text-white">.ca</p>
              </div>

              <div className="view-all-products">
                <a href="">View All Categories</a> <FaArrowRightLong />
              </div>
            </div>
          </div>
          <div className="basis-2/4 overflow-hidden w-[330px] h-[510px] ">
            <img
              src="/Bulkagrochem-jaikumar/images/corn-4896300_1920-2.jpg"
              alt=""
              className="rounded-md  w-full h-full  object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 basis-2/4 mt-[75px]">
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">Biological Products</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">PGRs</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">Pesticides</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">Biological Products</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">PGRs</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">Pesticides</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
        <div className="flex flex-col border-2 relative  p-5 hover:border-green-500">
          <div className="absolute w-20 right-5 top-0 ">
            <img
              src="https://bulkagrochem.ca/assets/images/products/1738903264sHMES2Bb.webp"
              alt=""
            />
          </div>

          <h3 className="font-semibold text-[20px]">Biological Products</h3>
          <div className="underline"></div>
          <span className="flex flex-col gap-2">
            <a href="">Pesticides</a>
            <a href="">Acetobacter</a>
            <a href="">Nitrogen Phosphorus </a>
            <a href="">Potassium</a>
            <a href="">Azospirillum</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Categories;
