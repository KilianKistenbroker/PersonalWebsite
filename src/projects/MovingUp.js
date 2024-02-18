import { useState, useEffect } from "react";
import photoLibrary from "../data/photoLibrary.json";
import CardLayout from "../components/CardLayout";

const MovingUp = ({ windowDimension }) => {
  return (
    <div className="project-flex-container">

      <CardLayout
        projectId = {1}
        photoPath={photoLibrary.moving_up_photos}
        projectHeight={25}
        windowDimension={windowDimension}
      />

      <div className="project-details-grid">
        <div className="project-detail">
          <div className="header-1">Overview</div>
          <div className="indents">
            <div className="paragraph-1">
              <b>Moving Up</b> is a work-in-progress mobile game project that I am solo
              developing with Unity's 2D game engine. This game is a homage to the
              challenging spirit of celebrated platformers like Celeste and Jump
              King. Similar to badges in Super Mario Wonders, there is a focus on
              swapping tools to alter and enhance the way players interact with
              the world. Moving Up aims to encapsulate the essence of these
              adventures into an engaging, arcade-style experience tailored for
              mobile platforms. Its core focus is on delivering intense
              platforming challenges, seamlessly integrated within a user-friendly
              mobile interface.
            </div>
          </div>
          
          <br></br>
          <div className="paragraph-1">
            <i>Early Access Release Date: TBD</i>
          </div>
          <div className="paragraph-1">
            <i>Official Release Date: TBD</i>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Role</div>
          <div className="indents">
            <div className="subheader-1">Solo Game Developer</div>
            <div className="indents">
              <div className="paragraph-1">
                Game design, level design, programming, animation, project
                management, quality assurance and testing.
              </div>
            </div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Features</div>
          <div className="indents">
            <div className="paragraph-1">
              - 3 different world environments to explore, and 9 levels per world.
            </div>
            <div className="paragraph-1">
              - Physics for gliding, dashing, and climbing passed obstacles.
            </div>
            <div className="paragraph-1">
              - Various objects to interact with and collectables to discover.
            </div>
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Tech Stack</div>
          <div className="indents">
            <div className="paragraph-1">- Unity 2D Game Engine.</div>
            <div className="paragraph-1">- Photoshop, Procreate.</div>
            <div className="paragraph-1">- C#.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingUp;
