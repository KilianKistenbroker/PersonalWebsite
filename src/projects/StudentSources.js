import photoLibrary from "../data/photoLibrary.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardLayout from "../components/CardLayout";

const StudentSources = ({ windowDimension }) => {
  const [i, set_i] = useState(0);

  const setCurrentPhoto = (increment, event) => {
    const i_size = photoLibrary.student_sources_photos.length;

    if (i + increment >= i_size) set_i(0);
    else if (i + increment < 0) set_i(i_size - 1);
    else set_i(i + increment);

    // in case bottom div gets triggered.
    event.stopPropagation();
  };

  useEffect(() => {
    var element = document.getElementById("current-mini-content-2");
    if (element) {
      const offsetLeft = element.offsetLeft - 75;
      element.parentElement.scrollLeft = offsetLeft;
    }
  }, [i]);

  return (
    <div className="project-flex-container">

<CardLayout
        projectId = {2}
        photoPath={photoLibrary.student_sources_photos}
        projectHeight={14}
        windowDimension={windowDimension}
      />

      <div className="project-details-grid">
        <div className="project-detail">
          <div className="header-1">Links</div>
          <div className="indents">
            <div className="subheader-1">
              <b>Demo Website: </b>
              <a
                className="link"
                href="http://student-sources.s3-website-us-west-1.amazonaws.com/"
                target="_blank"
              >
                StudentSources.com
              </a>
            </div>
          </div>

          <div className="indents">
            <div className="subheader-1">
              <b>GitHub Repository: </b>
              <a
                className="link"
                href="https://github.com/KilianKistenbroker/student-sources-prototype/tree/master"
                target="_blank"
              >
                beta-prototype
              </a>
            </div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Overview</div>
          <div className="paragraph-1">
            <b>Student Sources </b> is a college project I developed alongside a team
            for my Software Engineering capstone course. The purpose of this
            website is to help students study by providing tools to organize and
            share lecture notes among peers. Student Sources is inspired by
            other cloud-based file organization sites like Dropbox and OneDrive,
            but with more of a social implementation. Our user interface
            provides features to easily search up other users in our database to
            view and download any of their publicly shared files and folders.
            Additionally, users can comment on other users' public files and
            form chat groups with each other.
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Role</div>
          <div className="indents">
            <div className="subheader-1">Frontend Lead</div>
            <div className="indents">
              <div className="paragraph-1">
                UI/UX development, mockups, programming, quality assurance and
                testing.
              </div>
            </div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Features</div>
          <div className="indents">
            <div className="paragraph-1">
              - Support for jpg, png, gif, pdf, txt, mp3, mp4, and mov files.
            </div>
            <div className="paragraph-1">
              - View and comment on other users public files.
            </div>
            <div className="paragraph-1">
              - Create chatgroups with other users.
            </div>
            <div className="paragraph-1">- Allowed 1GB of cloud storage.</div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Tech Stack</div>
          <div className="indents">
            <div className="paragraph-1">- Java, Javascript, CSS, HTML.</div>
            <div className="paragraph-1">- React, Springboot.</div>
            <div className="paragraph-1">- SQL, MySQL.</div>
            <div className="paragraph-1">- AWS.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSources;
