import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="w-full  shadow-md bg-white text-black mainFont fixed z-[99]">
      <div className="container mx-auto flex justify-between items-center  h-16">
        {/* Logo */}
        <div className="flex items-center">
          <span className="  text-2xl font-bold">Talkie</span>
        </div>

        {/* Middle Links */}
        <div className="flex items-center justify-center text-2xl ">
          <a
            href="#"
            className="py-4 px-8 focus:text-pink-400 focus:border-b-[3px] focus:border-pink-400"
          >
            <FiHome />
          </a>
          <a href="#" className="py-4  px-8 text-3xl ">
            <HiOutlinePencilAlt />
          </a>
          <a href="#" className="py-4  px-8">
            <RxDashboard />
          </a>
        </div>

        {/* Right Link */}
        <div className="flex text-2xl">
          <a href="# " className="mx-4">
            <FaRegBell />
          </a>
          <Link to="/signin" className="font-semibold ml-4">
            <FaRegUserCircle />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
