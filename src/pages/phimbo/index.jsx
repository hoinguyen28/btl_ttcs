import Header from "../../components/header";

import Content from "../../components/content";

import Sidebar from "../../components/sidebar";
import "./style.scss";
import Footer from "../../components/footer";
import HeaderComponent from "../../components/headerConponent";
import Selector from "../../components/selector";
import Pagination1 from "../../components/pagination";
const PhimBo = () => {
  const url = window.location.pathname
  const a = url.split("/");
  return (
    <div style={{ backgroundColor: `rgba(52, 52, 52, 0.85)` }}>
      <Header />
      <HeaderComponent title={a[a.length-1]}/>
      <div className="container">
        <div className="Home">
          <div className="Home__left">
            <Selector/>
            <Content />
          </div>
          <div className="Home__right">
            <Sidebar />
          </div>
        </div>
        <Pagination1/>
      </div>
      <Footer/>
    </div>
  );
};

export default PhimBo;
