import Menu from "./Menu";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="wrapper">
      <div className="content">
        <Menu />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
