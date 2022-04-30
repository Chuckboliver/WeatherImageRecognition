import React from "react";
import FileUploader from "../FileUploader/FileUploader";
import PredictResult from "../PredictResult/PredictResult";
import "./Predict.css";

const Predict = ({
  image,
  predicts,
  predictFunc,
  handleReset,
  handleNewFile,
}) => {
  return (
    <div className="main">
      <div className="left_contain">
        <img
          className="preview_image"
          src={image}
          alt="error"
          onLoad={predictFunc}
        />
      </div>
      <div className="right_contain">
        <div className="block_list">
          <p className="list_component">Predict Class</p>
          <PredictResult predicts={predicts} />
        </div>
        <div className="block_view">
          <button className="reset" onClick={handleReset}>
            RESET
          </button>
          <FileUploader handleFile={handleNewFile} />
        </div>
      </div>
    </div>
  );
};

export default Predict;
