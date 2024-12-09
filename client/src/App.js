import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PredictionPages from "./pages/PredictionPages/PredictionPages";
import HomePages from "./pages/HomePages/HomePages";
import LoginPages from "./pages/LoginPages/LoginPages";
import RegisterPages from "./pages/Register/RegisterPages";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/pages/prediction" element={<PredictionPages />} />
          <Route path="/pages/login" element={<LoginPages />} />
          <Route path="/pages/register" element={<RegisterPages />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
