import HeaderTop from "./component/HeaderTop";
import Menu from "./component/HeaderMenu";
import "./index.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <HeaderTop />
      </div>
      <Menu/>
    </div>
  );
};

export default Header;
