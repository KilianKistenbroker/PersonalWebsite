const About = () => {
  return (
    <div className="container">
      <div className="project-flex">
        {/* Name */}
        <div className="header-1">Kilian Kistenbroker</div>
        <div className="bullet-1">
          <b>Email: </b>
          <a className="link" href="mailto:kilian.kistenbroker@gmail.com.com">
            kilian.kistenbroker@gmail.com
          </a>
        </div>
        <div className="bullet-1">
          <b>LinkedIn: </b>
          <a
            className="link"
            href="https://www.linkedin.com/in/kilian-kistenbroker-558b072ab/"
            target="_blank"
          >
            linkedin.com/kilian-kistenbroker
          </a>
        </div>
        <div className="bullet-1">
          <b>Github: </b>
          <a
            className="link"
            href="https://github.com/KilianKistenbroker"
            target="_blank"
          >
            github.com/KilianKistenbroker
          </a>
        </div>
        {/* Experience */}
        <div className="header-1">Professional Summary</div>
        <div className="paragraph-1">
          I am a recent computer science graduate with a 4-year background in
          the United States Air Force. I am equally capable of working alone as
          well as within a team, and comfortable adapting to new technologies,
          exercising initiative, and solving complex problems. My qualifications
          include:
        </div>
        <div className="indents">
          <div className="subheader-1">Experience in: </div>
          <div className="indents">
            <div className="bullet-1">- Java, JavaScript, C#, CSS, HTML.</div>
            <div className="bullet-1">- Spring Boot, React.</div>
            <div className="bullet-1">- SQL, MySQL Workbench.</div>
            <div className="bullet-1">- Amazon Web Services.</div>
            <div className="bullet-1">- Unity Game Engine.</div>
          </div>
        </div>
        <div className="indents">
          <div className="subheader-1">Some experience in: </div>
          <div className="indents">
            <div className="bullet-1">- C, C++, TypeScript, Python.</div>
          </div>
        </div>
        <div className="header-1">Personal Introduction</div>
        <div className="paragraph-1">
          I am from the Bay Area in Northern California, and I am quite
          passionate about video game development and front-end development.
          These subjects interest me because they offer a blend of creativity
          and technicality in development. I have always been a creative person
          and excelled in my technical school courses, particularly in subjects
          like math and physics.
        </div>
        <div className="paragraph-1">
          In high school, I wrote a 90,000-word fiction book in my free time,
          and self-published it through one of Amazon's services shortly after
          graduating. After high school, I joined the United States Air Force
          and served for four years as an Aircraft Maintenance Technician for
          two airframes and earned two medals for my accomplishments. Currently,
          I have been honorably discharged from the Air Force and am
          transitioning into a software position with a keen interest in
          starting a small business in game development.
        </div>
        <div className="paragraph-1">
          In my free time, I am usually playing a video game or trying to
          develop one. If I ever get the resources to do so, I will probably
          adapt that book I mentioned earlier into a video game to justify all
          the time I spent writing it.
        </div>
      </div>
    </div>
  );
};

export default About;
