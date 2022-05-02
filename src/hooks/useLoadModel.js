import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

export const useLoadModel = () => {
  const [model, setModel] = useState([]);
  console.log("Hook model");
  useEffect(() => {
    async function loadModel() {
      console.log("Load model...");
      const loadModel = await tf.loadLayersModel("./model01/model.json");
      console.log("Load modelsuccessful");
      setModel([loadModel]);
    }

    loadModel();
  }, []);

  return model;
};
