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

import plusImg from "../../img/svgicons/plus.svg";

function Index() {
  function importAll(image) {
    return image.keys().map(image);
  }

  const imagesStandart = importAll(
    require.context(
      "./Opportunities/img/standart/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesPremium = importAll(
    require.context("./Opportunities/img/premium/", false, /\.(png|jpe?g|svg)$/)
  );

  const firstAdditinalItems = [
    {
      title: "Автоматизация любых действий",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и
    клики мыши, перетаскивание элементов, прокрутка, выбор элементов
    из выпадающего списка, нативная эмуляция клавиатуры, сочетания
    клавиш и т.д.`,
    },
    {
      title: "Автоматизация в визуальном редакторе",
      p: `Без знаний программирования:
      АИ-помощник/Запись действий/Визуальный конструктор..`,
    },
    {
      title: "Многопоточность",
      p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
    },
    {
      title: "FingerprintSwitcher",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и клики мыши, перетаскивание элементов, прокрутка, выбор элементов из выпадающего списка, нативная эмуляция клавиатуры, сочетания клавиш и т.д.`,
    },
    {
      title: "Система профилей и Cookies",
      p: `Без знаний программирования:
      АИ-помощник/Запись действий/Визуальный конструктор..`,
    },
    {
      title: "Прокси",
      p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
    },
  ];
  const secondAdditinalItems = [
    {
      title: "Конструктор пользовательского интерфейса",
      p: `Создайте пользовательский интерфейс с помощью системы ресурсов. Премиум пользователи имеют дополнительную возможность создать кастомный интерфейс с помощью веб-технологий (HTML, javascript).`,
      additionalClass: true,
    },
    {
      title: "Планировщик задач",
      p: `Задайте график выполнений для ваших проектов в несколько кликов. Получайте информацию о выполнении каждой задачи. Возможность составить график выполнения на целый год и наслаждаться результатом.`,
      additionalClass: true,
    },
    {
      title: "Защита скрипта и система лицензий",
      p: `Вы можете создать свой продукт и продвигать на рынке под своим брендом. Для Премиум пользователей доступна защита скрипта от копирования и возможность продажи другим пользователям по лицензии.`,
    },
    {
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
      title: "Премиум поддержка",
      p: `Мы предлагаем поддержку по Email или Skype для премиум пользователей (только сообщения). В неe включены рекомендации по выполнению конкретных задач и решение технических проблем.`,
    },
  ];

  return (
    <>
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
        images={imagesStandart}
      />
      <Opportunities
        title={[
          "Премиум",
          <div className="btn-container">
            <div className="btn btn-gradient btn-with-border">
              возможности
              <span className="white-space"></span>
              <span className="border"></span>
            </div>
          </div>,
        ]}
        // supTitle="бесплатно"
        isBtn={false}
        items={secondAdditinalItems}
        images={imagesPremium}
        isPremium={true}
      />
      <Version />
      <Cases />
      <Education />
      <Faq />
    </>
  );
}

export default Index;
