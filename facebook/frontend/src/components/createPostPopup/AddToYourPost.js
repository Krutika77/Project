import { Photo } from "../../svg";
export default function AddToYourPost({ setShowPrev }) {
  return (
    <div
      className="addtoyourpost"
      onClick={() => {
        setShowPrev(true);
      }}
    >
      <div className="post_header_right hover1">
        <Photo color="#45bd62" />
      </div>
      <div className="addto_text">Add Photos/Gif</div>
    </div>
  );
}
