import Home from "../pages/home";
import { Routes, Route } from "react-router-dom";
import { appPath } from "./appPath";
import PhimBo from "../pages/phimbo";
import Phim from "../pages/film";
import DetailsFilm from "../pages/details";

const appRouters = () => {
  return (
    <Routes>
      <Route path={appPath.default} element={<Home />} exact />
      <Route path={appPath.phimbo } element={<PhimBo />} exact />
      <Route path={appPath.phimle} element={<PhimBo />} exact />
      <Route path={appPath.phimCR} element={<PhimBo />} exact />
      <Route path={appPath.tvShow} element={<PhimBo />} exact />
      <Route path={appPath.phimTm} element={<PhimBo />} exact />
      <Route path={appPath.theloai + "/:type"} element={<PhimBo/>}/>
      <Route path={appPath.quocgia+ "/:type"} element={<PhimBo/>}/>
      <Route path={appPath.phimmoi+ "/:type"} element={<PhimBo/>}/>
      <Route path={appPath.phim + "/:id"} element= {<Phim/>}/>
      <Route path={appPath.xemphim + "/:id"} element={<DetailsFilm/>}/>
    </Routes>
  );
};

export default appRouters;
