import "./FingerWhere.scss";
import plusImg from "../../../img/svgicons/plus.svg";
import { Link } from "react-router-dom";
import FingerWhereItem from "./FingerWhereItem/FingerWhereItem";

import bgImage from "./img/bg.svg";
function FingerWhere() {
  function importAll(image) {
    return image.keys().map(image);
  }
  const fingerImgs = importAll(require.context("./img/", false, /\.(png)$/));
  const fingerWhereItems = [
    {
      title: "Browser AutomationStudio",
      text: "Автоматизация браузера",
      line: [
        <svg
          width="1"
          height="139"
          viewBox="0 0 1 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="139"
            x2="0.500006"
            y2="-2.18557e-08"
            stroke="url(#paint0_linear_3060_3723)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3723"
              x1="1"
              y1="139"
              x2="7.44946"
              y2="138.7"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4E547" />
              <stop offset="0.3" stop-color="#F4C842" />
              <stop offset="1" stop-color="#EE8D48" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
    {
      title: "FingerprintManager",
      text: "Антидетект Браузер",
      line: [
        <svg
          width="138"
          height="108"
          viewBox="0 0 138 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H36.6676C46.5527 1 54.955 8.22163 56.4405 17.9944L67.3865 90.0055C68.872 99.7784 77.2743 107 87.1594 107H138"
            stroke="url(#paint0_linear_3060_3642)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3642"
              x1="0"
              y1="1"
              x2="145.428"
              y2="36.1555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE8D48" />
              <stop offset="0.7" stop-color="#F4C842" />
              <stop offset="1" stop-color="#F4E547" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
    {
      title: "Puppeteer",
      text: "Плагин для смены Fingerprint Puppeteer",
      line: [
        <svg
          width="138"
          height="108"
          viewBox="0 0 138 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138 1H101.332C91.4473 1 83.045 8.22163 81.5595 17.9944L70.6135 90.0055C69.128 99.7784 60.7257 107 50.8406 107H1.04308e-07"
            stroke="url(#paint0_linear_3060_3643)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3643"
              x1="138"
              y1="1"
              x2="-7.42847"
              y2="36.1555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EE8D48" />
              <stop offset="0.7" stop-color="#F4C842" />
              <stop offset="1" stop-color="#F4E547" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
    {
      title: "CustomServers",
      text: "Сбор базы отпечатков с реальных устройств",
      line: [
        <svg
          width="138"
          height="1"
          viewBox="0 0 138 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="138"
            y1="0.5"
            y2="0.5"
            stroke="url(#paint0_linear_3060_3724)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3724"
              x1="138"
              y1="0"
              x2="137.698"
              y2="-6.44926"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4E547" />
              <stop offset="0.3" stop-color="#F4C842" />
              <stop offset="1" stop-color="#EE8D48" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
    {
      title: "Selenium",
      text: "Плагин для подмены Fingerprint Selenium",
      line: [
        <svg
          width="139"
          height="1"
          viewBox="0 0 139 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="0.5"
            x2="139"
            y2="0.5"
            stroke="url(#paint0_linear_3060_3725)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3725"
              x1="0"
              y1="1"
              x2="0.299896"
              y2="7.44946"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4E547" />
              <stop offset="0.3" stop-color="#F4C842" />
              <stop offset="1" stop-color="#EE8D48" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
    {
      title: "FingerprintDetector",
      text: "Инструмент для анализа сайтов",
      line: [
        <svg
          width="138"
          height="108"
          viewBox="0 0 138 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138 1H101.332C91.4473 1 83.045 8.22163 81.5595 17.9944L70.6135 90.0055C69.128 99.7784 60.7257 107 50.8406 107H1.04308e-07"
            stroke="url(#paint0_linear_3060_3644)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3644"
              x1="138"
              y1="1"
              x2="-7.42847"
              y2="36.1555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4E547" />
              <stop offset="0.3" stop-color="#F4C842" />
              <stop offset="1" stop-color="#EE8D48" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
    {
      title: "Playwright",
      text: "Плагин для изменения Fingerprint Playwright",
      line: [
        <svg
          width="139"
          height="108"
          viewBox="0 0 139 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1H37.0766C46.9535 1 55.3515 8.21002 56.8463 17.9732L67.8781 90.0268C69.3729 99.79 77.7708 107 87.6477 107H139"
            stroke="url(#paint0_linear_3060_3645)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3060_3645"
              x1="0"
              y1="1"
              x2="146.365"
              y2="36.6382"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F4E547" />
              <stop offset="0.3" stop-color="#F4C842" />
              <stop offset="1" stop-color="#EE8D48" />
            </linearGradient>
          </defs>
        </svg>,
      ],
    },
  ];

  return (
    <div className="where-finger block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>

        <header className="block-header border-1 center flex">
          <h2>
            <span>Где</span>
            использовать?
          </h2>
        </header>
        <main className="where-finger__row">
          {fingerWhereItems.map((item, i) => {
            return (
              <FingerWhereItem
                img={fingerImgs[i]}
                title={item.title}
                text={item.text}
                line={item.line}
              />
            );
          })}
          <div className="where-finger__bg">
            <img src={bgImage} alt="" />
            <div className="shadow"></div>
          </div>
          <div className="shadow"></div>
        </main>
        <footer className="where-finger__footer">
          <div className="line left">
            <svg
              width="77"
              height="83"
              viewBox="0 0 77 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.4633 1H29.4329C19.881 1 11.6624 7.75434 9.81181 17.1252L1.71504 58.1252C-0.72632 70.4876 8.73493 82 21.3361 82H76.4629"
                stroke="url(#paint0_linear_3133_4685)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3133_4685"
                  x1="66.4629"
                  y1="1"
                  x2="-78.027"
                  y2="35.6755"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F4E547" />
                  <stop offset="0.3" stop-color="#F4C842" />
                  <stop offset="1" stop-color="#EE8D48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <Link to="#" className="btn-finger">
            <div class="btn-finger__border">
              <div class="btn-finger__text">получить ключ</div>
            </div>
          </Link>
          <p>20$ в месяц за доступ ко всем продуктам.</p>
          <div className="line right">
            <svg
              width="76"
              height="83"
              viewBox="0 0 76 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99962 1H47.03C56.5819 1 64.8005 7.75434 66.6511 17.1252L74.7479 58.1252C77.1892 70.4876 67.728 82 55.1268 82H0"
                stroke="url(#paint0_linear_3133_4684)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3133_4684"
                  x1="10"
                  y1="1"
                  x2="154.49"
                  y2="35.6755"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F4E547" />
                  <stop offset="0.3" stop-color="#F4C842" />
                  <stop offset="1" stop-color="#EE8D48" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FingerWhere;
