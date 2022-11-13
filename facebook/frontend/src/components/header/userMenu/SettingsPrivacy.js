import { Link } from "react-router-dom";

export default function SettingsPrivacy({ setVisible }) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div
          className="circle hover1"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
      </div>
      <Link to="/profile">
        <div className="mmenu_item hover3">
          <div className="small_circle">
            <i className="settings_filled_icon"></i>
          </div>
          <span>Settings</span>
        </div>
      </Link>
      <Link to="/reset">
        <div className="mmenu_item hover3">
          <div className="small_circle">
            <i className="privacy_shortcuts_icon"></i>
          </div>
          <span>Privacy Shortcuts</span>
        </div>
      </Link>
    </div>
  );
}
