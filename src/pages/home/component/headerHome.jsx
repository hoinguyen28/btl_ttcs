
import { useDispatch, useSelector } from "react-redux";
import { setTabHome } from "../../../redux/slice/appReduce";
import "./headerHome.scss";
const HeaderHome = () => {

  const dispatch = useDispatch()
  const {tabHome} = useSelector((states) => states.appReduce)
  const handleTab1 = () => {
    dispatch(setTabHome("tab1"))
  };
  const handleTab2 = () => {
    dispatch(setTabHome("tab2"))
  };

  const handleTab3 = () => {
    dispatch(setTabHome("tab3"))
  };
  return (
    <div className="HeaderHome">
      <div
        className={`HeaderHome__tab ${tabHome === "tab1" ? "active" : ""} `}
        onClick={handleTab1}
      >
        Phim bộ mới cập nhật
      </div>
      <div
        className={`HeaderHome__tab ${tabHome === "tab2" ? "active" : ""} `}
        onClick={handleTab2}
      >
        Phim lẻ mới cập nhật
      </div>
      <div
        className={`HeaderHome__tab ${tabHome === "tab3" ? "active" : ""} `}
        onClick={handleTab3}
      >
        Phim đã hoàn thành
      </div>
    </div>
  );
};

export default HeaderHome;
