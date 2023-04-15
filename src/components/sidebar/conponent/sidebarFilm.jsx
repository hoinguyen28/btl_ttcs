import "./sidebarFilm.scss"
const SidebarFilm = () => {
  const data = [
    {
      nam: "2023",
      url: "https://motphimtv.me/",
      img: "	https://cdn1-img.net/images/1680082926.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      nam: "2023",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1673863312.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      nam: "2023",
      url: "https://motphimtv.me/",
      img: "https://cdn1-img.net/images/1653012789.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      nam: "2023",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần 1",
    },
  ];
  

  return (
    <ul className="SidebarFilm">
      {data.map((item, index) => (
        <li key={index} className="SidebarFilm__item">
          <a href={item.url}>
            <img className="SidebarFilm__img"  src={item.img} alt="anh" />
          </a>
          <div className="SidebarFilm__title">
            <p className="SidebarFilm__name">{item.Name}</p>
            <p className="SidebarFilm__nam">{item.nam}</p>
          </div>
          <p className="SidebarFilm__star">
            <img src="https://motphimtv.me/theme/images/star-on.png" alt="0"/>
            <img src="https://motphimtv.me/theme/images/star-on.png" alt="0"/>
            <img src="https://motphimtv.me/theme/images/star-on.png" alt="0"/>
            <img src="https://motphimtv.me/theme/images/star-on.png" alt="0"/>
            <img src="https://motphimtv.me/theme/images/star-on.png" alt="0"/>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default SidebarFilm