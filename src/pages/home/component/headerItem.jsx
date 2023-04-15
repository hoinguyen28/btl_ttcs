const HeaderTitle = ({title}) => {
  return (
    <div className="HeaderHome">
      <div className={`HeaderHome__tab active `}>{title}</div>
    </div>
  );
};

export default HeaderTitle;
