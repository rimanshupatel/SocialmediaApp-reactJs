import { FiHome } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";
import { HiOutlineBookmark } from "react-icons/hi";
import { IoExitOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../AppWrite/auth";
import { useDispatch } from "react-redux";
import { logOut } from "../../App/AuthSlice";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const authStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();

  const logoutHandler = () => {
    const dispatch = useDispatch();
    const LogOut = () => {
      authService.logout().then(() => {
        dispatch(logOut);
      });
    };
  };

  const navLinks = [
    {
      name: "Home",
      url: "/home",
      active: true,
      icons: <FiHome />,
    },
    {
      name: "create post",
      url: "/newPost",
      active: authStatus,
      icons: <MdOutlineAddPhotoAlternate />,
    },
    {
      name: "Explore",
      url: "/explore",
      active: authStatus,
      icons: <RiCompass3Line />,
    },
    {
      name: "Saved",
      url: "/saved",
      active: authStatus,
      icons: <HiOutlineBookmark />,
    },
    {
      name: "Notifications",
      url: "/notifications",
      active: authStatus,
      icons: <FaRegBell />,
    },
  ];
  return (
    <header className="bg-white h-screen py-8 px-6 fixed shadow-md sm:w-72 w-56 flex flex-col justify-between">
      <div>
        <div className="flex items-center">
          <span className="  text-2xl font-bold">Talkie</span>
        </div>
      </div>
      <ul className="text-lg font-medium capitalize py-8">
        {navLinks.map((links) =>
          links.active ? (
            <li key={links.name} className=" py-4">
              <Link to={links.url} className="flex items-center">
                {links.icons}
                <span className="px-3">{links.name}</span>
              </Link>
            </li>
          ) : null
        )}
      </ul>
      {authStatus && (
        <div className="mb-4">
          <div className=" text-xl">
            <Link
              onClick={logoutHandler}
              className="flex items-center font-semibold ml-4"
            >
              <IoExitOutline />
              <span className="ml-2">logout</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Sidebar;
