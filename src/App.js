import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { ProfilePage } from "./page/ProfilePage";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/profile" element={<ProfilePage />}>
          {" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
