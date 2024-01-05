import { useState } from "react";
import MovingUp from "../components/MovingUp";
import StudentSources from "../components/StudentSources";

const Projects = ({
  isMovingUpExpanded,
  setIsMovingUpExpanded,
  isStudentSourcesExpanded,
  setIsStudentSourcesExpanded,
}) => {
  return (
    <div className="container">
      <div className="project-flex">
        {/* Moving up */}
        <div className={"moving-up"}>
          <div
            className="button-header"
            onClick={() => setIsMovingUpExpanded(!isMovingUpExpanded)}
          >
            <div className="dropdown">
              {isMovingUpExpanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              )}
            </div>
            Moving Up!
          </div>
          <div
            className={
              isMovingUpExpanded
                ? "project-content expanded"
                : "project-content collapsed"
            }
          >
            <MovingUp />
          </div>
        </div>

        {/* Student Sources */}
        <div className={"student-sources"}>
          <div
            className="button-header"
            onClick={() =>
              setIsStudentSourcesExpanded(!isStudentSourcesExpanded)
            }
          >
            <div className="dropdown">
              {isStudentSourcesExpanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              )}
            </div>
            Student Sources
          </div>
          <div
            className={
              isStudentSourcesExpanded
                ? "project-content expanded"
                : "project-content collapsed"
            }
          >
            <StudentSources />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
