import React, { useEffect, useState } from "react";
import { BackBtn } from "./components/back-btn";
import { ProgressBar } from "./components/progress-bar";
import { Option } from "./components/option";
import "./styles/main.scss";
import { questionArr } from "./utils/questions";
import { useHistory } from "react-router-dom";

const BackSVG = require("./assets/back.svg");

export default function App() {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [width, setWidth] = useState(() => {
    return document.body.offsetWidth;
  });
  const totalQuestion = questionArr.length;
  const percent = ((step + 1) / totalQuestion) * 100;

  useEffect(() => {
    if (step === totalQuestion) {
      history.push("/submit");
    }
  }, [step]);

  useEffect(() => {
    window.addEventListener("resize", (evt) => {
      const { innerWidth } = evt.target as any;
      setWidth(innerWidth);
    });
  }, []);

  const onBack = () => {
    if (step === 0) return;
    setStep((prevStep) => --prevStep);
  };

  const isMobile = width <= 768;

  return (
    <div className="app-root">
      {!isMobile && <ProgressBar percent={percent} />}
      <div className="question-answer-container">
        {!isMobile && totalQuestion !== step && (
          <BackBtn step={step} onBack={onBack} />
        )}
        <div className="question-answer-iterator-wrapper">
          {questionArr.map((qObj, index) => {
            if (index === step)
              return (
                <>
                  <div className="question-label">{qObj.question}</div>
                  <div className="question-supporting-label">
                    {qObj.supportingText}
                  </div>
                  <div className="answer-options-wrapper">
                    {qObj.options.map((option) => {
                      return (
                        <Option
                          title={option.label}
                          svg={option.icon}
                          setStep={setStep}
                        />
                      );
                    })}
                  </div>
                </>
              );
          })}
        </div>
      </div>
      {isMobile && (
        <div className="mobile-progress-wrapper">
          <ProgressBar percent={percent} />
          <BackSVG style={{ width: 24 }} onClick={onBack} />
        </div>
      )}
    </div>
  );
}
