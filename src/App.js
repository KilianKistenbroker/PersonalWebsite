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
    <div>
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
      <div className="footer"></div>
    </div>
  );
}

export default App;
