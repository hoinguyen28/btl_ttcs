import { Link } from "react-router-dom";
import Baner from "../../components/Baner";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeaderComponent from "../../components/headerConponent";
import Sidebar from "../../components/sidebar";
import "./style.scss";
import { appPath } from "../../config/appPath";
import Tags from "../../components/Tags";
const Phim = () => {
  const url = window.location.pathname;
  const array = url.split("/");
  const Name = array[array.length - 1].split("%20");
  const id = Name[Name.length - 1];
  console.log(id);
  const data = {
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
  return (
    <div style={{ backgroundColor: `rgba(52, 52, 52, 0.85)` }}>
      <Header />
      <div className="container">
        <HeaderComponent title={data.Name} />
        <div className="phim">
          <div className="Home__left">
            <div className="phim__body">
              <div className="phim__info">
                <div className="phim__poster">
                  <Link to="">
                    <img src={data.img} alt="1" />
                  </Link>
                  <div className="phim__Cn">
                    <div className="phim__btn phim__tai">
                      <Link to="">Tải Phim</Link>
                    </div>
                    <div className="phim__btn phim__xem">
                      <Link to={appPath.xemphim +"/" +data.Name+" Tập-1" }>Xem Phim</Link>
                    </div>
                  </div>
                </div>
                <div className="phim__text">
                  <h1 className="phim__name">{data.Name}</h1>
                  <h2 className="phim__sub">{data.Name}</h2>
                  <div className="phim__scrol">
                    <p className="phim__des">
                      <span>Trạng Thái:</span>
                      <strong style={{ color: "red" }}>{data.Staus}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Đạo Diễn:</span>
                      <strong>
                        <Link to="">{data.Director}</Link>
                      </strong>
                    </p>
                    <p className="phim__des">
                      <span>Thời Lượng:</span>
                      <strong>{data.Time}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Số Tập:</span>
                      <strong>{data.Episode}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Tình Trạng:</span>
                      <strong>{data.TinhTrang}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Ngôn Ngữ:</span>
                      <strong>{data.Language}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Năm Sản Xuất:</span>
                      <strong>{data.Year}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Quốc Gia:</span>
                      <strong>{data.National}</strong>
                    </p>
                    <p className="phim__des">
                      <span>Thể Loại:</span>
                      <strong>
                        {data.Category.map((item, index) => (
                          <Link to="" key={index}>
                            {item },{" "}
                          </Link>
                        ))}
                      </strong>
                    </p>
                    <p className="phim__des">
                      <span>Diễn Viên:</span>
                      <strong>
                        {data.Actor.map((item, index) => (
                          <Link to="" key={index}>
                            {item },{" "}
                          </Link>
                        ))}
                      </strong>
                    </p>
                  </div>
                  <div className="phim__groups">
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
              <div className="phim__episodes">
                <span className="phim__title">Tập:</span>
                {data.DsTap.map((item, index) => (
                  <Link to={appPath.xemphim +"/" +data.Name+" Tập-"+item.Tap } key={index} className={`phim__episode ${index === 0 ? "phim__active" : ""}`}>
                    Tập {item.Tap}
                  </Link>
                ))}
              </div>
              <div className="phim__content">
                <span className="phim__content-Title">Nội Dung Phim</span>
                <p>{data.Content}</p>
              </div>
              <Tags title={data.Name}/>
              {/* <div className="phim__comment">
                <input type="text" />
              </div> */}
            </div>
            <Baner />
          </div>
          <div className="Home__right">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Phim;
