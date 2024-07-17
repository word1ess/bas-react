function EducationSlide({ title, subtitle, body, img, btn }) {
  return (
    <>
      <h2>{title}</h2>
      {img ? (
        <div className="education__bg">
          {subtitle ? <h3>{subtitle}</h3> : ""}

          <img src={img} alt="" className="education__img" />
          <main className="education__body">{body}</main>
        </div>
      ) : (
        <div className="education__without-bg">{body}</div>
      )}
      {btn ?? ""}
    </>
  );
}

export default EducationSlide;
