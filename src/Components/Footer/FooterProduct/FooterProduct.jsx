import { Link } from "react-router-dom";
function FooterProduct({ link, productImg, title, text, linkImg }) {
  return (
    <Link to={link} className="footer__product">
      <div className="footer__product-border">
        <img src={productImg} alt="product" />
        <div>
          <p>{title}</p>
          <p>{text}</p>
        </div>
        <img src={linkImg} alt="link" />
      </div>
      <span className="white-space"></span>
    </Link>
  );
}

export default FooterProduct;
