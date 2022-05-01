import React from "react";
import FileUploader from "../FileUploader/FileUploader";
import PredictResult from "../PredictResult/PredictResult";
import "./Predict.css";
import Loader from "../Loader/Loader";

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
        {predicts.length === 0 && <Loader />}
        <img
          className="preview_image"
          src={image}
          alt="error"
          onLoad={predictFunc}
        />
      </div>
      <div className="right_contain">
        {predicts.length > 0 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Predict;
