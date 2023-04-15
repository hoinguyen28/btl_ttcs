import { Link } from "react-router-dom";
import { appPath } from "../../../../config/appPath";
import MenuSub from "./MenuSub";
import "./style.scss";
const Menu = () => {
  return (
    <div className="Menu">
      <div className="container">
        <ul className="Menu__list">
          <li className="Menu__item">
            <Link to={appPath.default}>TRANG CHỦ</Link>
          </li>
          <li className="Menu__item">
            <Link to="">THỂ LOẠI</Link>
            <div className="Menu__help">
              <MenuSub sl={"theloai"} width={800} li={20} />
            </div>
          </li>
          <li className="Menu__item">
            <Link to="">QUỐC GIA</Link>
            <div className="Menu__help">
              <MenuSub sl={"quocgia"} width={685} li={20}  />
            </div>
          </li>
          <li className="Menu__item">
            <Link to="">PHIM MỚI</Link>
            <div className="Menu__help">
              <MenuSub sl={"nam"} width={200} li={100}  />
            </div>
          </li>
          <li className="Menu__item">
            <Link to={`${appPath.phimbo}`}>PHIM BỘ</Link>
          </li>
          <li className="Menu__item">
            <Link to={appPath.phimle}>PHIM LẺ</Link>
          </li>
          <li className="Menu__item">
            <Link to={appPath.phimTm}>PHIM THUYẾT MINH</Link>
          </li>
          <li className="Menu__item">
            <Link to={appPath.phimCR}>PHIM CHIẾU RẠP</Link>
          </li>
          <li className="Menu__item">
            <Link to={appPath.tvShow}>TV SHOW</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
