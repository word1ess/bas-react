function OpportunitiesItem({ img, title, text }) {
  return (
    <div className="opportunities__item">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default OpportunitiesItem;
