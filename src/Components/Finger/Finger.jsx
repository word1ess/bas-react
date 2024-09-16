import "./Finger.scss";
import FingerIntro from "./FingerIntro/FingerIntro.jsx";
import FingerSubIntro from "./FingerSubIntro/FingerSubIntro.jsx";
import FingerAbout from "./FingerAbout/FingerAbout.jsx";
import FingerWhere from "./FingerWhere/FingerWhere.jsx";
import FingerHow from "./FingerHow/FingerHow.jsx";
import FingerPlugins from "./FingerPlugins/FingerPlugins.jsx";
import FingerDop from "./FingerDop/FingerDop.jsx";
import FingerOpportunities from "./FingerOpportunities/FingerOpportunities.jsx";
import Version from "../Common/Version/Version";
import Faq from "../Common/Faq/Faq";

import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

import videoForVersion from "./videoForVersion/videoFS.mp4";
import linkImg from "../../img/svgicons/link-dark.svg";
import minusImg from "../../img/svgicons/munis-black.svg";
import arrowImg from "../../img/svgicons/arrow-down-black.svg";
import faceImg from "../../img/footer/face.webp";
import plusImg from "../../img/svgicons/plus.svg";

function Finger({ setIsLoading, handleLoading }) {
  const faqItems = [
    {
      question: "Могу ли я использовать FingerprintSwitcher/Detector без BAS?",
      asnwer:
        "Да, это возможно с помощью FingerprintManager. Данное приложение дает вам возможность напрямую управлять браузером и менять отпечаток. Вы также можете попробовать плагины для автоматизации чтобы использовать FingerprintSwitcher с selenium, puppeteer, playwright или другими фреймворками.",
    },
    {
      question: "Я сделал платеж, как получить ключ?",
      asnwer: [
        <p>
          Вы можете найти свой ключ в своем личном кабинете здесь{" "}
          <Link to="https://bablosoft.com/login">
            https://bablosoft.com/login
          </Link>
          .
        </p>,
      ],
    },
    {
      question:
        "Мой аккаунт заблокирован, несмотря на то, что я использую FingerprintSwitcher.",
      asnwer:
        "Мы не гарантируем, что после использования FingerprintSwitcher ваш аккаунт никогда не будет заблокирован, так как существует множество других факторов, влияющих на защиту сайта, и проверка отпечатков в браузере - только один из них. Бот может быть заблокирован из-за: плохого прокси, очень частого использования одного профиля, использования только что созданного профиля без истории, слишком быстрой регистрации, слишком большого количества сообщений, постов с подозрительными ссылками, отключения движения мыши и т. д.",
    },
    {
      question:
        "Можете ли вы помочь мне с обходом антибот-защиты на конкретном сайте?",
      asnwer: [
        "Мы не предоставляем такие услуги, только общие советы, такие как: использование FingerprintSwitcher, анализ отчета FingerprintDetector, использование хороших прокси, использование одного прокси для каждой учетной записи, изменение профиля (это делается автоматически, но может быть отключено). Вы также можете сообщить о таком случае, написав на почту mail.to.twaego@gmail.com",
      ],
    },
    {
      question: "Как получить отпечаток браузера для конкретной страны?",
      asnwer:
        "Отпечаток не привязан ни к одной стране. Сайт может узнать страну браузера, проверив язык, системное время и некоторые другие свойства, все они заменяются согласно текущему ip после применения прокси.",
    },
  ];
  const tableItems = [
    {
      property: [
        <p>
          Эмулировать отпечаток <span>Chrome</span>
        </p>,
      ],
      free: [<p>Только Windows</p>],
      premium: [<p>Любая платформа</p>],
    },
    {
      property: [
        <p>
          Эмулировать отпечаток <span>Firefox</span>
        </p>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <p>
          Эмулировать отпечаток <span>Edge</span>
        </p>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <p>
          Эмулировать отпечаток <span>Android</span>
        </p>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <p>
          Эмулировать отпечаток <span>IPhone</span>
        </p>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <p>
          Эмулировать отпечаток <span> для других платформ и браузеров</span>
        </p>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <Link to="#" className="btn-with-image">
          <p>
            Сервис <span>FingerprintDetector</span>
          </p>
          <img src={linkImg} alt="" />
        </Link>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <Link to="#" className="btn-with-image">
          <p>
            Сервис <span>FingerprintManager</span>
          </p>
          <img src={linkImg} alt="" />
        </Link>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <Link to="#" className="btn-with-image">
          <p>
            Сервис <span>PerdectCanvas</span>
          </p>

          <img src={linkImg} alt="" />
        </Link>,
      ],
      free: minusImg,
      premium: arrowImg,
    },
    {
      property: [
        <Link to="#" className="btn-with-image">
          <p>
            Плагины для <span>автоматизации</span>
          </p>

          <img src={linkImg} alt="" />
        </Link>,
      ],
      free: [<p>С ограничениями</p>],
      premium: arrowImg,
    },
    {
      property: [<p>Лимит запросов(за 3 минуты)</p>],
      free: [<p>1</p>],
      premium: [
        <p>100 / 1000</p>,
        <div
          className="table-tip"
          data-tooltip-id="table-tip-size"
          data-tooltip-delay-hide={300}
        >
          ?
        </div>,

        <Tooltip
          id="table-tip-size"
          content="По умолчанию лимит запросов равен 100, но вы можете 
          настроить аутентификацию по ip, что увеличит лимит до 1000"
          place="top-end"
          className="table-tip__tip"
          openOnHover
        />,
      ],
    },
  ];
  const tableBtns = [
    {
      btn: [
        <div className="btn-finger btn-finger__bordered">
          <div className="btn-finger__border">
            <div className="btn-finger__text">как пользоваться бесплатно</div>
          </div>
        </div>,
      ],
      modal: <video src={videoForVersion} controls></video>,
    },
    {
      btn: [
        <Link
          to="https://bablosoft.com/directbuy/FingerprintSwitcher/1"
          className="btn-finger"
        >
          <div className="btn-finger__border">
            <div className="btn-finger__text">купить 20$</div>
          </div>
        </Link>,
      ],
      text: "1 месяц",
    },
    {
      btn: [
        <Link
          to="https://bablosoft.com/directbuy/FingerprintSwitcher/2"
          className="btn-finger"
        >
          <div className="btn-finger__border">
            <div className="btn-finger__text">
              купить 40$ <s> (60$)</s>
            </div>
          </div>
        </Link>,
      ],
      text: "3 месяца",
    },
  ];
  return (
    <>
      <FingerIntro />
      <FingerSubIntro />
      <article className="block-separator block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
        </div>
      </article>
      <FingerAbout />
      <FingerWhere />
      <FingerOpportunities />
      <FingerHow />
      <FingerPlugins />
      <FingerDop />
      <article className="version white block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
          <header className="block-header border-1 flex">
            <h2>
              <span>
                Цены
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
              </span>
            </h2>
            <p>
              Вы можете получить доступ к нашей базе данных и изменить отпечаток
              браузера бесплатно или с расширенными функционалом:
            </p>
            <div class="line">
              <svg
                width="362"
                height="116"
                viewBox="0 0 362 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1H127.363C135.727 1 143.208 6.20487 146.115 14.0474L178.706 101.953C181.614 109.795 189.095 115 197.459 115H362"
                  stroke="url(#paint0_linear_3060_3969)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3060_3969"
                    x1="0"
                    y1="1"
                    x2="299.616"
                    y2="177.661"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#EE8D48" />
                    <stop offset="0.7" stop-color="#F4C842" />
                    <stop offset="1" stop-color="#F4E547" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </header>
          <Version tableItems={tableItems} btns={tableBtns} />
        </div>
      </article>
      <article className="faq white block-dashed-top block-dashed-sides">
        <div className="container">
          <div className="plus top left">
            <img src={plusImg} alt="plus" />
          </div>
          <div className="plus top right">
            <img src={plusImg} alt="plus" />
          </div>
          <header className="block-header border-1">
            <h2>
              Еще остались
              <span>
                <div className="corner top left"></div>
                <div className="corner bottom right"></div>
                <div className="line-border top"></div>
                <div className="line-border right"></div>
                <div className="line-border left"></div>
                <div className="line-border bottom"></div>
                вопросы?
              </span>
            </h2>
          </header>
          <Faq faqItems={faqItems} />
        </div>
      </article>
      <article className="footer-eyes">
        <article className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
          <img src={faceImg} alt="" />
        </article>
      </article>
    </>
  );
}
export default Finger;
