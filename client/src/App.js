import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import PredictionPages from "./pages/PredictionPages/PredictionPages";
import HomePages from "./pages/HomePages/HomePages";
import LoginPages from "./pages/LoginPages/LoginPages";
import RegisterPages from "./pages/Register/RegisterPages";
import BlogPages from "./pages/Blogs/BlogsPages"
import ProfileUserPages from "./pages/Profile/ProfileUserPages";
import CreateBlogsPages from "./pages/Blogs/CreateBlogsPages";
import ReadSingleBlogsPages from "./pages/Blogs/ReadSingleBlogsPages";
import UpdateBlogsPages from "./pages/Blogs/UpdateBlogsPages";
import AnorganicPages from "./pages/Waste/AnorganicPages";
import OrganicPages from "./pages/Waste/OrganicPages";
import TPALocationPages from "./pages/Waste/TPALocationPages";
import WasteManagementPages from "./pages/Waste/WasteManagementPages";
import GalleryPages from "./pages/Gallery/GalleryPages";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/pages/prediction" element={<PredictionPages />} />
          <Route path="/pages/login" element={<LoginPages />} />
          <Route path="/pages/register" element={<RegisterPages />} />
          <Route path="/pages/blogs" element={<BlogPages/>}/>
          <Route path="/pages/profile" element={<ProfileUserPages/>}/>
          <Route path="/pages/create/blogs" element={<CreateBlogsPages/>}/>
          <Route path="/pages/blogs/:id" element={<ReadSingleBlogsPages/>} />
          <Route path="pages/blogs/update/:id" element={<UpdateBlogsPages/>}/>
          <Route path="/pages/waste/organic" element={<OrganicPages/>}/>
          <Route path="/pages/waste/anorganic" element={<AnorganicPages/>}/>
          <Route path="/pages/waste/tpa" element={<TPALocationPages/>}/>
          <Route path="/pages/pages/wastemanagement" element={<WasteManagementPages/>}/>
          <Route path="/pages/waste/gallery" element={<GalleryPages/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
