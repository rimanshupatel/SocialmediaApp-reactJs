// import UploadContent from "./UploadContent";
// import UploadBar from "./UploadBar";
import test1 from "../../assets/images/test1.jpg";
import test2 from "../../assets/images/test2.jpg";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
export default function MiddleBar() {
  return (
    <>
      <div className="">
        <div className="w-full sm:w-[45rem] p-4 capitalize">
          <h1 className="text-3xl font-bold ">home feed</h1>
          {/* Create Post Section */}
          <div className="mb-4 p-4 bg-white rounded-lg shadow-md">
            <div className="flex space-x-4">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <input
                type="text"
                placeholder="What's on your mind?"
                className="flex-grow p-2 border border-gray-300 rounded-full"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <span>
                  <MdOutlineInsertPhoto />
                </span>
                <span>Photo/Video</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                <span>📅</span>
                <span>Event</span>
              </button>
            </div>
          </div>

          {/* Feed Section */}
          <div className="space-y-4 my-8">
            {/* Example Post */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">User Name</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="mt-4">This is an example post content.</p>
              <img src={test1} alt={test1} className="rounded-lg my-4" />
              <div className="mt-4 flex justify-between">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <span>👍</span>
                  <span>Like</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <span>💬</span>
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <span>🔁</span>
                  <span>Share</span>
                </button>
              </div>
            </div>
            {/* Add more posts as needed */}
          </div>

          <div className="space-y-4">
            {/* Example Post */}
            <div className="p-4 bg-white rounded-lg shadow-md">
              <div className="flex space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">User Name</h3>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="mt-4">This is an example post content.</p>
              <img src={test2} alt={test2} className="rounded-lg my-4" />
              <div className="mt-4 flex justify-between">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <span>
                    <FaHeart />
                  </span>
                  <span>0</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <span>💬</span>
                  <span>Comment</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <span>
                    <FaBookmark />
                  </span>
                  <span>saved</span>
                </button>
              </div>
            </div>
            {/* Add more posts as needed */}
          </div>
        </div>
      </div>
    </>
  );
}
