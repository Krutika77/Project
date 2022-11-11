import { Dots } from "../../../svg";
import "./style.css";
export default function RightHome({ user }) {
  const color = "#65676b";
  return (
    <div className="right_home">
      <div className="project_header">
        Project Social
        <div className="contacts_header_right hover1">
          <Dots color={color} />
        </div>
      </div>
      <div className="splitter1"></div>
    </div>
  );
}
