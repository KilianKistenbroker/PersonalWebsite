import { useState, useEffect } from "react";

const CardLayout = ({projectId, photoPath, projectHeight, windowDimension}) => {
    const [i, set_i] = useState(0);
    const setCurrentPhoto = (increment, event) => {
      const i_size = photoPath.length;
  
      if (i + increment >= i_size) set_i(0);
      else if (i + increment < 0) set_i(i_size - 1);
      else set_i(i + increment);
  
      // in case bottom div gets triggered.
      event.stopPropagation();
    };
  
    useEffect(() => {
      var element = document.getElementById(`current-mini-content-${projectId}`);
      if (element) {
        const offsetLeft = element.offsetLeft - 75;
        element.parentElement.scrollLeft = offsetLeft;
      }
    }, [i]);
  
    return (
      <div>
        <div className="current-content-grid">
          <div className="current-content-header" style={{ color: "whitesmoke" }}>
            {photoPath[i].title}
          </div>
          <div
            className="current-content-container"
            style={
              windowDimension.winWidth > 767
                ? { height: "35rem" }
                : { height: `${projectHeight}rem` }
            }
          >
            {!photoPath[i] ? (
              <div>no content</div>
            ) :
            photoPath[i].type === "photo" ? (
              <img
                className="current-content"
                style={
                  windowDimension.winWidth > 767
                    ? { maxHeight: "35rem" }
                    : { maxHeight: `${projectHeight}rem`, overflow: "hidden" }
                }
                src={photoPath[i].fullPath}
                alt=""
              />
            ) : (
              // fetch Youtube
              <iframe
                // className="current-content"
                title="YouTube Video"
                style={{ width: "100%", height: "100%" }}
                src={`https://www.youtube.com/embed/${photoPath[i].fullPath}`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
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
              {photoPath.map((photo, index) => (
                <div
                  id={i === index ? `current-mini-content-${projectId}` : "null"}
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
      </div>
    );
}
 
export default CardLayout;