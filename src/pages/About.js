import selfie from "../selfies/headshot3.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const About = () => {
  return (
    <article className="container">
      <div className="project-flex">
        {/* Name */}
        <header className="header-1">Kilian Kistenbroker</header>
        <section className="indents" style={{ lineHeight: "1.5rem" }}>
          <p className="bullet-1" style={{ marginTop: "" }}>
            <b>Email: </b>
            <br></br>
            <a className="link" href="mailto:kilian.kistenbroker@gmail.com.com">
              kilian.kistenbroker@gmail.com
            </a>
          </p>
          <p className="bullet-1" style={{ marginTop: "" }}>
            <b>LinkedIn: </b>
            <br></br>
            <a
              className="link"
              href="https://www.linkedin.com/in/kilian-kistenbroker-558b072ab/"
              target="_blank"
            >
              linkedin.com/kilian-kistenbroker
            </a>
          </p>
          <p className="bullet-1" style={{ marginTop: "" }}>
            <b>Github: </b>
            <br></br>
            <a
              className="link"
              href="https://github.com/KilianKistenbroker"
              target="_blank"
            >
              github.com/KilianKistenbroker
            </a>
          </p>

          {/* this website's repo */}
          <p className="bullet-1" style={{ marginTop: " ", lineHeight: "" }}>
            <i>Visit this website's GitHub repository: </i>
            <br></br>
            <a
              className="link"
              href="https://github.com/KilianKistenbroker/PersonalWebsite"
              target="_blank"
            >
              PersonalWebsite
            </a>
          </p>
        </section>

        {/* Experience */}
        <header className="header-1">Professional Summary</header>
        <section className="indents">
          <p className="paragraph-1">
            I am a recent Computer Science graduate with a 4-year background in
            the United States Air Force. I am equally capable of working alone
            as well as within a team, and comfortable adapting to new
            technologies, exercising initiative, and solving complex problems.
            My qualifications include:
          </p>
          <p className="subheader-1">Experience in: </p>
          <div className="indents">
            <p className="bullet-1">Java, JavaScript, C#, CSS, HTML.</p>
            <p className="bullet-1">Spring Boot, React.</p>
            <p className="bullet-1">SQL, MySQL Workbench.</p>
            <p className="bullet-1">Amazon Web Services.</p>
            <p className="bullet-1">Unity Game Engine.</p>
          </div>
          <p className="subheader-1">Some experience in: </p>
          <div className="indents">
            <p className="bullet-1">C, C++, TypeScript, Python.</p>
            <p className="bullet-1">Express.</p>
            <p className="bullet-1">MongoDB.</p>
          </div>
        </section>

        <header className="header-1">Personal Introduction</header>
        <section className="indents">
          <p className="paragraph-1">
            I am from the Bay Area in Northern California, and I am quite
            passionate about video game and front-end development. These
            subjects interest me because they offer a blend of creativity and
            technicality in development. I have always been a creative person
            and excelled in my technical school courses, particularly in
            subjects like math and physics.
          </p>
          <p className="paragraph-1">
            In high school, I wrote a 90,000-word fiction book in my free time,
            and self-published it through one of Amazon's services shortly after
            graduating. After high school, I joined the United States Air Force
            and served for four years as an Aircraft Maintenance Technician for
            two airframes and earned two medals for my accomplishments.
            Currently, I have been honorably discharged from the Air Force and
            am transitioning into a software position with a keen interest in
            starting a small business in game development.
          </p>
          <p className="paragraph-1">
            In my free time, I am usually playing a video game or trying to
            develop one. If I ever get the resources to do so, I will probably
            adapt that book I mentioned earlier into a video game to justify all
            the time I spent writing it.
          </p>

          <div className="img-container">
            <LazyLoadImage className="img" src={selfie} alt="" />
          </div>
        </section>
      </div>
    </article>
  );
};

export default About;
