import "./style.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div style={{ display: "flex" }}>
          <div className="footer__right">
            <p>
              <span>
                <a href="1">Xem phim hay </a>
              </span>
               miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng
              tiếng. Mọt phim có nhiều thể loại phim phong phú, đặc sắc, nhiều
              bộ phim hay nhất - mới nhất.
            </p>
            <p>
              Website MọtPhimTV với giao diện trực quan, thuận tiện, tốc độ tải
              nhanh, với độ tin cậy cao hứa hẹn sẽ đem lại những trải nghiệm tốt
              nhất cho người dùng.
            </p>
          </div>
          <div className="footer__left">
            <div className="footer__column">
              <div className="footer__heading">Quy định</div>
              <ul>
                <li>
                  <a href="1">Điều khoản chung</a>
                </li>
                <li>
                  <a href="1">Chính sách riêng tư</a>
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <div className="footer__heading">Giới thiệu</div>
              <ul>
                <li>
                  <a href="1">Facebook</a>
                </li>
                <li>
                  <a href="1">Trang chủ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
