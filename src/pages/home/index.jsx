import Header from "../../components/header";
import Banner from "../../components/Baner";
import Content from "../../components/content";
import HeaderHome from "./component/headerHome";
import Sidebar from "../../components/sidebar";
import "./style.scss";
import HeaderTitle from "./component/headerItem";
import Footer from "../../components/footer";
const Home = () => {
  return (
    <div style={{ backgroundColor: `rgba(52, 52, 52, 0.85)` }}>
      <Header />
      <Banner />
      <div className="container">
        <div className="Home">
          <div className="Home__left">
            <HeaderHome />
            <Content />
            <HeaderTitle title={"Phim Hoạt Hình"} />
            <Content />
            <HeaderTitle title={"Phim Dược Yêu Thích"} />
            <Content />
          </div>
          <div className="Home__right">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
