import React, { useState } from "react";
import "./faq.css";

const MyFaq = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="faq-container">
      <div onClick={() => setShow(!show)} className="faq-title">
        <h2>{question}</h2>
        {show ? <p className="faq-icon">×</p> : <p className="faq-icon">+</p>}
      </div>

      {show && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default MyFaq;
