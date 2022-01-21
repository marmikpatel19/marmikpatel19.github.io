import "./App.css";
import Home from "./components/pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*
          <Route path="/projects" element={<Projects />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/management" element={<Management />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
