import VersionItem from "./VersionItem/VerisonItem";
import plusImg from "../../../img/svgicons/plus.svg";
import "./Version.scss";

import linkImg from "../../../img/svgicons/link-dark.svg";
import minusImg from "../../../img/svgicons/munis-black.svg";
import arrowImg from "../../../img/svgicons/arrow-down-black.svg";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

function Version(params) {
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
          content="По умолчанию лимит запросов равен 100, но вы можете настроить аутентификацию по ip, что увеличит лимит до 1000"
          openOnHover
        />,
      ],
    },
  ];

  return (
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
        <table className="version__table">
          <tbody>
            <tr>
              <th></th>
              <th>Бесплатная версия</th>
              <th>Премиум версия</th>
            </tr>
            {tableItems.map((cell) => {
              return (
                <VersionItem
                  property={cell.property}
                  free={cell.free}
                  premium={cell.premium}
                />
              );
            })}
          </tbody>
        </table>
        <article className="btns">
          <label className="label">
            <div className="btn-container">
              <Link to="#" className="btn-finger btn-finger__bordered">
                <div className="btn-finger__border">
                  <div className="btn-finger__text">
                    как пользоваться бесплатно
                  </div>
                </div>
              </Link>
            </div>
          </label>
          <label className="label">
            <Link to="#" className="btn-finger">
              <div className="btn-finger__border">
                <div className="btn-finger__text">купить 20$</div>
              </div>
            </Link>
            <p className="label__text">1 месяц</p>
          </label>
          <label className="label">
            <Link to="#" className="btn-finger">
              <div className="btn-finger__border">
                <div className="btn-finger__text">
                  купить 40$ <s> (60$)</s>
                </div>
              </div>
            </Link>

            <p className="label__text">3 месяца</p>
          </label>
        </article>
      </div>
    </article>
  );
}
export default Version;
