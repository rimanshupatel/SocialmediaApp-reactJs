import Sidebar from "./sidebar/Sidebar";
import MiddleBar from "./sidebar/middlebar/UploadBar";
export default function MainContent() {
  return (
    <>
      <section className="flex py-16">
        <Sidebar />
        <MiddleBar />
      </section>
    </>
  );
}
