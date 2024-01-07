import { useState, useEffect } from "react";
import photoLibrary from "../data/photoLibrary.json";

const MovingUp = () => {
  const [i, set_i] = useState(0);
  const setCurrentPhoto = (increment, event) => {
    const i_size = photoLibrary.moving_up_photos.length;

    if (i + increment >= i_size) set_i(0);
    else if (i + increment < 0) set_i(i_size - 1);
    else set_i(i + increment);

    // in case bottom div gets triggered.
    event.stopPropagation();
  };

  useEffect(() => {
    var element = document.getElementById("current-mini-content");
    if (element) {
      const offsetLeft = element.offsetLeft - 75;
      element.parentElement.scrollLeft = offsetLeft;
    }
  }, [i]);

  return (
    <div className="project-flex-container">
      <div className="current-content-grid">
        <div className="current-content-header" style={{ color: "whitesmoke" }}>
          {photoLibrary.moving_up_photos[i].title}
        </div>
        <div className="current-content-container">
          {photoLibrary.moving_up_photos[i].type === "photo" ? (
            <img
              className="current-content"
              src={photoLibrary.moving_up_photos[i].fullPath}
              alt=""
            />
          ) : (
            // fetch from s3 bucket
            <video></video>
          )}
        </div>
      </div>

      <div className="media-container-grid">
        <div className="media-input" onClick={(e) => setCurrentPhoto(-1, e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-chevron-compact-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
            />
          </svg>
        </div>
        <div className="stretch">
          <div className="media-content-grid">
            {photoLibrary.moving_up_photos.map((photo, index) => (
              <div
                id={i === index ? "current-mini-content" : "null"}
                className={
                  i === index
                    ? "mini-content-container current"
                    : "mini-content-container"
                }
                onClick={() => set_i(index)}
              >
                <img
                  className="current-content"
                  style={{ height: "100%" }}
                  src={photo.miniPath}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="media-input" onClick={(e) => setCurrentPhoto(1, e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-chevron-compact-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
            />
          </svg>
        </div>
      </div>

      <div className="project-details-grid">
        <div className="project-detail">
          <div className="header-1">Overview</div>
          <div className="paragraph-1">
            Moving Up is a work-in-progress mobile game project, crafted as a
            solo endeavor using Unity's versatile 2D engine. Designed for
            Android with plans for an iOS version, this game is a homage to the
            challenging spirit of celebrated platformers like Celeste and Jump
            King. Moving Up aims to encapsulate the essence of these adventures
            into an engaging, arcade-style experience tailored for mobile
            platforms. Its core focus is on delivering intense platforming
            challenges, seamlessly integrated within a user-friendly mobile
            interface.
          </div>
          <div className="paragraph-1">
            <b>Early Access Release Date: </b>TBD
          </div>
          <div className="paragraph-1">
            <b>Official Release Date: </b>TBD
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
          <div className="paragraph-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            maxime delectus placeat in doloribus quae harum, expedita,
            reprehenderit odio inventore officia veritatis est sapiente,
            consectetur necessitatibus a qui quam voluptas!
          </div>
        </div>
        <div className="project-detail">
          <div className="header-1">Tech Stack</div>
          <div className="paragraph-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            maxime delectus placeat in doloribus quae harum, expedita,
            reprehenderit odio inventore officia veritatis est sapiente,
            consectetur necessitatibus a qui quam voluptas!
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingUp;
