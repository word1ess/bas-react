import bgVideo from "./video/bg.webm";

function Intro() {
  return (
    <>
      <article className="intro">
        <video loading="lazy" src={bgVideo} autoPlay muted loop></video>
        <div className="intro__info">
          <h1>
            Browser
            <div className="button">
              Automation
              <span className="white-space top left"></span>
              <span className="white-space bottom right"></span>
            </div>
            Studio
          </h1>
        </div>
      </article>
    </>
  );
}
export default Intro;
