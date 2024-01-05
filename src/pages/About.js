const About = () => {
  return (
    <div className="container">
      <div className="project-flex">
        {/* Name */}
        <div className="header-2"> Kilian Kistenbroker</div>
        {/* Experience */}
        <div className="header-1">Professional Summary</div>
        <div className="paragraph-1">
          I am a recent college graduate with a military background in the
          United States Air Force. I am equally capable of working alone as well
          as within a team, and comfortable adapting to new technologies,
          exercising initiative, and solving complex problems. My qualifications
          include:
        </div>

        <div className="indents">
          <div className="subheader-1">Experience in: </div>
          <div className="indents">
            <div className="bullet-1">
              - Java, JavaScript, C, C#, CSS, HTML.
            </div>
            <div className="bullet-1">- Spring Boot, React.</div>
            <div className="bullet-1">- SQL, MySQL Workbench.</div>
            <div className="bullet-1">- Amazon Web Services.</div>
          </div>
        </div>

        <div className="indents">
          <div className="subheader-1">Some experience in: </div>
          <div className="indents">
            <div className="bullet-1">- C++, TypeScript.</div>
          </div>
        </div>
        {/* education */}
        <div className="header-1">Education</div>
        <div className="paragraph-1">San Francisco State University:</div>
        <div className="indents">
          <div className="bullet-1">
            Graduated December 2023 – bachelor’s in computer science.
          </div>
        </div>

        {/* Contacts */}
        <div className="header-1">Contacts</div>
        <div className="indents">
          <div className="bullet-1">
            LinkedIn: <a href=""> placeholder.com</a>
          </div>
          <div className="bullet-1">
            Github: <a href=""> placeholder.com</a>
          </div>
          <div className="bullet-1">
            Email: <a href=""> placeholder.com</a>
          </div>
        </div>

        {/* Photo */}
      </div>
    </div>
  );
};

export default About;
