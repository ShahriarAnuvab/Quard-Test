import { LuUser2 } from "react-icons/lu";
import DropDown from "./DropDown";
import { IoSearchOutline } from "react-icons/io5";
const NavBar = () => {
  return (
    <div className="pt-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center gap-2 md:gap-10">
          <div className="">
            <h1 className="text-[#332526] text-4xl font-bold">pti.</h1>
          </div>

          <div className="flex items-center justify-center w-full ">
            <input
              type="text"
              placeholder="Search Audiobook"
              className="input focus:outline-none focus:border-none xl:p-6  md:w-full"
            />
            <IoSearchOutline className="absolute ml-10 md:-ml-60 lg:-ml-[820px]  xl:ml-0 xl:left-72 text-[#f99f1c] text-lg mr-4 mt-1" />
            <DropDown></DropDown>
          </div>
          <LuUser2 className="text-4xl bg-[#f99f1c] text-white rounded-full p-1 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
