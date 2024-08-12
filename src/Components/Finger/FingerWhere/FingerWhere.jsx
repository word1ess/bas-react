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
    },
    {
      title: "FingerprintManager",
      text: "Антидетект Браузер",
    },
    {
      title: "Puppeteer",
      text: "Плагин для смены Fingerprint Puppeteer",
    },
    {
      title: "CustomServers",
      text: "Сбор базы отпечатков с реальных устройств",
    },
    {
      title: "Selenium",
      text: "Плагин для подмены Fingerprint Selenium",
    },
    {
      title: "FingerprintDetector",
      text: "Инструмент для анализа сайтов",
    },
    {
      title: "Playwright",
      text: "Плагин для изменения Fingerprint Playwright",
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
              />
            );
          })}
          <div className="where-finger__bg">
            <img src={bgImage} alt="" />
          </div>
        </main>
        <footer className="where-finger__footer">
          <Link to="#" className="btn-finger">
            <div class="btn-finger__border">
              <div class="btn-finger__text">получить ключ</div>
            </div>
          </Link>
          <p>20$ в месяц за доступ ко всем продуктам.</p>
        </footer>
      </div>
    </div>
  );
}

export default FingerWhere;
