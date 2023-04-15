import { Link } from "react-router-dom";
import { appPath } from "../../config/appPath";
import "./style.scss";
const HeaderComponent = ({ title }) => {
  return (
    <div className=" container">
      <div className="HeaderComponent">
        <ul>
          <li>
            <Link to={appPath.default}>Trang chủ</Link>
          </li>
          <li>
            <p>{title}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
