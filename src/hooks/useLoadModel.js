import * as tf from "@tensorflow/tfjs";
import { useEffect, useState } from "react";

export const useLoadModel = () => {
  const [model, setModel] = useState([]);
  console.log("Hook model");
  useEffect(() => {
    async function loadModel() {
      const loadModel = await tf.loadLayersModel("./model01/model.json");

      setModel([loadModel]);
    }

    loadModel();
  }, []);

  return model;
};
