import { Link } from "react-router-dom";
function FooterProduct({ productImg, title, text, linkImg }) {
  return (
    <Link
      to="#"
      className="footer__product btn btn-gradient btn-with-border btn-with-image"
    >
      <img src={productImg} alt="product" />
      <div>
        <p>{title}</p>
        <p>{text}</p>
      </div>
      <img src={linkImg} alt="link" />
      <span className="white-space"></span>
      <span className="border"></span>
    </Link>
  );
}

export default FooterProduct;
