import React from "react";
import FileUploader from "../FileUploader/FileUploader";
import PredictResult from "../PredictResult/PredictResult";
import Loader from "../Loader/Loader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Predict.css";

const Predict = ({
  image,
  predicts,
  predictFunc,
  handleReset,
  handleNewFile,
}) => {
  return (
    // <div className="main">
    //   {predicts.length === 0 && <Loader />}
    //   <div className="left_contain">
    //     <img
    //       className="preview_image"
    //       src={image}
    //       alt="error"
    //       onLoad={predictFunc}
    //     />
    //   </div>
    //   <div className="right_contain">
    //     {predicts.length > 0 && (
    //       <>
    //         <div className="block_list">
    //           <PredictResult predicts={predicts} />
    //         </div>
    //         <div className="block_view">
    //           <button className="reset" onClick={handleReset}>
    //             RESET
    //           </button>
    //           <FileUploader handleFile={handleNewFile} />
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>

    <Container className="predict-main-container">
      {predicts.length === 0 && <Loader />}
      <Row>
        <Col className="image-container" lg={6}>
          <img
            className="preview_image"
            src={image}
            alt="error"
            onLoad={predictFunc}
          />
        </Col>
        <Col className="result-container" lg={6}>
          {predicts.length > 0 && (
            <>
              <div className="result-score-container">
                <PredictResult predicts={predicts} />
              </div>
              <div className="button-container">
                <button className="reset-btn" onClick={handleReset}>
                  RESET
                </button>
                <FileUploader
                  handleFile={handleNewFile}
                  className="upload-btn"
                />
              </div>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Predict;
