import SidebarFilm from "./conponent/sidebarFilm"
import SidebarTab from "./conponent/sidebarTab"
import SidebarTitle from "./conponent/sidebarTiltle"
import "./style.scss"
const Sidebar = () =>{
  return(
    <div className="sidebar">
      <SidebarTitle title={"Phim Sắp Chiếu"}/>
      <SidebarFilm/>
      <SidebarTitle title={"TRENDING"}/>
      <SidebarTab/>
      <SidebarTitle title={"TỪ KHOÁ NỔI BẬT"}/>
    </div>
  )
}

export default Sidebar