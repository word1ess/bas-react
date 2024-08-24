function OpportunitiesItem({
  image,
  title,
  text,
  additionalClass,
  decorationImgs,
  isPremium,
}) {
  return (
    <div className={`opportunities__item ${additionalClass ? "big" : ""}`}>
      <div className="opportunities__item-border">
        <div className="opportunities__item-text">
          {isPremium ? (
            <div className="opportunities__img">
              <img src={image} alt="" />
            </div>
          ) : (
            <img src={image} alt="" />
          )}

          <h3>{title}</h3>
          <p>{text}</p>
          {decorationImgs}
        </div>
      </div>
    </div>
  );
}

export default OpportunitiesItem;
