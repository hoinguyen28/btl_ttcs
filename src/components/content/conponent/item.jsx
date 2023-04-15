import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { appPath } from "../../../config/appPath";
import "./item.scss";
const Item = ({ data1 }) => {
  return (
    <div className="item">
      <div className="item__content">
        <span className="item__title">{data1.tap}</span>
        <Link to={appPath.phim +"/" + data1.Name +" "+ data1.id}>
          <img className="item__img" src={data1.img} alt="" />
          <BsFillPlayCircleFill />
        </Link>
        <div className="item__name">
          <span>{data1.Name}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
