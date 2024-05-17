import { FiHome } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoExitOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <header className="bg-white h-screen py-8 px-6 fixed shadow-md sm:w-72 w-56 flex flex-col justify-between">
      <div>
        <div className="flex items-center">
          <span className="  text-2xl font-bold">Talkie</span>
        </div>
        <div className="text-lg font-medium capitalize py-8">
          {/* Home Icon */}
          <a href="#" className="flex items-center py-4 text-pink-400">
            <FiHome />
            <span className="px-3">Home</span>
          </a>
          {/* Add Post Icon */}
          <a href="#" className="flex items-center py-4">
            <MdOutlineAddPhotoAlternate />
            <span className="px-3">create post</span>
          </a>
          {/* explore Icon */}
          <a href="#" className="flex items-center py-4">
            <RiCompass3Line />
            <span className="px-3">explore</span>
          </a>
          <a href="#" className="flex items-center py-4">
            <HiOutlineBookmark />
            <span className="px-3">saved</span>
          </a>

          <a href="# " className="flex items-center py-4">
            <FaRegBell />
            <span className="px-3">notifications</span>
          </a>
        </div>
      </div>
      <div className="mb-4">
        <div className=" text-xl">
          <Link to="/signin" className="flex items-center font-semibold ml-4">
            <IoExitOutline />
            <span className="ml-2">logout</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
