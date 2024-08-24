import "./Faq.scss";

import FaqItem from "./FaqItem/FaqItem";

function Faq({ faqItems }) {
  return (
    <article className="faq">
      <div className="container">
        <header className="block-header border-2">
          <h3>Еще остались вопросы?</h3>
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
