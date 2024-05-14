import UploadContent from "./UploadContent";
import UploadBar from "./UploadBar";

export default function MiddleBar() {
  return (
    <>
      <section className="mx-20">
        <UploadBar />
        <UploadContent />
      </section>
    </>
  );
}
