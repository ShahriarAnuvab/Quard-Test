import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="relative inline-block ">
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDropdown}
          className="btn m-1 bg-[#ffffff] cursor-pointer p-4"
        >
          MENU
          <MdOutlineKeyboardArrowDown className="text-[#f99f1c] text-lg absolute ml-14" />
        </div>
        {isOpen && (
          <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box sm:absolute sm:right-0">
            {/* Responsive classes added */}
            <li>
              <Link to='/'
                className=" hover:text-[#f99f1c]"
               
                onClick={toggleDropdown}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                className=" hover:text-[#f99f1c]"
               
                onClick={toggleDropdown}
              >
                Details
              </a>
            </li>
            <li>
              <a
                className=" hover:text-[#f99f1c]"
               
                onClick={toggleDropdown}
              >
                Category
              </a>
            </li>
            <li>
              <a
                className=" hover:text-[#f99f1c]"
               
                onClick={toggleDropdown}
              >
              My Favourites
              </a>
            </li>
            <li>
              <a
                className=" hover:text-[#f99f1c]"
               
                onClick={toggleDropdown}
              >
               Profile
              </a>
            </li>
            <li>
              <a
                className=" hover:text-[#f99f1c]"
               
                onClick={toggleDropdown}
              >
                Log In/ <br />
                Sign Up
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
