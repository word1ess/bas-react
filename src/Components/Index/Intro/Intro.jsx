import imgLeft from "../../../img/index/intro/1.png";
import imgRight from "../../../img/index/intro/2.png";

function Intro() {
  return (
    <>
      <article className="intro block-with-bg">
        <img src={imgLeft} alt="" className="block-bg" />
        <div className="intro__info">
          <h1>
            Browser
            <div className="btn btn-gradient btn-with-border">
              Automation
              <span className="white-space top left"></span>
              <span className="white-space bottom right"></span>
            </div>
            Studio
          </h1>
        </div>
        <img src={imgRight} alt="" />
      </article>
    </>
  );
}
export default Intro;
