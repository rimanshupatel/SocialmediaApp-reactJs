import Header from "../header/Header";
import MiddleBar from "../content/MiddleBar";
import RightBar from "../content/RightBar";
import { useEffect, useState } from "react";
import authService from "../../AppWrite/auth";
import SignInForm from "../userAuth/SignInForm";
import { useNavigate } from "react-router-dom";
// import { ColorRing } from "react-loader-spinner";
export default function MainContent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    authService.getCurrentUser
      .then((res) => {
        navigate("/");
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, [navigate]);

  return (
    <div>
      {user ? (
        <>
          <Header />
          <main className="flex sm:flex-row flex-col sm:ml-[20rem] ml-0 m-auto ">
            <MiddleBar />
            {/* <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#333"]}
            /> */}

            <RightBar />
          </main>
        </>
      ) : (
        <SignInForm />
      )}
    </div>
  );
}
