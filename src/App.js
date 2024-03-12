import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { ProfilePage } from "./page/ProfilePage";
import { ProjectPage } from "./page/ProjectPage";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
