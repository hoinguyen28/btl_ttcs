
import { useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { appPath } from "../../config/appPath";
import "./style.scss";

const Baner = () => {
  const data = [
    {
      id:5,
      tap: "Tập 5 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:6,
      tap: "Tập 6 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1676818461.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:7,
      tap: "Tập 7 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1680705259.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:8,
      tap: "Tập 8 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1679197019.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:9,
      tap: "Tập 9 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1678386035.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:10,
      tap: "Tập 10 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1678080933.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:11,
      tap: "Tập 11 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1676317953.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:12,
      tap: "Tập 12 Vietsub",
      url: "https://motphimtv.me/",
      img: "	https://cdn1-img.net/images/1680082926.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:13,
      tap: "Tập 13 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1673863312.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:14,
      tap: "Tập 14 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1653012789.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      id:1,
      tap: "Tập 15 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
  ];
  const slick = useRef()
  

  return (
    <div className="container">
      <div className="baner">
        <h2 className="baner__title">Phim Hot</h2>
        <div className="baner__slick" ref={slick}>
          {data.map((item, index) => (
            <Link to={appPath.phim+"/"+item.Name+" "+item.id} className="baner__item" key={index}>
              <div className="baner__content">
                <span className="baner__tap">{item.tap}</span>
                <div className="baner__img">
                  <img src={item.img} alt="anh" />
                </div>
                <div className="baner__name">{item.Name}</div>
                <BsFillPlayCircleFill />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Baner;
