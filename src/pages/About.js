import selfie from "../selfies/headshot 5.1.jpg";
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
            <p className="bullet-1">
              Java, JavaScript, TypeScript, C#, CSS, HTML.
            </p>
            <p className="bullet-1">Spring Boot, React.</p>
            <p className="bullet-1">SQL, MySQL Workbench.</p>
            <p className="bullet-1">Amazon Web Services.</p>
            <p className="bullet-1">Unity Game Engine.</p>
          </div>
          <p className="subheader-1">Some experience in: </p>
          <div className="indents">
            <p className="bullet-1">C, C++, Python.</p>
            <p className="bullet-1">Express.</p>
            <p className="bullet-1">MongoDB.</p>
          </div>
        </section>

        <header className="header-1">Personal Introduction</header>
        <section className="indents">
          <p className="paragraph-1">
            I am from the Bay Area in Northern California, and I am quite
            passionate about video game and full-stack development. These
            subjects interest me because they offer a nice blend of creativity
            and technicality in developing software projects. I have always been
            a creative and technical person, excelling in both subjects relating
            to art and math.
          </p>
          <p className="paragraph-1">
            Currently, I am honorably discharged from the Air Force and am
            transitioning into a software position with a keen interest in
            starting a small business in game development. In my free time, I am
            usually playing a video game or trying to develop one.
          </p>
          <p className="paragraph-1">
            Thank you for visiting my portfolio website!
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
