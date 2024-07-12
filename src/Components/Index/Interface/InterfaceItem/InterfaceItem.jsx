function InterfaceItem({ title, text, img }) {
  return (
    <div className="interface__item">
      <h3>{title}</h3>
      <p>{text}</p>
      {img && <img src={img} alt="" />}
    </div>
  );
}
export default InterfaceItem;
