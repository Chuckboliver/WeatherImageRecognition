import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const PredictResult = ({ predicts }) => {
  const sortPredicts = predicts.sort((a, b) => b.probability - a.probability);

  return (
    <div className="predict-result">
      {sortPredicts.map((predict, index) => {
        return (
          <div key={index}>
            <span>{predict.class}</span>
            <span>
              {(
                predict.probability.toLocaleString("fullwide", {
                  useGrouping: false,
                }) * 100
              ).toFixed(2)}
              %
            </span>
            <ProgressBar now={predict.probability * 100} />
          </div>
        );
      })}
    </div>
  );
};

export default PredictResult;
