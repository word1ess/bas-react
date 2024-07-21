import "./Index.scss";
import How from "./How/How";
import Faq from "./Faq/Faq";
import Cases from "./Cases/Cases";
import Intro from "./Intro/Intro";
import Version from "./Version/Version";
import SubIntro from "./SubIntro/SubIntro";
import Interface from "./Interface/Interface";
import Education from "./Education/Education";
import Opportunities from "./Opportunities/Opportunities";
import Automatisation from "./Automatisation/Automatisation";
import itemImg from "../../img/advantages/1.png";
import itemImgSecond from "../../img/advantages/2.png";
import plusImg from "../../img/svgicons/plus.svg";
import { useRef } from "react";
import { Helmet } from "react-helmet";
function Index() {
  const firstAdditinalItems = [
    {
      img: itemImg,
      title: "Автоматизация любых действий",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и
    клики мыши, перетаскивание элементов, прокрутка, выбор элементов
    из выпадающего списка, нативная эмуляция клавиатуры, сочетания
    клавиш и т.д.`,
    },
    {
      img: itemImg,
      title: "Автоматизация в визуальном редакторе",
      p: `Без знаний программирования:
      АИ-помощник/Запись действий/Визуальный конструктор..`,
    },
    {
      img: itemImg,
      title: "Многопоточность",
      p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
    },
    {
      img: itemImg,
      title: "FingerprintSwitcher",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и клики мыши, перетаскивание элементов, прокрутка, выбор элементов из выпадающего списка, нативная эмуляция клавиатуры, сочетания клавиш и т.д.`,
    },
    {
      img: itemImg,
      title: "Система профилей и Cookies",
      p: `Без знаний программирования:
      АИ-помощник/Запись действий/Визуальный конструктор..`,
    },
    {
      img: itemImg,
      title: "Прокси",
      p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
    },
  ];
  const secondAdditinalItems = [
    {
      img: itemImgSecond,
      title: "Конструктор пользовательского интерфейса",
      p: `Создайте пользовательский интерфейс с помощью системы ресурсов. Премиум пользователи имеют дополнительную возможность создать кастомный интерфейс с помощью веб-технологий (HTML, javascript).`,
      additionalClass: true,
    },
    {
      img: itemImgSecond,
      title: "Планировщик задач",
      p: `Задайте график выполнений для ваших проектов в несколько кликов. Получайте информацию о выполнении каждой задачи. Возможность составить график выполнения на целый год и наслаждаться результатом.`,
      additionalClass: true,
    },
    {
      img: itemImgSecond,
      title: "Защита скрипта и система лицензий",
      p: `Вы можете создать свой продукт и продвигать на рынке под своим брендом. Для Премиум пользователей доступна защита скрипта от копирования и возможность продажи другим пользователям по лицензии.`,
    },
    {
      img: itemImgSecond,
      title: "Автоматические обновления скрипта",
      p: `Система обновлений позволяет в один клик обновить скрипт на всех удаленных ПК. Это может быть удобно при масштабировании личных бизнес процессов или при наличии клиентов которые используют вашу автоматизацию.`,
      decorationImgs: [
        <>
          <div className="plus top left">
            <img src={plusImg} alt="" />
          </div>
          <div className="plus top center">
            <img src={plusImg} alt="" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="" />
          </div>
        </>,
      ],
    },
    {
      img: itemImgSecond,
      title: "Премиум поддержка",
      p: `Мы предлагаем поддержку по Email или Skype для премиум пользователей (только сообщения). В неe включены рекомендации по выполнению конкретных задач и решение технических проблем.`,
    },
  ];
  const windowHeight = useRef(window.innerHeight);
  const isLaptop = 600 > windowHeight.current;
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content={`${
            isLaptop
              ? "width=device-width, initial-scale=0.6"
              : "width=device-width, initial-scale=1"
          }`}
        />
      </Helmet>
      <Intro />
      <SubIntro />
      <Interface />
      <Automatisation />
      <How />
      <Opportunities
        title={["Основные", <span>возможности</span>, "BAS"]}
        supTitle="бесплатно"
        isBtn={true}
        items={firstAdditinalItems}
      />
      <Opportunities
        title={[
          "Премиум",
          <div className="btn btn-gradient btn-with-border">
            возможности
            <span className="white-space"></span>
            <span className="border"></span>
          </div>,
        ]}
        // supTitle="бесплатно"
        isBtn={false}
        items={secondAdditinalItems}
      />
      <Version />
      <Cases />
      <Education />
      <Faq />
    </>
  );
}

export default Index;
