import AutomatisationItem from "./AutomatisationItem/AutomatisationItem";
import imgOne from "../../../img/svgicons/auto-1.svg";
import imgTwo from "../../../img/svgicons/auto-2.svg";
import imgThree from "../../../img/svgicons/auto-3.svg";
import imgFour from "../../../img/svgicons/auto-4.svg";
import imgFive from "../../../img/svgicons/auto-5.svg";
import imgSix from "../../../img/svgicons/auto-6.svg";
import imgSeven from "../../../img/svgicons/auto-7.svg";
import imgEight from "../../../img/svgicons/auto-8.svg";
import imgNine from "../../../img/svgicons/auto-9.svg";
import plusImg from "../../../img/svgicons/plus.svg";
function Automatisation() {
  const AutomatisationItems = [
    {
      img: imgOne,
      title: "Клик",
    },
    {
      img: imgTwo,
      title: "Перетянуть",
    },
    {
      img: imgThree,
      title: "Прокрутить",
    },
    {
      img: imgFour,
      title: "Почта",
    },
    {
      img: imgFive,
      title: "SMS",
    },
    {
      img: imgSix,
      title: "БД",
    },
    {
      img: imgSeven,
      title: "Excel",
    },
    {
      img: imgEight,
      title: "Парсинг",
    },
    {
      img: imgNine,
      title: "Ввод текста",
    },
  ];
  return (
    <article className="automatisation block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="tickers">
          <div className="automatisation__row ticker">
            {AutomatisationItems.map((item) => {
              return <AutomatisationItem img={item.img} title={item.title} />;
            })}
            {AutomatisationItems.map((item) => {
              return <AutomatisationItem img={item.img} title={item.title} />;
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
export default Automatisation;
