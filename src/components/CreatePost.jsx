import React, { useState } from "react";
import { BiSolidImageAdd } from "react-icons/bi";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log({ title, image });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg capitalize">
      <h2 className="text-2xl font-bold  mb-4  text-center text-gray-800 ">
        Create a Post
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-lg font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-xl font-medium text-gray-700 my-2"
          >
            Upload Image
          </label>
          <div className="flex flex-col items-center justify-center p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
            <div className="relative w-full max-w-xs">
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
              <div className="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg bg-white">
                {image ? (
                  <img
                    src={image}
                    alt="Selected"
                    className="object-cover w-full h-full rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl bg-gray-100 p-4 rounded-full text-center">
                      <BiSolidImageAdd />
                    </span>

                    <h1 className="text-xl font-semibold">Add photo</h1>
                    <span className="text-gray-400">
                      Click to upload an image
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              {image && (
                <button
                  className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
                  onClick={() => setImage(null)}
                >
                  Remove Image
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
