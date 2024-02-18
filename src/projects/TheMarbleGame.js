import CardLayout from "../components/CardLayout";
import photoLibrary from "../data/photoLibrary.json";

const TheMarbleGame = ({windowDimension}) => {
    return (
        <div className="project-flex-container">
    
          <CardLayout
            projectId = {3}
            photoPath={photoLibrary.the_marble_game_photos}
            projectHeight={25}
            windowDimension={windowDimension}
          />
    
    <div className="project-details-grid">
        <div className="project-detail">
          <div className="header-1">Links</div>

          <div className="indents">
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
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Overview</div>
          <div className="indents">
            <div className="paragraph-1">
            <b>The Marble Game </b> is a primitive version of the 2D <b>Mobile Platformer Game</b> featuring its own 2d game engine, and 
            was developed as a personal project during my first year at university for android devices. 
            The primary goal behind this endeavor was to deepen my understanding of programming concepts 
            through the lens of game development, and therefore lacks a thorough development cycle. As of 
            now, I do not have plans to continue developing this project in the near future. It remains a
             valuable learning experience and a snapshot of my early programming journey. Although the engine I wrote 
             is very specific to my game, the code within 
             the repository is available for anyone who finds it useful for their own projects, learning, 
             or inspiration. Feel free to explore, modify, and incorporate any part of it into your work.
          </div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Features</div>
          <div className="indents">
            <div className="paragraph-1"><b>Collision Detection: </b>Ensures accurate interactions between objects within the game world.</div>
            <div className="paragraph-1"><b>Scene Management: </b>Facilitates the smooth transition and management of different game scenes or levels.</div>
            <div className="paragraph-1"><b>Follow Camera: </b>A camera system that dynamically follows the player's movements.</div>
            <div className="paragraph-1"><b>Menu System: </b>An intuitive interface for navigating through game options.</div>
            <div className="paragraph-1"><b>Physics System: </b>Simulates realistic physical interactions between game entities.</div>
            <div className="paragraph-1"><b>Touch Controls: </b>Responsive touch input for mobile platforms.</div>
            <div className="paragraph-1"><b>Inventory System: </b>Manages items and equipment within the game.</div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Tech Stack</div>
          <div className="indents">
            <div className="paragraph-1">Java.</div>
            <div className="paragraph-1">Andoid Studio.</div>
          </div>
        </div>
      </div>
        </div>
      );
}
 
export default TheMarbleGame;