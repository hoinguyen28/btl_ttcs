import { useState } from "react";
import "./sidebarTab.scss";
const SidebarTab = () => {
  const data = [
    {
      tap: "Tập 6 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 7 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 8 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 9 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 10 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 11 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 12 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 13 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 14 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
    {
      tap: "Tập 15 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
      like: "103 lượt quan tâm",
    },
  ];

  const [sidebarTab, setSidebarTab] = useState("ngay");

  const handleTabN = () => {
    setSidebarTab("ngay");
  };

  const handleTabT = () => {
    setSidebarTab("tuan");
  };

  const handleTabTh = () => {
    setSidebarTab("thang");
  };
  return (
    <div className="sidebarTab">
      <div className="sidebarTab__tabs">
        <div
          className={`sidebarTab__tab ${sidebarTab === "ngay" ? "active" : ""}`}
          onClick={handleTabN}
        >
          Ngày
        </div>
        <div
          className={`sidebarTab__tab ${sidebarTab === "tuan" ? "active" : ""}`}
          onClick={handleTabT}
        >
          Tuần
        </div>
        <div
          className={`sidebarTab__tab ${
            sidebarTab === "thang" ? "active" : ""
          }`}
          onClick={handleTabTh}
        >
          Tháng
        </div>
      </div>
      <ul className="sidebarTab__content">
        {data.map((item, index) => (
          <li key={index} className="sidebarTab__item">
            <span className="sidebarTab__stt">{index + 1}</span>
            <span className="sidebarTab__name">{item.Name}</span>
            <p className="sidebarTab__des">{item.like}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarTab;
