import SignInForm from "./components/userAuth/SignInForm";
import SignUpForm from "./components/userAuth/SignUpForm";
import MainContent from "./components/MainLayout/MainContent";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>

      <Routes>
        <Route path="/" element={<MainContent />} />
        {/* <Route path="/" element={<CreatePost />} /> */}
      </Routes>
    </>
  );
}

export default App;
