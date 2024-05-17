import Header from "../header/Header";
import MiddleBar from "../content/MiddleBar";
import RightBar from "../content/RightBar";
export default function MainContent() {
  return (
    <>
      <Header />

      <main className="flex sm:flex-row flex-col sm:ml-[20rem] ml-0 m-auto ">
        <MiddleBar />
        <RightBar />
      </main>
    </>
  );
}
