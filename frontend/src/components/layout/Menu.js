import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  return (
    <div className="header">
      <div className="header__content center">
        <a href="/">Logo</a>
        {props.isLoggedIn && (
          <nav className="menu_nav">
            <Link to="/">Profile</Link>
            <button onClick={props.onLogout}>Logout</button>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Menu;
