import { FiHome } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
const Sidebar = () => {
  return (
    <section className="bg-white h-screen shadow-md w-72 flex flex-col justify-between ">
      <div className="text-lg font-medium capitalize py-8">
        {/* Home Icon */}
        <a href="#" className="flex items-center py-4 px-6  text-pink-400">
          <FiHome />
          <span className="px-3">Home</span>
        </a>
        {/* Add Post Icon */}
        <a href="#" className="flex items-center py-4 px-6 ">
          <MdOutlineAddPhotoAlternate />
          <span className="px-3">create post</span>
        </a>
        {/* Bell Icon */}
        <a href="#" className="flex items-center py-4 px-6 ">
          <RiCompass3Line />
          <span className="px-3">explore</span>
        </a>
        <a href="#" className="flex items-center py-4 px-6 ">
          <HiOutlineBookmark />
          <span className="px-3">saved</span>
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
