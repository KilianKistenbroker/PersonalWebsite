// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("Projects");

  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const collapseAll = () => {
    setIsExpanded(isExpanded.map(() => false));
  };

  // --------- listening for screen resizing here --------- //

  const [windowDimension, setWindowDimension] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
    mobileMode: null,
  });
  const detectSize = () => {
    setWindowDimension({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
      mobileMode: window.innerWidth < 800,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    console.log("width: " + windowDimension.winWidth);
    console.log("height: " + windowDimension.winHeight);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <div className="App">
      <Router>
        <Navbar setSelectedPage={setSelectedPage} collapseAll={collapseAll} />
        <Routes>
          <Route
            path="/"
            element={
              <Projects
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                windowDimension={windowDimension}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      {/* footer */}
      <footer id="footer">
        <p id="footer-content">
          Copyright © 2024
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dot"
            viewBox="0 0 16 16"
          >
            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
          </svg>
          All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
