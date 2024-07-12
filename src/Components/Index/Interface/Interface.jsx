import InterfaceItem from "./InterfaceItem/InterfaceItem";
import plusImg from "../../../img/svgicons/plus.svg";
import interfaceVideo from "../../../video/interface.mp4";
import imgFirst from "./img/1.svg";
import imgSecond from "./img/2.svg";
import imgThird from "./img/3.svg";

import "./Interface.scss";
function Interface() {
  const interfaceItems = [
    {
      title: "Панель инструментов",
      text: "Здесь собран весь доступный функционал, сгруппированный по модулям. Откройте нужный модуль и выберите там действие.",
      img: imgFirst,
    },
    {
      title: "Панель сценария",
      text: "Содержит ваш скрипт - набор действий, организованных в визуально удобной форме.",
      img: imgSecond,
    },
    {
      title: "Управление браузером",
      text: "Взаимодействуйте с браузером, ваши действия будут записаны автоматически, или добавьте действия вручную.",
      img: imgThird,
    },
  ];
  return (
    <article className="interface block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <header className="block-header center border-1">
          <h2>
            <span>Интерфейс</span>
          </h2>
        </header>
        <div className="interface__video">
          <div className="corner top left"></div>
          <div className="corner top right"></div>
          <video src={interfaceVideo} controls loading="lazy"></video>
        </div>
        <main className="interface__row">
          {interfaceItems.map((item) => {
            return (
              <InterfaceItem
                title={item.title}
                text={item.text}
                img={item.img}
              />
            );
          })}
        </main>
        <h2> Автоматизация вашего бизнеса</h2>
      </div>
    </article>
  );
}

export default Interface;