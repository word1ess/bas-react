import HowItem from "./HowItem/HowItem";
import plusImg from "../../../img/svgicons/plus.svg";
import firstImg from "../../../img/how/1.png";
import secondImg from "../../../img/how/2.png";
import "./How.scss";
function How() {
  const howItem = [
    {
      title: "Запись проекта",
      text: [
        <p>Выполните действия один раз в браузере BAS и он все запомнит.</p>,
        <span>Или</span>,
        <p>Используете визуальный конструктор.</p>,
      ],
    },
    {
      title: "Настройка интерфейса",
      text: [
        <p>
          Настройте интерфейс программы и укажите с каких файлов брать данные и
          куда сохранять результаты.
        </p>,
      ],
    },
    {
      title: "Запуск",
      text: [
        <p>
          Запустите ваш проект в BAS или упакуйте его в .exe программу для
          удобства или передачи другим пользователями.
        </p>,
      ],
    },
  ];
  return (
    <article className="how block-dashed-top block-dashed-sides">
      <div className="container">
        <div className="plus top left">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="plus top right">
          <img src={plusImg} alt="plus" />
        </div>
        <div className="block-with-bg">
          <div className="line top center">
            <svg
              width="426"
              height="179"
              viewBox="0 0 426 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1H162.467C164.707 1 166.674 2.49042 167.28 4.64735L214.969 174.353C215.575 176.51 217.542 178 219.782 178H426"
                stroke="url(#paint0_linear_549_4156)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_549_4156"
                  x1="226.586"
                  y1="178"
                  x2="393.19"
                  y2="156.116"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2" stop-color="#272C30">
                    <animate
                      attributeName="stop-color"
                      values="#272C30; #3050FB; #41FFC2; #2EDCF9; #272C30;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.5" stop-color="#3050FB">
                    <animate
                      attributeName="stop-color"
                      values="#2EDCF9; #272C30; #3050FB; #41FFC2; #2EDCF9;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.8" stop-color="#41FFC2">
                    <animate
                      attributeName="stop-color"
                      values="#41FFC2; #2EDCF9; #272C30; #3050FB; #41FFC2;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="1" stop-color="#2EDCF9">
                    <animate
                      attributeName="stop-color"
                      values="#3050FB;#41FFC2; #2EDCF9; #272C30; #3050FB;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="line center center-block">
            <svg
              width="589"
              height="142"
              viewBox="0 0 589 142"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M589 1H361.222C359.884 1 358.602 1.53605 357.662 2.48831L222.468 139.512C221.529 140.464 220.247 141 218.909 141L0 141"
                stroke="url(#paint0_linear_549_4157)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_549_4157"
                  x1="275.716"
                  y1="141"
                  x2="53.1242"
                  y2="89.8911"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2" stop-color="#272C30">
                    <animate
                      attributeName="stop-color"
                      values="#272C30; #3050FB; #41FFC2; #2EDCF9; #272C30;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.5" stop-color="#3050FB">
                    <animate
                      attributeName="stop-color"
                      values="#2EDCF9; #272C30; #3050FB; #41FFC2; #2EDCF9;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="0.8" stop-color="#41FFC2">
                    <animate
                      attributeName="stop-color"
                      values="#41FFC2; #2EDCF9; #272C30; #3050FB; #41FFC2;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="1" stop-color="#2EDCF9">
                    <animate
                      attributeName="stop-color"
                      values="#3050FB;#41FFC2; #2EDCF9; #272C30; #3050FB;"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <img src={firstImg} alt="" className="how__content-img top" />
          <img src={secondImg} alt="" className="how__content-img bottom" />
          <h3 className="text-gradient">Как это работает?</h3>
          <main className="how__row">
            {howItem.map((item, i) => {
              return (
                <HowItem index={++i} title={item.title} text={item.text} />
              );
            })}
          </main>
        </div>
      </div>
    </article>
  );
}

export default How;
