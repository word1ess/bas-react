import "./FingerHow.scss";
import plusImg from "../../../img/svgicons/plus.svg";

import firstImg from "./img/1.webp";
import secondImg from "./img/2.webp";
import videoImg from "./video/interface.webm";
import FingerHowItem from "./FingerHowItem/FingerHowItem";

function FingerHow() {
  const fingerHowItems = [
    {
      forScrollClass: "bas",
      img: firstImg,
      title: "Browser AutomationStudio",
      body: [
        <p>
          BAS является бесплатным и наиболее легким способом автоматизации
          браузера. Софт позволяет изменять отпечатки браузера и также имеет
          много других функций: удобная и простая многопоточность, создание
          автономных приложений, визуальное программирование и многое другое.
          Если вы начинаете новый проект  и вам нужна подмена отпечатков, мы
          настоятельно рекомендуем использовать именно BAS. 
          <br />
          <br />
          BAS по API подключается к сервису FingerprintSwitcher, берет из базы
          данных отпечаток и автоматически подменяет взамен вашего реального.
          Вам нужно всего лишь один раз ввести ключ и выбрать предпочитаемую OC
          и браузер.
        </p>,
      ],
      video: videoImg,
      btns: [
        {
          link: "https://browserautomation.io/download/BrowserAutomationStudioInstallAllInOne.exe",
          text: "Скачать BAS",
          classes: ["btn-finger"],
        },
        {
          link: "https://browserautomation.io/ru/",
          text: "Подробнее",
          classes: ["btn-finger", "btn-finger__bordered"],
        },
      ],
    },
    {
      forScrollClass: "fm",
      img: secondImg,
      title: "FingerprintManager",
      body: [
        <p>
          Антидетект браузер, в отличии от BAS предназначен для ручной работы.
          Он  позволяет работать с любым количеством профилей браузера Chrome
          одновременно. Это означает, что любой сайт будет распознавать профили
          как совершенно разных, ничем не связанных друг с другом интернет
          пользователей. Такой эффект достигается за счет:
        </p>,
        <ul>
          <li>
            Использования уникального отпечатка для каждого браузера с помощью
            сервиса FingerprintSwitcher.
          </li>
          <li>Получением отпечатка браузера из реальных устройств.</li>
          <li>
            Хранения данных cookies, localStorage и других в разных папках для
            каждого профиля.
          </li>
          <li>Смены прокси со специальной технологией туннелирования.</li>
        </ul>,
      ],
      video: videoImg,
      btns: [
        {
          link: "https://data.bablosoft.com/fingerprint-manager/files/distr/FingerprintManager3.zip",
          text: "Скачать",
          classes: ["btn-finger"],
        },
        {
          link: "https://browserautomation.io/ru/fingerprint-manager",
          text: "Подробнее",
          classes: ["btn-finger", "btn-finger__bordered"],
        },
      ],
    },
  ];
  return (
    <>
      <article className="how-finger block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="line left">
            <svg
              width="290"
              height="66"
              viewBox="0 0 290 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1H101.133C108.543 1 115.346 5.09717 118.811 11.6472L141.405 54.3528C144.87 60.9028 151.673 65 159.083 65H290"
                stroke="url(#paint0_linear_3099_4045)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3099_4045"
                  x1="0"
                  y1="1"
                  x2="189.395"
                  y2="160.352"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EE8D48" />
                  <stop offset="0.7" stop-color="#F4C842" />
                  <stop offset="1" stop-color="#F4E547" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="line right">
            <svg
              width="287"
              height="54"
              viewBox="0 0 287 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M287 1H185.897C179.1 1 172.768 4.45254 169.086 10.1664L147.39 43.8336C143.708 49.5475 137.376 53 130.578 53H-8.67248e-06"
                stroke="url(#paint0_linear_3099_4046)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3099_4046"
                  x1="287"
                  y1="1"
                  x2="130.862"
                  y2="161.014"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EE8D48" />
                  <stop offset="0.7" stop-color="#F4C842" />
                  <stop offset="1" stop-color="#F4E547" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="line right bottom">
            <svg
              width="138"
              height="32"
              viewBox="0 0 138 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M138 1H96.1031C88.7378 1 81.9685 5.04817 78.4836 11.5369L73.6894 20.4631C70.2045 26.9518 63.4352 31 56.0699 31H1.04308e-07"
                stroke="url(#paint0_linear_3133_4687)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3133_4687"
                  x1="138"
                  y1="1"
                  x2="49.0019"
                  y2="77.0167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EE8D48" />
                  <stop offset="0.7" stop-color="#F4C842" />
                  <stop offset="1" stop-color="#F4E547" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <header class="block-header flex border-1 center">
            <h2>
              Как это
              <span>
                работает
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
              </span>
            </h2>
          </header>
        </div>
      </article>
      <article className="how-finger block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
          <header class="block-header border-1">
            <h2>
              Легкая интеграция
              <span>
                в наши продукты
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
              </span>
            </h2>
          </header>
          <main className="how-finger__row">
            {fingerHowItems.map((item) => {
              return (
                <FingerHowItem
                  forScrollClass={item.forScrollClass}
                  img={item.img}
                  title={item.title}
                  body={item.body}
                  video={item.video}
                  btns={item.btns}
                />
              );
            })}
          </main>
        </div>
      </article>
    </>
  );
}

export default FingerHow;
