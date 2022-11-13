import { Link } from "react-router-dom";
import { menu } from "../../data/allMenu";
import AllMenuItem from "./AllMenuItem";
export default function AllMenu() {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_group">
            <div className="all_menu_group_header">Social</div>
            <Link to="/friends" className="left_link hover1">
              <img src={`../../left/friends.png`} alt="" />
              <span>Find Friends</span>
            </Link>
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Support Us</div>
            {menu.slice(0, 1).map((item, i) => (
              <AllMenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                to={item.to}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Personal</div>
            {menu.slice(1, 2).map((item, i) => (
              <AllMenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                to={item.to}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Community Resources</div>
            {menu.slice(2, 7).map((item, i) => (
              <AllMenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                to={item.to}
                key={i}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Around You</div>
            {menu.slice(7, 8).map((item, i) => (
              <AllMenuItem
                name={item.name}
                description={item.description}
                icon={item.icon}
                to={item.to}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
