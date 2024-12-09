import React, { useState, useEffect } from "react"; // Import necessary hooks

const Prediction = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [probability, setProbability] = useState(0);
  const resize = 128; // Resize dimensions for your model

  // Load the TFLite model
  const loadModel = async () => {
    try {
      const model = await window.tflite.loadTFLiteModel("trashify.tflite");
      setModel(model);
    } catch (error) {
      console.error("Error loading model:", error);
    }
  };

  // Preprocess the uploaded image
  const preprocessImage = async (imageElement) => {
    return window.tf.image
      .resizeBilinear(window.tf.browser.fromPixels(imageElement), [resize, resize])
      .expandDims()
      .div(127.5)
      .sub(1);
  };

  // Make predictions based on the model
  const predict = async () => {
    if (!model || !imageSrc) return;

    const imgElement = document.getElementById("imagePreview");
    const inputTensor = await preprocessImage(imgElement);
    const outputTensor = model.predict(inputTensor);
    const probabilities = outputTensor.dataSync();

    // Get the predicted class based on probabilities
    const threshold = 0.5;
    const predictedClass = probabilities[0] < threshold ? "Organic" : "Anorganic";
    setPrediction(predictedClass);
    setProbability(probabilities[0]);
  };

  // Update image preview and button state
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

  useEffect(() => {
    loadModel();
  }, []); // Run loadModel only once when the component mounts

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageSrc && (
        <img
          id="imagePreview"
          src={imageSrc}
          alt="Input Preview"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
            margin: "20px auto",
          }}
        />
      )}
      <button className="" onClick={predict}>
        Predict
      </button>
      {prediction && (
        <div style={{ marginTop: "20px", fontSize: "20px" }}>
          Predicted Class: {prediction}, Probability: {probability}
        </div>
      )}
    </div>
  );
};

export default Prediction;
