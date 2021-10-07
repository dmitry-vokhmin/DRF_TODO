import Menu from "./Menu";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <div className="content">
        <Menu isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
