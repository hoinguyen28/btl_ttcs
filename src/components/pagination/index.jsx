import { Pagination } from 'antd';
import "./style.scss"
const Pagination1 = ()=>{
  return(
    <div className="pagination">
      <Pagination defaultCurrent={7} total={100}/>
    </div>
  )
}

export default Pagination1