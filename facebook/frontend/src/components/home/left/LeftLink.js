export default function LeftLink({ to, img, text, notification }) {
  return (
    <div>
      <a href={to} target="_blank">
        <div className="left_link hover1">
          <img src={`../../../left/${img}.png`} alt="" />
          <span>{text}</span>
        </div>
      </a>
    </div>
  );
}
