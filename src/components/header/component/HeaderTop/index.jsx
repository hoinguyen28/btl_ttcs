import Logo from "../../../../assets/motphimtv.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import "./style.scss"

const HeaderTop = () => {
  return (
    <div className="Top">
      <div className="Top__logo">
        <img src={Logo} alt="Logo_phim" />
      </div>
      <div className="Top__search">
        <input placeholder="V.d: Tên phim, Tên Diễn Viên..." />
        <BiSearchAlt2 />
      </div>
      <ul className="Top__client">
        <li className="Top__login">
          <FaSignOutAlt />
          <span>Đăng Nhập</span>
        </li>
        <li className="Top__register">
          <HiOutlineUserGroup />
          Đăng Ký
        </li>
        <li className="Top__bookmark">
          <BsBookmark />
          Bookmark
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
