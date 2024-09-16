function FingerWhereItem({ scrollToBlock, img, title, text, line }) {
  const scrollHandle = () => {
    const scrollBlockHtml = document.querySelector(`.${scrollToBlock}`);
    if (window.screen.width > 992) {
      let position = scrollBlockHtml?.getBoundingClientRect();
      window.scrollTo({
        left: position.left,
        top: position.top + window.scrollY - 120,
        behavior: "smooth",
      });
    } else {
      scrollBlockHtml.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="where-finger__item" onClick={scrollHandle}>
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
