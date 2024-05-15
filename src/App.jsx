import SignInForm from "./components/Login/SignInForm";
import SignUpForm from "./components/Login/SignUpForm";
import MainContent from "./components/MainLayout/MainContent";
import { Routes, Route } from "react-router-dom";
import config from "./config/config";
function App() {
  console.log(config.AppWriteBucketId);
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>

      <Routes>
        <Route index element={<MainContent />} />
      </Routes>
    </>
  );
}

export default App;
