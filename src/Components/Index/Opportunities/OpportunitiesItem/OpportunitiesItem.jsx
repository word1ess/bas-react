function OpportunitiesItem({
  img,
  title,
  text,
  additionalClass,
  decorationImgs,
}) {
  return (
    <div className={`opportunities__item ${additionalClass ? "big" : ""}`}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      {decorationImgs}
    </div>
  );
}

export default OpportunitiesItem;
