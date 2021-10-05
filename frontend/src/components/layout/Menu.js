import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <div className="header">
      <div className="header__content center">
        <a href="/">Logo</a>
        <nav className="menu_nav">
          <Link to="/">Profile</Link>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
