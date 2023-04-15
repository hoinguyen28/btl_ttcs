import Item from "./conponent/item";
import "./style.scss"

const Content = ({ title }) => {
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
  return (
    <div className="Content">
      {data.map((item, index) => (
        <div key={index}>
          <Item data1={item} />
        </div>
      ))}
    </div>
  );
};

export default Content;
