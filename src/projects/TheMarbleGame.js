import CardLayout from "../components/CardLayout";
import photoLibrary from "../data/photoLibrary.json";

const TheMarbleGame = ({ windowDimension }) => {
  return (
    <div className="project-flex-container">
      <CardLayout
        projectId={3}
        photoPath={photoLibrary.the_marble_game_photos}
        projectHeight={25}
        windowDimension={windowDimension}
      />

      <div className="project-details-grid">
        <header className="header-1">Links</header>

        <section className="indents">
          <div className="subheader-1">
            <b>GitHub Repository: </b>
            <a
              className="link"
              href="https://github.com/KilianKistenbroker/TheMarbleGame"
              target="_blank"
            >
              TheMarbleGame
            </a>
          </div>
        </section>
        <header className="header-1">Overview</header>
        <section className="indents">
          <p className="subheader-1">
            Project Duration:
            <span className="paragraph-1" style={{ fontWeight: "normal" }}>
              {" "}
              June 2020 – July 2020
            </span>
          </p>
          <p className="paragraph-1">
            This project is a primitive version of the
            <b> Mobile Platformer Game</b> and features its own 2d game engine
            that I programmed in Java using Android Studio, which was developed
            as a personal project during my first year at university for android
            devices. The primary goal behind this endeavor was to deepen my
            understanding of programming concepts through the lens of game
            development, and therefore lacks a thorough development cycle. As of
            now, I do not have plans to continue developing this project in the
            near future. It remains a valuable learning experience and a
            snapshot of my early programming journey. Although the engine I
            wrote is very specific to my game, the code within the repository is
            available for anyone who finds it useful for their own projects,
            learning, or inspiration. Feel free to explore, modify, and
            incorporate any part of it into your work.
          </p>
        </section>
        <header className="header-1">Features</header>
        <section className="indents">
          <p className="paragraph-1">
            <b>Collision Detection: </b>Ensures accurate interactions between
            objects within the game world.
          </p>
          <p className="paragraph-1">
            <b>Scene Management: </b>Facilitates the smooth transition and
            management of different game scenes or levels.
          </p>
          <p className="paragraph-1">
            <b>Follow Camera: </b>A camera system that dynamically follows the
            player's movements.
          </p>
          <p className="paragraph-1">
            <b>Menu System: </b>An intuitive interface for navigating through
            game options.
          </p>
          <p className="paragraph-1">
            <b>Physics System: </b>Simulates realistic physical interactions
            between game entities.
          </p>
          <p className="paragraph-1">
            <b>Touch Controls: </b>Responsive touch input for mobile platforms.
          </p>
          <p className="paragraph-1">
            <b>Inventory System: </b>Manages items and equipment within the
            game.
          </p>
        </section>
        <header className="header-1">Tech Stack</header>
        <section className="indents">
          <p className="paragraph-1">Java.</p>
          <p className="paragraph-1">Andoid Studio.</p>
        </section>
      </div>
    </div>
  );
};

export default TheMarbleGame;
