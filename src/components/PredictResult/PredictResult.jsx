import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./PredictResult.css";

const PredictResult = ({ predicts }) => {
  const sortPredicts = predicts.sort((a, b) => b.probability - a.probability);

  return (
    <div className="predict-result-container">
      {sortPredicts.map((predict, index) => {
        return (
          <div className="predict-result" key={index}>
            <div className="flex-container">
              <span className="class-name">{predict.class}</span>
              <span className="probability">
                {(
                  predict.probability.toLocaleString("fullwide", {
                    useGrouping: false,
                  }) * 100
                ).toFixed(2)}
                %
              </span>
            </div>
            <ProgressBar now={predict.probability * 100} variant="success" />
          </div>
        );
      })}
    </div>
  );
};

export default PredictResult;
