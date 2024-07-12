import "./Opportunities.scss";
import itemImg from "../../../img/advantages/1.png";
import OpportunitiesItem from "./OpportunitiesItem/OpportunitiesItem";

function Opportunities() {
  const opportunitiesItem = [
    {
      img: itemImg,
      title: "Автоматизация любых действий",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и
    клики мыши, перетаскивание элементов, прокрутка, выбор элементов
    из выпадающего списка, нативная эмуляция клавиатуры, сочетания
    клавиш и т.д.`,
    },
    {
      img: itemImg,
      title: "Автоматизация в визуальном редакторе",
      p: `Без знаний программирования:
      АИ-помощник/Запись действий/Визуальный конструктор..`,
    },
    {
      img: itemImg,
      title: "Автоматизация любых действий",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и
    клики мыши, перетаскивание элементов, прокрутка, выбор элементов
    из выпадающего списка, нативная эмуляция клавиатуры, сочетания
    клавиш и т.д.`,
    },
    {
      img: itemImg,
      title: "Многопоточность",
      p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
    },
    {
      img: itemImg,
      title: "Автоматизация любых действий",
      p: `100% эмуляция человека. Поддерживается человекоподобное движения и клики мыши, перетаскивание элементов, прокрутка, выбор элементов из выпадающего списка, нативная эмуляция клавиатуры, сочетания клавиш и т.д..`,
    },
    {
      img: itemImg,
      title: "Автоматизация в визуальном редакторе",
      p: `Без знаний программирования:
      АИ-помощник/Запись действий/Визуальный конструктор.`,
    },
    {
      img: itemImg,
      title: "Многопоточность",
      p: `Запуск до 300 браузеров одновременно для выполнения вашей задачи в зависимости от мощности вашего ПК.`,
    },
  ];
  return (
    <article className="opportunities block-with-substrate">
      <div className="container">
        <header className="block-header border-2 flex center">
          <h3 className="text-gradient">бесплатно</h3>
          <h2>
            Основные <span>возможности</span>BAS
          </h2>
        </header>
        <main className="opportunities__row">
          {opportunitiesItem.map((item) => {
            return (
              <OpportunitiesItem
                img={item.img}
                title={item.title}
                text={item.p}
              />
            );
          })}
        </main>
      </div>
    </article>
  );
}

export default Opportunities;
