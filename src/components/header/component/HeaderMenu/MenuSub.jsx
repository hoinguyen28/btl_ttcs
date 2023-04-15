import { Link } from "react-router-dom";

const MenuSub = ({ sl, width, li }) => {
  let data = [];

  const dataTL = [
    {
      id:"/theloai/co-trang-than-thoai",
      Name:"Cổ Trang - Thần Thoại",
    },
    {
      id:"/theloai/vo-thuat-kiem-hiep",
      Name:"Võ Thuật- Kiếm Hiệp",
    },
    {
      id:"/theloai/phieu-lieu-hanh-dong",
      Name:"Phiêu Liêu- Hành Động",
    },
    {
      id:"/theloai/tam-ly-tinh-cam",
      Name:"Tâm lý- Tình cảm",
    },
    {
      id:"/theloai/hoat-hinh",
      Name:"Hoạt Hình",
    },
    {
      id:"/theloai/khoa-hoc-vien-tuong",
      Name:"Khoa Học- Viễn Tưởng",
    },
    {
      id:"/theloai/hinh-su-chien-tranh",
      Name:"Hình sự- Chiến Tranh",
    },
    {
      id:"/theloai/Tai-lieu-kham-phá",
      Name:"Tài Liệu - Khám Phá",
    },
    {
      id:"/theloai/van-hoa-tam-linh",
      Name:"Văn Hóa - Tâm Linh",
    },
    {
      id:"/theloai/hai-huoc",
      Name:"Hài Hước",
    },
    {
      id:"/theloai/thethao-am-nhac",
      Name:"Thế Thao - Âm Nhạc",
    },
    {
      id:"/theloai/kinh-di-ma",
      Name:"Kinh Dị - Ma",
    },
    {
      id:"/theloai/gia-dinh-hoc-duong",
      Name:"Gia Đình - Học Đường",
    },
    {
      id:"/theloai/Tv-show",
      Name:"TV Show",
    },
    {
      id:"/theloai/phim-chieu-rap",
      Name:"Phim Chiếu Rạp",
    },
    {
      id:"/theloai/bi-an-sieu-nhien",
      Name:"Bí Ẩn - Siêu Nhiên",
    },
    {
      id:"/theloai/thuyet-minh",
      Name:"Thuyết Minh",
    },
    {
      id:"/theloai/long-tieng",
      Name:"Lồng Tiếng",
    },
    {
      id:"/theloai/boy-love",
      Name:"Boy Love",
    }
  ]
  const dataQG = [
    {
      id:"/quocgia/Viet-Nam",
      Name:"Việt Nam",
    },
    {
      id:"/quocgia/Trung-Quoc",
      Name:"Trung Quốc",
    },
    {
      id:"/quocgia/Han_Quoc",
      Name:"Hàn Quốc",
    },
    {
      id:"/quocgia/Thai_Lan",
      Name:"Thái Lan",
    },
    {
      id:"/quocgia/Hong-Kong",
      Name:"Hồng Không",
    },
    {
      id:"/quocgia/Au-My",
      Name:"Âu Mỹ",
    },
    {
      id:"/quocgia/Dai-Loan",
      Name:"Đài Loan",
    },
    {
      id:"/quocgia/Nhat-Ban",
      Name:"Nhật Bản",
    },
    {
      id:"/quocgia/An-Do",
      Name:"Ấn Độ",
    },
    {
      id:"/quocgia/Canada",
      Name:"Canada",
    },
    {
      id:"/quocgia/Quoc-gia-khac",
      Name:"Quốc Gia Khác",
    },
  ]
  const dataN = [
    {
      id:"/phimmoi/phim-2022",
      Name:"Phim 2022"
    },
    {
      id:"/phimmoi/phim-2021",
      Name:"Phim 2021"
    },
    {
      id:"/phimmoi/phim-2020",
      Name:"Phim 2020"
    },
    {
      id:"/phimmoi/phim-2019",
      Name:"Phim 2019"
    },
    {
      id:"/phimmoi/phim-2018",
      Name:"Phim 2018"
    },
    {
      id:"/phimmoi/phim-2017",
      Name:"Phim 2017"
    },
    {
      id:"/phimmoi/phim-2016",
      Name:"Phim 2016"
    },
    {
      id:"/phimmoi/phim-2015",
      Name:"Phim 2015"
    },
    {
      id:"/phimmoi/phim-2014",
      Name:"Phim 2014"
    },
    {
      id:"/phimmoi/phim-2013",
      Name:"Phim 2013"
    }
  ]

  if(sl === "theloai"){
    data = dataTL
  } else if(sl === "quocgia"){
    data = dataQG
  }else {
    data = dataN
  }

  return (
    <ul className="Menu__sub" style={{ width: width }}>
      {data.map((item) => (
        <li key={item.id} className="Menu__item1" style={{ width: `${li}%` }}>
          <Link to={item.id}>{item.Name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuSub;
