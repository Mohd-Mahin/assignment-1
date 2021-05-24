import React from "react";

interface IBackBtn {
  step: number;
  onBack: () => void;
}

export function BackBtn(props: IBackBtn) {
  const { step, onBack } = props;
  const isActive = !!step;

  return (
    <div
      className="back-btn-wrapper"
      style={{ cursor: !isActive ? "not-allowed" : "pointer" }}
    >
      <div
        className="back-btn xy-center"
        onClick={onBack}
        style={{ opacity: !isActive && 0.5 }}
      >
        Back
      </div>
    </div>
  );
}
