import "./Index.scss";
import How from "./How/How";
import Faq from "../Common/Faq/Faq";
import Cases from "./Cases/Cases";
import Intro from "./Intro/Intro";
import Version from "../Common/Version/Version";
import SubIntro from "./SubIntro/SubIntro";
import Interface from "./Interface/Interface";
import Education from "./Education/Education";
import Opportunities from "./Opportunities/Opportunities";
import Automatisation from "./Automatisation/Automatisation";
import CustomBtn from "../Common/Btns/CustomBtn";

import plusImg from "../../img/svgicons/plus.svg";

import minusImg from "../../img/svgicons/munis.svg";
import arrowImg from "../../img/svgicons/arrow-down.svg";

import { Link } from "react-router-dom";
function Index({ setIsLoading, handleLoading }) {
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
      p: `Смена отпечатка браузера с помощью сервиса FingerprintSwitcher для защиты вашей личности.`,
    },
    {
      title: "Система профилей и Cookies",
      p: `Сохраняйте авторизацию на сайтах без каких либо ограничений по количеству профилей.`,
    },
    {
      title: "Прокси",
      p: `Защита вашей конфиденциальности с помощью http и socks5 прокси путем смены IP адреса.`,
    },
  ];
  const secondAdditinalItems = [
    {
      title: "Конструктор пользовательского интерфейса",
      p: `Создайте пользовательский интерфейс с помощью системы ресурсов. Премиум пользователи имеют дополнительную возможность создать кастомный интерфейс с помощью веб-технологий (HTML, javascript).`,
      additionalClass: "big",
    },
    {
      title: "Планировщик задач",
      p: `Задайте график выполнений для ваших проектов в несколько кликов. Получайте информацию о выполнении каждой задачи. Возможность составить график выполнения на целый год и наслаждаться результатом.`,
      additionalClass: "big",
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
      additionalClass: "support",
      title: "Премиум поддержка",
      p: `Мы предлагаем поддержку по Email или Skype для премиум пользователей (только сообщения). В неe включены рекомендации по выполнению конкретных задач и решение технических проблем.`,
    },
  ];
  const faqItems = [
    {
      question: "В чем отличие BAS от антидетект браузера?",
      asnwer: [
        <p>
          В{" "}
          <Link to="https://browserautomation.io/ru/antidetect-browser/">
            антидетект браузере
          </Link>{" "}
          обычно выполняются руками. BAS это антидетект браузер разработанный
          непосредственно для  автоматизации и масштабирования этих действий,
          что позволит вам освободить свое время и увеличить доход вашего
          бизнеса. Представьте что у вас команда из 100 человек, которые
          одновременно выполняют вашу задачу.
        </p>,
      ],
    },
    {
      question: "На скольких компьютерах я смогу использовать BAS?",
      asnwer: "Любое количество ПК.",
    },
    {
      question: "Есть ли ограничение на потоки или количествах профилей?",
      asnwer:
        "Вы можете использовать любое количество потоков, которое позволит вам мощность вашего ПК. Рекомендуемая нагрузка на процессор не более 90%. Количество профилей без ограничений.",
    },
    {
      question: "Как я могу заработать с помощью BAS?",
      asnwer: [
        <p>
          Вы можете автоматизировать и масштабировать любые бизнес процессы в
          вашей сфере деятельности. Упаковать свою автоматизацию в программу и
          продавать другим пользователям по разовой лицензии или месячной
          подписке. Фриланс. Разрабатывать автоматизацию под заказ для клиентов
          с площадок <Link to="Upwork.com">Upwork.com</Link>{" "}
          <Link to="Fiverr.com">Fiverr.com,</Link>{" "}
          <Link to="Kwork.ru">Kwork.ru,</Link> <Link to="FL.ru">FL.ru.</Link>
        </p>,
      ],
    },
    {
      question: "С чего начать работу в BAS?",

      asnwer: [
        <p>
          Прочитайте и повторите статью{" "}
          <Link to="https://browserautomation.io/ru/start/">Быстрый старт</Link>
        </p>,
      ],
    },
  ];
  const tableItems = [
    {
      property: "Стандартный функционал",
      free: arrowImg,
      premium: arrowImg,
    },
    {
      property: "Поддержка сообщества",
      free: arrowImg,
      premium: arrowImg,
    },
    {
      property: "Создание приложений без защиты.",
      free: arrowImg,
      premium: arrowImg,
    },
    {
      property: "Защита вашего приложения после компиляции",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Профессиональная поддержка",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Управление лицензиями через веб-интерфейс",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Обновление скриптов для всех пользователей одним кликом.",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Доступ к исходному коду",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Запуск приложений без BAS",
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: "Изменяйте интерфейс ваших приложений",
      free: minusImg,
      premium: arrowImg,
    },
  ];
  const tableBtns = [
    {
      btn: [
        <CustomBtn
          textForBtn="Скачать"
          btnClass="btn-index"
          btnType="bordered"
          img={[true, "window"]}
          link="https://browserautomation.io/download/BrowserAutomationStudioInstallAllInOne.exe"
        />,
      ],
      text: "Бесплатно",
    },
    {
      btn: [
        <CustomBtn
          textForBtn="Купить премиум (40$)"
          btnClass="btn-index"
          link="https://bablosoft.com/shop/BASPremium"
        />,
      ],
      text: "6 месяцев",
    },
    {
      btn: [
        <CustomBtn
          textForBtn="Купить премиум (80$)"
          btnClass="btn-index"
          link="https://bablosoft.com/shop/BASPremium"
        />,
      ],
      text: "12 месяцев",
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
        title={[
          "Основные",
          <span>
            <div className="corner top left"></div>
            <div className="corner bottom right"></div>
            <div className="line-border top"></div>
            <div className="line-border right"></div>
            <div className="line-border left"></div>
            <div className="line-border bottom"></div>
            возможности
          </span>,
          "BAS",
        ]}
        supTitle="бесплатно"
        isBtn={true}
        items={firstAdditinalItems}
        images={imagesStandart}
      />
      <Opportunities
        title={[
          "Премиум",

          <div class="btn-index btn-index__bordered" to="/">
            <div class="btn-index__border">
              <div class="btn-index__text">возможности</div>
              <span class="white-space"></span>
            </div>
          </div>,
        ]}
        // supTitle="бесплатно"
        isBtn={false}
        items={secondAdditinalItems}
        images={imagesPremium}
        isPremium={true}
      />
      <article className="version">
        <div className="container">
          <header className="block-header border-2">
            <h2>
              Сравнение
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                версий
              </span>
            </h2>
            <div class="line">
              <svg
                width="430"
                height="56"
                viewBox="0 0 430 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H178.429C179.755 1 181.027 1.52678 181.964 2.46447L233.036 53.5355C233.973 54.4732 235.245 55 236.571 55H430"
                  stroke="url(#paint0_linear_549_3936)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_549_3936"
                    x1="246"
                    y1="55"
                    x2="426.333"
                    y2="29.2834"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stop-color="#272C30" />
                    <stop offset="0.5" stop-color="#3050FB" />
                    <stop offset="0.8" stop-color="#41FFC2" />
                    <stop offset="1" stop-color="#2EDCF9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </header>

          <Version tableItems={tableItems} btns={tableBtns} />

          <header className="block-header border-2 flex-row mt mb">
            <h2>
              Реальные кейсы
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                пользователей
              </span>
            </h2>
            <p>
              Посмотрите реальные примеры автоматизации из разных областей,
              которые принесли своим создателям сотни клиентов и тысячи долларов
              постоянного дохода.
            </p>
          </header>
        </div>
      </article>

      <Cases />
      <Education />

      <article className="faq">
        <div className="container">
          <header className="block-header border-2">
            <h3 className="text-gradient">Еще остались вопросы?</h3>
            <h2>
              Часто задаваемые
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                вопросы
              </span>
            </h2>
          </header>
          <Faq faqItems={faqItems} />
        </div>
      </article>
    </>
  );
}

export default Index;
