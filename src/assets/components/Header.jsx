import React, { useEffect, useState } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdHelp } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // <div className="flex items-center justify-between px-[60px] py-[5px] shadow-xl shadow-gray-100">
    <div
      className={`transition-all duration-500 ${
        showHeader
          ? "sticky top-[-1px] z-50 opacity-100 translate-y-0 duration-500 shadow-lg "
          : " z-50 transition-all duration-500  "
      } flex items-center justify-between px-[60px] py-[5px]  bg-white `}
    >
      <div class="w-[250px] h-[70px] overflow-hidden relative">
        <img
          src="https://bulkagrochem.ca/assets/images/1742464809bulkagrochemlogopng.png"
          alt="Logo"
          class="absolute left-[-11px] top-0"
        />
      </div>

      <div>
        <form action="" className=" flex items-center w-[600px] relative">
          <select
            name="cars"
            id="cars"
            className="text-[15px] text-gray-500 hover:text-black cursor-pointer w-[70px] h-[40px] border-x-[10px] border-gray-100 hover:border-gray-200 focus:outline-none bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-[#78b132] absolute left-0 z-10 rounded-l-md"
          >
            <option className=" bg-white">ALL</option>
            <option className=" bg-white">Biological Products</option>
            <option className=" bg-white">pgrs</option>
            <option className=" bg-white">flowering-stimulant</option>
            <option className=" bg-white">silicon</option>
            <option className=" bg-white">hydro-gel</option>
            <option className=" bg-white">organic-herbal-products</option>
            <option className=" bg-white">fertilizers</option>
            <option className=" bg-white">aquaculture</option>
            <option className=" bg-white">gardenica</option>
            <option className=" bg-white">other</option>
            <option className=" bg-white">pgr-new</option>
            <option className=" bg-white">fungicide-new</option>
            <option className=" bg-white">insecticide-new</option>
            <option className=" bg-white">herbicide-new</option>
          </select>
          <input
            type="text"
            placeholder="Search Products. . ."
            className="w-full h-[40px] focus:outline-none  focus:ring-2 focus:ring-[#78b132] relative border pl-[75px] rounded-md"
          />
          <button
            type="submit "
            className="absolute right-0 h-[40px] w-[45px]  bg-[#78b132] hover:bg-[#6c9f2d] rounded-r-md"
          >
            <IoSearchSharp className="text-[40px] px-[8px] m-auto text-white" />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-5">
        <a href="" className=" link-black flex items-center gap-1 ">
          <FaBagShopping className="link-black" />
          Shopping
        </a>
        <a href="" className="flex items-center gap-1 link-black">
          <IoMdHelp />
          Help
        </a>
      </div>
    </div>
  );
}

export default Header;
