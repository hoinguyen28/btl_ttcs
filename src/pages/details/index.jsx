import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { appPath } from "../../config/appPath";
import Baner from "../../components/Baner";
import Tags from "../../components/Tags";
import { AiOutlineArrowDown } from "react-icons/ai";
import { CgMenuLeftAlt } from "react-icons/cg";

// import Video from "../../assets/test.mp4";
import "./style.scss";
import { useState } from "react";


const DetailsFilm = () => {
  const data = {
    id:1,
    img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    Trainer: "abcd",
    url: "bacd",
    Name: "Vinh quang trong thù hận",
    Staus: "Full 8/8 Vietsub",
    Director: "Ahn Gil Ho",
    Time: "60",
    Episode: "8",
    Language: "Phụ đề Việt",
    TinhTrang: "Hoàn Tất",
    Year: "2023",
    National: "Hàn Quốc",
    Category: ["Tâm Lý - Tình cảm", "Gia Đình - Học Đường"],
    Actor: [
      "Jung Sung Il",
      "Yeom Hye Ran",
      "Park Sung Hoon",
      "Im Ji Yeon",
      "Lee Do Hyun",
      "Song Hye Kyo",
    ],
    Content:
      "Vinh Quang Trong Thù Hận (Phần 2) kể về Moon Dong Eun với ước mơ trở thành kiến trúc sư nhưng lại trở thành nạn nhân của bạo lực học đường và buộc phải nghỉ học. Về sau Moon Dong Eun phát hiện ra con của kẻ thù lại là học sinh lớp mình chủ nhiệm. Cô lên kế hoạch trả thù kẻ bắt nạt mình và những người cổ vũ, dửng dưng nhìn cô bị bạo hành lúc đó.",
    DsTap: [
      {
        Tap: 1,
        url: "bacd",
      },
      {
        Tap: 2,
        url: "bacd",
      },
      {
        Tap: 3,
        url: "bacd",
      },
      {
        Tap: 4,
        url: "bacd",
      },
      {
        Tap: 5,
        url: "bacd",
      },
      {
        Tap: 6,
        url: "bacd",
      },
      {
        Tap: 7,
        url: "bacd",
      },
      {
        Tap: "8 (Tập Cuối)",
        url: "bacd",
      },
    ],
  };

  const [check, setCheck] = useState(false);

  const handleServer = () => {
    setCheck(!check);
  };

  const words = data.Content.split(" ");
  const limitedWords = words.slice(0,50);

  const limitedText = limitedWords.join(" ");
  return (
    <div style={{ backgroundColor: `rgba(52, 52, 52, 0.85)` }}>
      <Header />
      <div className="container">
        <div className="detailFilm">
          <div className="detailFilm__lc">
            <span>Lịch Chiếu:</span> 1 Tập tối Thứ 6,7 trên Mọt Phim
          </div>
          <div className="detailFilm__gc">
            <div className="detailFilm__gc1">
              <span>Bạn xem phim bị lag,gật? Dổi server tại đây</span>
              <AiOutlineArrowDown />
            </div>
          </div>
          <div className="detailFilm__video">
            <video controls>
              <source src="video"type="video/mp4" />
              <source src="video" type="video/ogg" />
            </video>
            <div className="detailFilm__server">
              <div style={{ position: "relative" }}>
                <div
                  className="detailFilm__icon"
                  onClick={() => handleServer()}
                >
                  <CgMenuLeftAlt />
                </div>
                <ul
                  className={`detailFilm__list ${
                    check ? "detailFilm__active" : ""
                  }`}
                >
                  <li>Server Hải Vân [MP]</li>
                  <li>Sever Đà Nẵng [Mp]</li>
                  <li>Server Hydrax</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="phim__episodes" style={{ background: "none" }}>
            {/* <span className="phim__title">Tập :</span> */}
            {data.DsTap.map((item, index) => (
              <Link
                to={appPath.xemphim + "/" + data.Name + " Tập-" + item.Tap}
                key={index}
                className={`phim__episode ${index === 0 ? "detailFilm__active2" : ""}`}
              >
                Tập {item.Tap}
              </Link>
            ))}
          </div>
          <div className="detailFilm__name">
            <p>{data.Name} - Tập 1</p>
            <span>{data.Name}</span>
          </div>
          <div className="detailFilm__content">
            <p>
              {limitedText}....
              <Link to={appPath.phim +"/" + data.Name +" "+ data.id}>[Xem Thêm]</Link>
            </p>
          </div>
          <div className="detailFilm__point">
            <div
              className="phim__groups"
              style={{ background: "none", justifyContent: "end" }}
            >
              <div className="phim__point">
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-on.png"
                  alt=""
                />
                <img
                  src="https://motphimtv.me/theme/images/star-half.png"
                  alt=""
                />
                <img
                  src="	https://motphimtv.me/theme/images/star-off.png"
                  alt=""
                />
              </div>
              <div className="phim__danhgia">
                <p>
                  ( <span>8.4 điểm /</span> <span>62 lượt</span>)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Baner />
      <Tags title={data.Name}/>
      <Footer />
    </div>
  );
};

export default DetailsFilm;
