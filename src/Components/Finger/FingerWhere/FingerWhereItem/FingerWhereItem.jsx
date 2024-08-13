function FingerWhereItem({ img, title, text, line }) {
  return (
    <div className="where-finger__item">
      <div className="where-finger__card">
        <div className="where-finger__inner">
          <img src={img} alt="" />
          <div className="where-finger__info">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="where-finger__line">{line}</div>
    </div>
  );
}

export default FingerWhereItem;
