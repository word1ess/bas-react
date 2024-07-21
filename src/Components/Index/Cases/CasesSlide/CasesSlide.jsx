import { Link } from "react-router-dom";
import lineOneImg from "../../../../img/svgicons/line-cases-1.svg";
import lineTwoImg from "../../../../img/svgicons/line-cases-2.svg";
import placeholderAutohrImg from "../../../../img/cases/author.png";
function CasesSlide({
  img,
  type,
  title,
  description,
  link,
  review,
  authorimg,
  author,
  slogan,
}) {
  return (
    <>
      <header className="cases__header">
        <div className="cases__img btn btn-gradient btn-with-border">
          <img src={img} alt="" />
          <span className="border"></span>
        </div>
        <p>{type}</p>
      </header>
      <div className="block-with-bg"></div>
      <main className="cases__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link ?? "#"} className="btn btn-gradient btn-with-border">
          Канал проекта
          <span className="white-space"></span>
          <span className="border"></span>
        </Link>
      </main>
      {review ? (
        <blockquote>
          <span>“</span>
          <p>{review}</p>
          <span>”</span>
          <cite>
            <img src={lineTwoImg} alt="" className="line" />
            <img
              src={authorimg ?? placeholderAutohrImg}
              className="cases__author"
              alt="author"
            />
            <p>{author}</p>
          </cite>
        </blockquote>
      ) : (
        <p className="cases__without-review">
          Данный пользователь не изъявил желания предоставить отзыв. :[
        </p>
      )}

      <q className="text-gradient">{slogan}</q>
    </>
  );
}

export default CasesSlide;
