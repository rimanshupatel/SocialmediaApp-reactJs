import Header from "../header/Header";
import MiddleBar from "../content/MiddleBar";
import RightBar from "../content/RightBar";
import { useEffect, useState } from "react";
import { account } from "../../AppWrite/auth";
import SignInForm from "../userAuth/SignInForm";
import { useNavigate } from "react-router-dom";
import Test from "../content/Test";
export default function MainContent() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    account
      .get()
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
            <Test />
            <RightBar />
          </main>
        </>
      ) : (
        <SignInForm />
      )}
    </div>
  );
}
