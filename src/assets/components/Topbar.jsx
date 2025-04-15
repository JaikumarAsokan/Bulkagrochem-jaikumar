import React from "react";
import { CiUser } from "react-icons/ci";

function Topbar() {
  return (
    <>
      <div className="flex justify-between px-[60px] py-[1px] bg-[#c6e4a6]">
        <div className="flex items-center">
          <p className="link-gray font-medium ">
            Contact & Support : +91 7861894132
          </p>
        </div>

        <div className="flex gap-1">
          <a href="" className="link-gray flex items-center">
            <CiUser className=" text-[20px] mr-1" />
            Login
          </a>
          <span className="text-[#FEC536]">/</span>
          <a href="" className="link-gray flex items-center">
            <CiUser className="text-[20px] mr-1" />
            Login as Seller
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Topbar;
