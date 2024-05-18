import { useState } from "react";
import { account, id } from "../../AppWrite/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [userData, SetuserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  let SignUp = async () => {
    await account
      .create(id, userData.email, userData.password, userData.name)
      .then(
        function (res) {
          console.log(res);
          navigate("/");
        },
        function (err) {
          console.log(err);
        }
      );
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 backgroundCover">
      <div className="bg-white sm:max-w-sm  max-w-xs w-full p-8 rounded-lg shadow-md  ">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div></div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={(e) =>
                SetuserData({ ...userData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) =>
                SetuserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) =>
                SetuserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <div>
            <button
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200"
              type="submit"
              onClick={SignUp}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center sm:text-md text-sm capitalize">
          already have an account?
          <Link to={"/signin"} className="text-indigo-600 underline m-2">
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
