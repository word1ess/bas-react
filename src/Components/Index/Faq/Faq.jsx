import { Link } from "react-router-dom";
import "./Faq.scss";

import FaqItem from "./FaqItem/FaqItem";

function Faq() {
  const faqItems = [
    {
      question: "В чем отличие BAS от антидетект браузера?",
      asnwer:
        "Система обновлений позволяет в один клик обновить скрипт на всех удаленных ПК. Это может быть удобно при масштабировании личных бизнес процессов или при наличии клиентов которые используют вашу автоматизацию.",
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
    <article className="faq">
      <div className="container">
        <header className="block-header border-2">
          <h3 className="text-gradient">Еще остались вопросы?</h3>
          <h2>
            Часто задаваемые
            <span>вопросы</span>
          </h2>
        </header>
        <main className="faq__row">
          {faqItems.map((item, i) => {
            return (
              <FaqItem
                index={++i}
                question={item.question}
                asnwer={item.asnwer}
              />
            );
          })}
        </main>
      </div>
    </article>
  );
}
export default Faq;
