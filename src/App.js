// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("Projects");
  const [isMovingUpExpanded, setIsMovingUpExpanded] = useState(false);
  const [isStudentSourcesExpanded, setIsStudentSourcesExpanded] =
    useState(false);

  const collapseAll = () => {
    setIsMovingUpExpanded(false);
    setIsStudentSourcesExpanded(false);
  };

  return (
    <div className="App">
      <Router>
        <Navbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          collapseAll={collapseAll}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Projects
                isMovingUpExpanded={isMovingUpExpanded}
                setIsMovingUpExpanded={setIsMovingUpExpanded}
                isStudentSourcesExpanded={isStudentSourcesExpanded}
                setIsStudentSourcesExpanded={setIsStudentSourcesExpanded}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

      {/* footer */}
      <div id="footer">
        <div id="footer-content">
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
          Kilian Kistenbroker
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
        </div>
      </div>
    </div>
  );
}

export default App;
