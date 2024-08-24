import "./Finger.scss";
import FingerIntro from "./FingerIntro/FingerIntro.jsx";
import FingerSubIntro from "./FingerSubIntro/FingerSubIntro.jsx";
import FingerAbout from "./FingerAbout/FingerAbout.jsx";
import FingerWhere from "./FingerWhere/FingerWhere.jsx";
import FingerHow from "./FingerHow/FingerHow.jsx";
import FingerPlugins from "./FingerPlugins/FingerPlugins.jsx";
import FingerDop from "./FingerDop/FingerDop.jsx";
import FingerOpportunities from "./FingerOpportunities/FingerOpportunities.jsx";
import plusImg from "../../img/svgicons/plus.svg";
import Version from "./Version/Version";
import Faq from "../Common/Faq/Faq";
import { Link } from "react-router-dom";
import faceImg from "../../img/footer/face.svg";

function Finger() {
  const faqItems = [
    {
      question: "Могу ли я использовать FingerprintSwitcher/Detector без BAS?",
      asnwer:
        "Да, это возможно с помощью FingerprintManager. Данное приложение дает вам возможность напрямую управлять браузером и менять отпечаток. Вы также можете попробовать плагины для автоматизации чтобы использовать FingerprintSwitcher с selenium, puppeteer, playwright или другими фреймворками.",
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
          с площадок
          <Link to="Upwork.com">Upwork.com</Link>
          <Link to="Fiverr.com">Fiverr.com,</Link>
          <Link to="Kwork.ru">Kwork.ru,</Link>
          <Link to="FL.ru">FL.ru.</Link>
        </p>,
      ],
    },
    {
      question: "С чего начать работу в BAS?",
      asnwer: "Прочитайте и повторите статью Быстрый старт.",
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
      <Version />
      <Faq faqItems={faqItems} />
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
