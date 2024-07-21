import { useRef } from "react";

function FaqItem({ index, question, asnwer }) {
  const questionRef = useRef(null);
  const answerRef = useRef(null);

  function questionClickHandle() {
    answerRef.current.classList.toggle("active");
    questionRef.current.classList.toggle("active");
  }
  return (
    <>
      <div
        className="faq__question btn btn-grey btn-with-border"
        ref={questionRef}
        onClick={questionClickHandle}
      >
        <p className="text-gradient">{`0${index}`}</p>
        {question}
        <span className="white-space"></span>
        <span className="border"></span>
        <div className="faq__toggle"></div>
      </div>
      <div className="faq__answer" ref={answerRef}>
        {asnwer}
      </div>
    </>
  );
}

export default FaqItem;
