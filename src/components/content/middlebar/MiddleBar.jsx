import UploadContent from "./UploadContent";
import UploadBar from "./UploadBar";

export default function MiddleBar() {
  return (
    <>
      <div className="mx-20">
        <UploadBar />
        <UploadContent />
      </div>
    </>
  );
}
