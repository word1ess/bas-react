import "./Faq.scss";

import FaqItem from "./FaqItem/FaqItem";

function Faq({ faqItems }) {
  return (
    <main className="faq__row">
      {faqItems.map((item, i) => {
        return (
          <FaqItem index={++i} question={item.question} asnwer={item.asnwer} />
        );
      })}
    </main>
  );
}
export default Faq;
