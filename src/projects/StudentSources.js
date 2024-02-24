import photoLibrary from "../data/photoLibrary.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardLayout from "../components/CardLayout";

const StudentSources = ({ windowDimension }) => {
  return (
    <div className="project-flex-container">
      <CardLayout
        projectId={2}
        photoPath={photoLibrary.student_sources_photos}
        projectHeight={14}
        windowDimension={windowDimension}
      />

      <div className="project-details-grid">
        {/* <div className="project-detail"> */}
        <header className="header-1">Links</header>
        <section className="indents">
          <p className="subheader-1">
            <b>Demo Website: </b>
            <a
              className="link"
              href="http://student-sources.s3-website-us-west-1.amazonaws.com/"
              target="_blank"
            >
              StudentSources.com
            </a>
          </p>
        </section>

        <section className="indents">
          <p className="subheader-1">
            <b>GitHub Repository: </b>
            <a
              className="link"
              href="https://github.com/KilianKistenbroker/student-sources-prototype/tree/master"
              target="_blank"
            >
              StudentSourcesPrototype
            </a>
          </p>
        </section>
        {/* </div> */}
        {/* <div className="project-detail"> */}
        <header className="header-1">Overview</header>
        <section className="indents">
          <p className="paragraph-1">
            <b>Student Sources </b> is a college project I developed alongside a
            team for my Software Engineering capstone course. The purpose of
            this website is to help students study by providing tools to
            organize and share lecture notes among peers. Student Sources is
            inspired by other cloud-based file organization sites like Dropbox
            and OneDrive, but with more of a social implementation. Our user
            interface provides features to easily search up other users in our
            database to view and download any of their publicly shared files and
            folders. Additionally, users can comment on other users' public
            files and form chat groups with each other.
          </p>
        </section>
        {/* </div> */}
        {/* <div className="project-detail"> */}
        <header className="header-1">Role</header>
        <section className="indents">
          <p className="subheader-1">Frontend Lead</p>
          <div className="indents">
            <p className="paragraph-1">
              UI/UX development, mockups, programming, quality assurance and
              testing.
            </p>
          </div>
        </section>
        {/* </div> */}
        {/* <div className="project-detail"> */}
        <header className="header-1">Features</header>
        <section className="indents">
          <p className="paragraph-1">
            Support for JPG, PNG, GIF, PDF, TXT, MP3, MP4, and MOV files.
          </p>
          <p className="paragraph-1">
            View and comment on other users public files.
          </p>
          <p className="paragraph-1">Create chatgroups with other users.</p>
          <p className="paragraph-1">Allowed 1GB of cloud storage.</p>
        </section>
        {/* </div> */}
        {/* <div className="project-detail"> */}
        <header className="header-1">Tech Stack</header>
        <section className="indents">
          <p className="paragraph-1">Java, Javascript, CSS, HTML.</p>
          <p className="paragraph-1">React, Springboot.</p>
          <p className="paragraph-1">SQL, MySQL.</p>
          <p className="paragraph-1">AWS.</p>
        </section>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StudentSources;
