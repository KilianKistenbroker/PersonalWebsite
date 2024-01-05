import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ selectedPage, setSelectedPage, collapseAll }) => {
  //   const navigate = useNavigate();
  const setPage = (page) => {
    setSelectedPage(page);

    if (page === "Projects") {
      // collapse all projects
      collapseAll();
    }

    console.log("current page: " + page);
  };

  return (
    <div className="navbar-container">
      {/* projects */}

      <div className="navbar-grid">
        <Link
          to={"/"}
          onClick={() => setPage("Projects")}
          className={
            selectedPage === "Projects"
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
            selectedPage === "About"
              ? "navbar-content navbar-selected"
              : "navbar-content"
          }
          onClick={() => setPage("About")}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
