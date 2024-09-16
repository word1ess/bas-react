import "./FingerPlugins.scss";

import FingerPluginsItem from "./FingerPluginsItem/FingerPluginsItem";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import plusImg from "../../../img/svgicons/plus.svg";
import linkImg from "../../../img/svgicons/link-dark.svg";
import itemImgFirst from "./img/1.webp";
import itemImgSecond from "./img/2.webp";
import itemImgThird from "./img/3.webp";
import gitHubImg from "./img/github.png";

function FingerPlugins() {
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
  const fingerPluginsItems = [
    {
      forScrollClass: "puppeteer",
      img: itemImgFirst,
      title: [
        <h3>
          Плагин <span>Puppeteer</span> для смены отпечатка браузера
        </h3>,
      ],
      text: [
        `Puppeteer — это мощная библиотека автоматизации работы с браузером для веб-скрейпинга и интеграционного тестирования. Инструмент позволяет разработчикам, тестировщикам и аналитикам данных управлять браузером из кода, имитируя действия пользователя.
          ${((<br />), (<br />))}
        Наша команда предлагает open-source плагин Puppeteer для изменения отпечатка браузера.`,
      ],
      link: "https://github.com/CheshireCaat/puppeteer-with-fingerprints",
    },
    {
      forScrollClass: "selenium",
      img: itemImgSecond,
      title: [
        <h3>
          Плагин <span>Selenium</span> для смены отпечатка браузера
        </h3>,
      ],
      text: [
        "Selenium — это широко используемая среда тестирования с открытым исходным кодом для автоматизации взаимодействия с веб-браузером. Платформа поддерживает различные веб-браузеры и платформы, что делает ее универсальной для комплексного тестирования веб-приложений. Вы можете легко интегрировать наш плагин в Selenium для изменения отпечатка браузера.",
      ],
      link: "https://github.com/CheshireCaat/selenium-with-fingerprints",
    },
    {
      forScrollClass: "playwright",
      img: itemImgThird,

      title: [
        <h3>
          Плагин <span>Playwright</span> для смены отпечатка браузера
        </h3>,
      ],
      text: [
        `Playwright — это фреймворк для веб-тестирования и автоматизации. Он позволяет тестировать Chromium, Firefox и WebKit с помощью единого API. Playwright создан для обеспечения кросс-браузерной веб-автоматизации.
        Вы можете легко интегрировать наш сервис замены отпечатка браузера для защиты конфиденциальности.`,
      ],
      link: "https://github.com/CheshireCaat/playwright-with-fingerprints",
    },
  ];
  return (
    <article className="plugins-finger block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <header className="block-header border-1">
          {isMobile ? (
            <h2>
              Плагины для
              <span>
                <div className="corner top left"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                <div className="corner bottom right"></div>
                сторонних
              </span>
              фреймворков
            </h2>
          ) : (
            <h2>
              Плагины
              <span>
                <div className="corner top left"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                <div className="corner bottom right"></div>
                для сторонних фреймворков
              </span>
            </h2>
          )}
        </header>
        <main className="plugins-finger__row">
          {fingerPluginsItems.map((item) => {
            return (
              <FingerPluginsItem
                forScrollClass={item.forScrollClass}
                img={item.img}
                title={item.title}
                text={item.text}
                link={item.link}
              />
            );
          })}
        </main>
        <article className="plugins-finger__item big">
          <div className="plugins-finger__github">
            <img src={gitHubImg} alt="" />
          </div>
          <h3>
            <span>Универсальный плагин</span>
          </h3>
          <div className="plugins-finger__blocks">
            <div className="plugins-finger__block">
              <p>
                Каждый из вышеперечисленных плагинов адаптирован для конкретного
                фреймворка. Если вы хотите подключить фреймворк, которого нет в
                списке, вы можете использовать универсальный плагин. Он
                позволяет запустить браузер, изменить его отпечаток, а также
                поддерживает соединение по CDP. Поэтому его можно использовать с
                любой библиотекой автоматизации, которая может подключаться
                через CDP.Плагин, который работает для любого фреймворка
                автоматизации доступен здесь
              </p>
            </div>
            <div className="plugins-finger__block">
              <p>
                Но мы рекомендуем использовать BrowserAutomationStudio для
                автоматизации браузера, поскольку он позволяет опытным
                пользователям он позволяет  ускорить скорость разработки в
                несколько раз за счет визуального конструктора логики и готовых
                модулей, а для новичков создавать свою автоматизацию без знаний
                программирования.
              </p>
              <Link
                to="https://github.com/CheshireCaat/browser-with-fingerprints"
                class="btn-finger"
              >
                <div class="btn-finger__border">
                  <div class="btn-finger__text btn-with-image">
                    Скачать на GitHub
                    <img src={linkImg} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </article>
  );
}

export default FingerPlugins;
