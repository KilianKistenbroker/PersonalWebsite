import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ collapseAll }) => {
  const location = useLocation();

  const collapse = () => {
    if (location.pathname === "/") {
      // collapse all projects tabs
      collapseAll();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    console.log("path: " + location.pathname);
  }, [location.pathname]);

  return (
    <nav className="navbar-container">
      {/* projects */}

      <div className="navbar-grid">
        <Link
          to={"/"}
          onClick={() => collapse()}
          className={
            window.location.pathname === "/"
              ? "navbar-content navbar-selected"
              : "navbar-content"
          }
        >
          Projects
        </Link>

        {/* about */}
        <Link
          to={"/about"}
          className={
            window.location.pathname === "/about"
              ? "navbar-content navbar-selected"
              : "navbar-content"
          }
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
