import React from "react";
import "../styles/progress-bar.scss";

interface IProgressBar {
  percent: number;
}
export function ProgressBar(props: IProgressBar) {
  const { percent } = props;
  return (
    <>
      <div className="progress-bar-wrapper">
        <div className="progress-bar" style={{ width: `${percent}%` }}></div>
      </div>
      <div className="progress-label">Progress</div>
    </>
  );
}
