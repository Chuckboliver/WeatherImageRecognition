import DropzoneField from "../../components/Dropzone/Dropzone";
import React, { useState } from "react";
import Predict from "../../components/Predict/Predict";
import * as tf from "@tensorflow/tfjs";
import { useLoadModel } from "../../hooks/useLoadModel";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [model] = useLoadModel();
  const [isPredict, setPredict] = useState(false);
  const [image, setImage] = useState("");
  const [predictResult, setPredictResult] = useState([]);

  const handleOnDrop = (imageFile) => {
    console.log(imageFile);
    console.log("Predicted...");

    setPredict(true);
    setImage(URL.createObjectURL(imageFile));
  };

  const handleReset = () => {
    setPredict(false);
    setImage("");
    setPredictResult([]);
  };

  const handleNewFile = (imageFile) => {
    setPredictResult([]);
    setImage(URL.createObjectURL(imageFile));
  };

  const predict = () => {
    // console.log("tensorflow predict");
    // const im = new Image();
    // const fr = new FileReader();
    // fr.onload = () => {
    //   im.src = fr.result;
    // };
    // fr.readAsDataURL(image);
    // im.onload = () => {
    //   let tensor = tf.browser.fromPixels(im);
    //   tensor = tf
    //     .reshape(tensor, [1, 224, 224, 1])
    //     .toFloat()
    //     .div(tf.scalar(255));
    //   const modelPrediction = model.predict(tensor);
    //   setPredictResult(predictResult);
    // };
    const classes = [
      "dew",
      "fogsmog",
      "frost",
      "glaze",
      "hail",
      "lightning",
      "rain",
      "rainbow",
      "rime",
      "sandstorm",
      "snow",
    ];

    const pixels = tf.browser.fromPixels(document.querySelector("img"));
    console.log(pixels);
    const alignCorners = false;
    const resizeTensor = tf.image
      .resizeBilinear(pixels, [224, 224], alignCorners)
      .reshape([1, 224, 224, 3])
      .toFloat()
      .div(tf.scalar(255));
    console.log("reshape success");
    console.log(pixels);
    const modelPrediction = model.predict(resizeTensor);
    const predictResult = Array.from(modelPrediction.dataSync());
    console.log(predictResult);

    const classProbability = predictResult.map((p, i) => {
      return { class: classes[i], probability: p };
    });

    console.log(classProbability);
    setPredictResult(classProbability);
  };

  console.log(predictResult);

  return (
    <>
      {!model ? (
        <Loader />
      ) : !isPredict ? (
        <DropzoneField onDrop={handleOnDrop} />
      ) : (
        <Predict
          image={image}
          predicts={predictResult}
          predictFunc={predict}
          handleReset={handleReset}
          handleNewFile={handleNewFile}
        />
      )}
    </>
  );
};

export default Home;
