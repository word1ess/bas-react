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
        className="faq__question"
        ref={questionRef}
        onClick={questionClickHandle}
      >
        <div className="faq__question-border">
          <div className="faq__question-bg">
            <p className="text-gradient">{`0${index}`}</p>
            {question}
            <span className="white-space"></span>
            <div className="faq__toggle"></div>
          </div>
        </div>
      </div>
      <div className="faq__answer" ref={answerRef}>
        {asnwer}
      </div>
    </>
  );
}

export default FaqItem;
