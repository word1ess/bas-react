import "./FingerDop.scss";
import { Link } from "react-router-dom";
import plusImg from "../../../img/svgicons/plus.svg";
import itemImgFirst from "./img/1.svg";
import itemImgSecond from "./img/2.svg";
import playBtnImg from "./img/play-btn.svg";
import gitHubImg from "./img/github.png";
import FingerDopItem from "./FingerDopItem/FingerDopItem";

function FingerDop() {
  const fingerDopItems = [
    {
      title: "CustomServers",
      text: "Cкрипт для сбора личной базы отпечатков с реальных устройств. Фактически сервис позволяет создать свой аналог сервиса FingerprintSwitcher каждому пользователю. Такой подход дает несколько важных преимуществ:",
      link: "#",
      img: itemImgFirst,
      playBtnImg,
    },
    {
      title: "FingerprintDetector",
      text: "Инструмент для специалистов по безопасности, который проверяет использует ли сайт любые техники по сбору отпечатков и информирует пользователя о них.В результате его работы вы получите подробный отчет по каждому действию сайта связанному с отпечатками. Этот инструмент может быть полезен, если вы хотите узнать причину возможной блокировки сайтом вашего аккаунта.",
      link: "#",
      img: itemImgSecond,
      playBtnImg,
    },
  ];
  return (
    <article className="dop-finger block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <header className="block-header border-1">
          <h2>
            Дополнительные <span> инструменты</span>
          </h2>
        </header>
        <main className="dop-finger__row">
          {fingerDopItems.map((item) => {
            return (
              <FingerDopItem
                title={item.title}
                text={item.text}
                link={item.link}
                img={item.img}
                playBtn={item.playBtnImg}
              />
            );
          })}
        </main>
      </div>
    </article>
  );
}

export default FingerDop;
