import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PredictionPages from "./pages/PredictionPages/PredictionPages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PredictionPages/>}/>
      </Routes>
    </Router>
  );
}

export default App;
