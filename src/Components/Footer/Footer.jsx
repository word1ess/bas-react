import "./Footer.scss";

import heartImg from "../../img/svgicons/heart.svg";
import plusImg from "../../img/svgicons/plus.svg";
import FooterProduct from "./FooterProduct/FooterProduct";
import { Link } from "react-router-dom";
function Footer({
  additionalClass,
  linkImg,
  linkImageOrange,
  linkImgProductFooter,
  productsImgs,
}) {
  const footerProducts = [
    {
      link: "https://browserautomation.io/ru/",
      title: "Browser AutomationStudio",
      text: "Автоматизация браузера",
      linkImg,
    },
    {
      link: "https://browserautomation.io/ru/fingerprint-switcher",
      title: "FingerprintSwitcher",
      text: "Измените отпечаток браузера",
      linkImg: linkImageOrange ? linkImageOrange : linkImg,
    },
    {
      link: "https://browserautomation.io/ru/fingerprint-manager",
      title: "FingerprintManager",
      text: "Антидетект браузер",
      linkImg,
    },
  ];

  return (
    <footer
      className={`footer block-dashed-top block-dashed-sides ${additionalClass}`}
    >
      <div className="container with-shadow">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="footer__row block-dashed-content">
          <nav className="footer__item height">
            <h2>Наши продукты</h2>

            <main className="footer__products">
              {footerProducts.map((product, i) => {
                return (
                  <FooterProduct
                    link={product.link}
                    productImg={productsImgs[i]}
                    title={product.title}
                    text={product.text}
                    linkImg={product.linkImg}
                  />
                );
              })}
            </main>
          </nav>
          <nav className="footer__item">
            <h2>Документация</h2>
            <Link to="https://browserautomation.io/ru/start/">
              Быстрый старт
            </Link>
            <Link to="https://wiki.bablosoft.com/doku.php">Документация</Link>
          </nav>
          <nav className="footer__item">
            <h2>Ресурсы</h2>
            <Link to="https://bablosoft.com/login">Вход</Link>
            <Link to="https://bablosoft.com/register ">Регистрация</Link>
            <Link to="#">
              Партнерская <br /> программа
            </Link>
          </nav>
          <nav className="footer__item">
            <h2>Контакты</h2>
            <Link
              to="https://t.me/browserautomation_io"
              className="btn-with-image"
            >
              Telegram
              <img src={linkImgProductFooter} alt="link" />
            </Link>
            <Link
              to="https://www.youtube.com/@browserautomationstudio3109"
              className="btn-with-image"
            >
              YouTube
              <img src={linkImgProductFooter} alt="link" />
            </Link>
            <Link
              to="https://x.com/browserautomation_io"
              className="btn-with-image"
            >
              Twitter
              <img src={linkImgProductFooter} alt="link" />
            </Link>
            <Link to="#" className="btn-with-image">
              Facebook
              <img src={linkImgProductFooter} alt="link" />
            </Link>
            <Link
              to="mailto:mail.to.twaego@gmail.com"
              className="btn-with-image"
            >
              EMail
              <img src={linkImgProductFooter} alt="link" />
            </Link>
          </nav>
          <div className="footer__copy">
            <div className="made">
              <p>Made in</p>
              <img src={heartImg} alt="love" />
            </div>
            <p>© bablosoft 2024 все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
