import { Link } from "react-router-dom";
import CustomBtn from "../../../Common/Btns/CustomBtn";

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
        <Link class="btn-index btn-index__bordered cases__logo" to="/">
          <div class="btn-index__border">
            <div class="btn-index__text">
              <img src={img} alt="" />
            </div>
          </div>
        </Link>
        <p>{type}</p>
      </header>
      <div className="block-with-bg"></div>
      <main className="cases__body">
        <h3>{title}</h3>
        <p>{description}</p>

        <CustomBtn
          textForBtn="Канал проекта"
          btnType="bordered"
          btnClass="btn-index"
          isWhiteSpace
          link={link}
        />
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
