import footer from "../assets/footer.png";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#f99f1c] flex flex-col lg:flex-row justify-center items-center mt-5">
      <div className=" md:w-3/4 my-4">
        <div className="flex justify-center items-center relative">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input w-full md:w-2/3 lg:w-2/4 xl:w-2/5 rounded-2xl focus:outline-none focus:border-none p-7"
          />
          <div className="flex items-center gap-2 md:bg-[#fc6011] rounded-2xl p-2 md:p-3 absolute ml-36 md:ml-56 xl:ml-72">
            <h1 className="text-[#fe613a] md:text-white  md:text-base font-medium">Subscribe </h1>
            <IoMdArrowForward className="md:text-lg text-[#fe613a] md:text-white font-medium" />
          </div>
        </div>

        <div className="flex justify-around flex-col lg:flex-row items-center gap-5">
          <div className="space-y-9 mt-6 md:mt-2">
            <h1 className="text-[#332526] text-4xl font-bold lg:mt-32 text-center lg:text-start">
              pti<span className="text-[#fe613a]">.</span>
            </h1>
            <p className="text-[#332526] text-base font-bold">
              Copyright©Tripp.All Right Reserved
            </p>
          </div>
          <div className="flex items-center  gap-2 lg:mt-36">
            <div className="bg-[#feddba] rounded-full  border-none w-[54px] h-[54px] flex justify-center items-center">
              <FaGoogle className="text-[#f99f1c] " />
            </div>
            <div className="bg-[#feddba] rounded-full border-none w-[54px] h-[54px] flex justify-center items-center">
              <FaTwitter className="text-[#f99f1c]" />
            </div>
            <div className="bg-[#feddba] rounded-full border-none w-[54px] h-[54px] flex justify-center items-center">
              <FaInstagram className="text-[#f99f1c]" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/4">
        <img src={footer} alt="" className=" hidden md:block" />
      </div>
    </div>
  );
};

export default Footer;
