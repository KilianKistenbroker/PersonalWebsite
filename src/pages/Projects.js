import React from 'react';
import StudentSources from "../projects/StudentSources";
import MovingUp from "../projects/MovingUp";
import TheMarbleGame from "../projects/TheMarbleGame";

const Projects = ({
  isExpanded,
  setIsExpanded,
  windowDimension,
}) => {

  const componentsList = [
    [<StudentSources windowDimension={windowDimension}/>, "File Management Website"],
    [<MovingUp windowDimension={windowDimension}/>, "Mobile Platformer Game"],
    [<TheMarbleGame windowDimension={windowDimension}/>, "2D Game Engine"]
  ];

  return (
    <div className="container">
      <div className="project-flex">
        {componentsList.map((component, index) => {
          return (
            <div key={index} className={"moving-up"}>
              <div
                className="button-header"
                onClick={() => {
                  const newExpandedState = [...isExpanded];
                  newExpandedState[index] = !newExpandedState[index];
                  setIsExpanded(newExpandedState);
                }}
              >
                <div className="dropdown">
                  {isExpanded[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  )}
                </div>
                
                <div style={{marginLeft:"1rem"}}>
                  {component[1]}
                </div>
                
              </div>
              <div
                className={
                  isExpanded[index]
                    ? "project-content expanded"
                    : "project-content collapsed"
                }
              >
                {component[0]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
