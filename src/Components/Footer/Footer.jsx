import "./Footer.scss";

import heartImg from "../../img/svgicons/heart.svg";
import plusImg from "../../img/svgicons/plus.svg";
import FooterProduct from "./FooterProduct/FooterProduct";
import { Link } from "react-router-dom";
function Footer({ additionalClass, linkImg }) {
  const footerProducts = [
    {
      title: "Browser AutomationStudio",
      text: "Автоматизация браузера",
      linkImg,
    },
    {
      title: "FingerprintSwitcher",
      text: "Измените отпечаток браузера",
      linkImg,
    },
    {
      title: "FingerprintManager",
      text: "Антидетект браузер",
      linkImg,
    },
  ];
  function importAll(image) {
    return image.keys().map(image);
  }
  const productsImgs = importAll(
    require.context("../../img/footer/", false, /\.(svg)$/)
  );
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

            {footerProducts.map((product, i) => {
              return (
                <FooterProduct
                  productImg={productsImgs[i]}
                  title={product.title}
                  text={product.text}
                  linkImg={product.linkImg}
                />
              );
            })}
          </nav>
          <nav className="footer__item">
            <h2>Документация</h2>
            <Link to="#">Быстрый старт</Link>
            <Link to="#">Документация</Link>
          </nav>
          <nav className="footer__item">
            <h2>Ресурсы</h2>
            <Link to="#">Вход</Link>
            <Link to="#">Регистрация</Link>
            <Link to="#">
              Партнерская <br /> программа
            </Link>
          </nav>
          <nav className="footer__item">
            <h2>Контакты</h2>
            <Link to="#" className="btn-with-image">
              Telegram
              <img src={linkImg} alt="link" />
            </Link>
            <Link to="#" className="btn-with-image">
              YouTube
              <img src={linkImg} alt="link" />
            </Link>
            <Link to="#" className="btn-with-image">
              Twitter
              <img src={linkImg} alt="link" />
            </Link>
            <Link to="#" className="btn-with-image">
              Facebook
              <img src={linkImg} alt="link" />
            </Link>
            <Link to="#" className="btn-with-image">
              EMail
              <img src={linkImg} alt="link" />
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
