import Sidebar from "../content/sidebar/Sidebar";
import MiddleBar from "../content/middlebar/MiddleBar";
import Header from "../header/Header";
export default function MainContent() {
  return (
    <>
      <Header />
      <section className="flex py-16">
        <Sidebar />
        <MiddleBar />
      </section>
    </>
  );
}
