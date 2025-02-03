import React, { useState, useEffect, useRef } from "react";
import { GoPlus } from "react-icons/go";
import LoadingSpinner from "../Loading/LoadingSpinner";

const Prediction = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [probability, setProbability] = useState(0);
  const [accuracy,setAccuracy] = useState(0);
  const [loading, setLoading] = useState(false);
  const resize = 128; // Resize dimensions for the model

  // Use a ref to safely reference the image element
  const imageRef = useRef(null);

  // Load the TFLite model from the public folder
  const loadModel = async () => {
    try {
      if (!window.tflite) {
        throw new Error("TFLite.js is not loaded");
      }
      const loadedModel = await window.tflite.loadTFLiteModel(
        "/trashify.tflite"
      );
      setModel(loadedModel);
      console.log("Model loaded successfully");
    } catch (error) {
      console.error("Error loading model:", error);
    }
  };

  // Preprocess the image for prediction
  const preprocessImage = async (imageElement) => {
    const tf = window.tf;
    try {
      const tensor = tf.browser
        .fromPixels(imageElement)
        .resizeBilinear([resize, resize])
        .expandDims()
        .toFloat()
        .div(255); // Normalize between 0 and 1
      return tensor;
    } catch (error) {
      console.error("Error preprocessing image:", error);
      return null;
    }
  };

  // Perform the prediction
  const predict = async () => {
    if (!model) {
      alert("Model is not loaded yet.");
      return;
    }
    if (!imageSrc) {
      alert("Please upload an image first.");
      return;
    }
  
    try {
      setLoading(true); // Show spinner immediately
      console.log("Prediction started... Spinner should appear!");
  
      // Simulate a 3-second delay
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      // Use the ref to access the image element
      const imgElement = imageRef.current;
      if (!imgElement) {
        throw new Error("Image element not found");
      }
  
      const inputTensor = await preprocessImage(imgElement);
      if (!inputTensor) {
        setLoading(false);
        return;
      }
  
      // Perform the prediction directly without delay
      const outputTensor = model.predict(inputTensor);
      const probabilities = outputTensor.dataSync();
      console.log("Probabilites : ",probabilities);
      // Assuming binary classification: If probability > 0.5, class is "Organik", else "Anorganik"
      const predictedClass = probabilities[0] > 0.5 ? "Anorganik" : "Organik";
      const predictedProbability = (probabilities[0] * 1).toFixed(2);
      const accuracyModel = (probabilities.length * 100).toFixed(2);
  
      setPrediction(predictedClass);
      setProbability(predictedProbability);
      setAccuracy(accuracyModel);
      console.log(`Prediction finished! Predicted Class: ${predictedClass}, Probability: ${predictedProbability}%`);
    } catch (error) {
      console.error("Error during prediction:", error);
    } finally {
      setLoading(false); // Ensure spinner hides after the prediction completes
    }
  };
  
  // Handle image upload and display preview
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Load the model once when the component mounts
  useEffect(() => {
    loadModel();
  }, []);

  // Ensure TensorFlow.js and TFLite.js are loaded
  useEffect(() => {
    if (!window.tf || !window.tflite) {
      console.error(
        "TensorFlow.js or TFLite.js is not loaded. Ensure it's included in index.html"
      );
    }
  }, []);

  return (
    <div className="text-center p-6 bg-gradient-to-r rounded-xl max-w-lg mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Trash Classification
      </h1>

      {/* Image Preview Frame */}
      <div className="relative w-full h-80 mb-6 border border-dashed border-black rounded-lg overflow-hidden shadow-lg">
        {!imageSrc ? (
          <div className="w-full h-full flex items-center justify-center text-gray-600 font-semibold">
            <GoPlus />
          </div>
        ) : (
          <img
            ref={imageRef} // Use the ref here
            src={imageSrc}
            alt="Input Preview"
            className="w-full h-full object-cover"
          />
        )}
        {/* Overlay text on the image preview */}
        {imageSrc && <div className="absolute inset-0 transition-all"></div>}
        {imageSrc && (
          <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-t-lg">
            Image Preview
          </div>
        )}
      </div>

      {/* Upload Button */}
      <div className="gap-2 flex flex-row justify-center items-center">
        <label
          htmlFor="imageUpload"
          className="w-[100px] h-[50px] rounded-[4px] bg-green-500 hover:bg-green-600 text-white font-bold cursor-pointer"
        >
          Upload Gambar
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>

        {/* Predict Button */}
        <button
          onClick={predict}
          disabled={loading}
          className="w-[100px] h-[50px] bg-green-500 text-white font-semibold rounded-[4px] disabled:bg-gray-300 disabled:cursor-not-allowed transition-all hover:bg-green-600"
        >
          Prediksi
        </button>
      </div>

      {/* Prediction Results */}
      <div className="mt-3 relative w-full h-36 mb-6 rounded-lg overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
            <LoadingSpinner />
          </div>
        ) : prediction ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-black rounded-lg">
            <p className="mb-2">
              <strong>Prediction Result:</strong> {prediction}
            </p>
            <p className="mb-2">
              <strong>Class:</strong> {probability}
            </p>
            <p className="mb-2">
              <strong>Accuracy:</strong> {accuracy}%
            </p>
          </div>
        ) : (
          <div className="w-full h-full text-center flex flex-col justify-center items-center">
            <p>Belum ada prediksi</p>
            <p>jika class kurang dari 0.5 maka organik jika lebih maka anorganik</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Prediction;
