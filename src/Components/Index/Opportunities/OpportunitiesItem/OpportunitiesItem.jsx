function OpportunitiesItem({
  image,
  title,
  text,
  additionalClass,
  decorationImgs,
  isPremium,
}) {
  console.log(isPremium);
  return (
    <div className={`opportunities__item ${additionalClass ? "big" : ""}`}>
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
  );
}

export default OpportunitiesItem;
