function AutomatisationItem({ img, title }) {
  return (
    <div className="automatisation__item">
      <div className="automatisation__img">
        <img src={img} alt="item-img" />
        <div className="corner top right"></div>
        <div className="corner bottom left"></div>
      </div>
      <p>{title}</p>
    </div>
  );
}

export default AutomatisationItem;
