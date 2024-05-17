import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { account } from "../../AppWrite/auth";
const SignInForm = () => {
  const [userData, SetuserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  let userLogin = async () => {
    const signInData = await account.createEmailPasswordSession(
      userData.email,
      userData.password
    );
    console.log(signInData);
    if (signInData.$id) {
      navigate("/");
    }
  };

  // async function login() {
  //   await account.createEmailPasswordSession(userData.email, userData.password);
  //   navigate("/");
  // }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
              onChange={(e) =>
                SetuserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
              onChange={(e) =>
                SetuserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            onClick={userLogin}
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          dont have an account ?
          <Link
            className="text-indigo-600 hover:underline"
            // onClick={navigate("/signup")}
          >
            sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
