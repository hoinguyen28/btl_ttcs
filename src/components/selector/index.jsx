import "./style.scss";
const Selector = () => {
  return (
    <div className="selector">
      <div className="selector__item">
        <select className="selector__select" name="Stt" id="stt">
          <option value="">--Sắp xếp--</option>
          <option value="Ngaydangphim">Ngày Đăng Phim</option>
          <option value="NamSX">Năm Sản Xuất</option>
          <option value="TenPhim">Tên Phim</option>
          <option value="Luotxem">Lượt Xem</option>
        </select>
      </div>
      <div className="selector__item">
        <select className="selector__select" name="genre" id="genre">
          <option value="">-- Thể Loại --</option>
          <option value="1">Cổ Trang - Thần Thoại</option>
          <option value="2">Võ Thuật - Kiếm Hiệp</option>
          <option value="3">Phiêu Lưu - Hành Động</option>
          <option value="4">Tâm Lý - Tình Cảm</option>
          <option value="5">Hoạt Hình</option>
          <option value="6">Khoa Học - Viễn Tưởng</option>
          <option value="7">Hình Sự - Chiến Tranh</option>
          <option value="8">Tài Liệu - Khám Phá</option>
          <option value="9">Văn Hóa - Tâm Linh</option>
          <option value="10">Hài Hước</option>
          <option value="11">Thể Thao - Âm Nhạc</option>
          <option value="12">Kinh Dị - Ma</option>
          <option value="13">Gia Đình - Học Đường</option>
          <option value="14">TV Show</option>
          <option value="15">Phim Chiếu Rạp</option>
          <option value="16">Sitcom</option>
          <option value="17">Thuyết Minh</option>
          <option value="18">Lồng Tiếng</option>
        </select>
      </div>
      <div className="selector__item">
        <select
          className="selector__select"
          name="country"
          id="country"
          style={{ width: "120px" }}
        >
          <option value="">-- Quốc gia --</option>
          <option value="1">Việt Nam</option>
          <option value="2">Trung Quốc</option>
          <option value="3">Hàn Quốc</option>
          <option value="4">Thái Lan</option>
          <option value="5">Hồng Kông</option>
          <option value="6">Âu - Mỹ</option>
          <option value="7">Đài Loan</option>
          <option value="8">Nhật Bản</option>
          <option value="9">Ấn Độ</option>
          <option value="10">Canada</option>
          <option value="11">Khác</option>
        </select>
      </div>
      <div className="selector__item">
        <select
          className="selector__select"
          name="year"
          id="year"
          style={{ width: "120px" }}
        >
          <option value="">-- Năm --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </select>
      </div>
      <div className="selector__item">
        <div className="selector__btn">Lọc Phim</div>
      </div>
    </div>
  );
};

export default Selector;
