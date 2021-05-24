import React from "react";
import "../styles/option-wrapper.scss";

interface Option {
  svg: React.ReactElement;
  title: string;
  setStep: (args) => void;
}

export function Option(props: Option) {
  const { title, svg, setStep } = props;
  const SVG = svg as any;
  return (
    <div
      className="option-wrapper"
      onClick={() => setStep((prevState) => ++prevState)}
    >
      <div className="top-option-container xy-center">
        <SVG />
      </div>
      <div className="bottom-option-container xy-center">{title}</div>
    </div>
  );
}
