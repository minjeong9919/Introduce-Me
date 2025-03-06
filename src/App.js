import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./component/Navbar";
import { ProfilePage } from "./page/ProfilePage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
