const StudentSources = () => {
  return (
    <div className="project-flex-container">
      <div className="current-content-grid">
        <div className="current-content-header" style={{ color: "whitesmoke" }}>
          Title Screen
        </div>
        <div className="current-content-container">
          <img className="current-content" src="" alt="" />
        </div>
      </div>

      <div className="media-container-grid">
        <div className="media-input">
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
        <div className="media-content-grid">
          <div className="mini-content-container current">photo 1</div>
          <div className="mini-content-container">photo 2</div>
          <div className="mini-content-container">photo 3</div>
          <div className="mini-content-container">photo 4</div>
          <div className="mini-content-container">photo 5</div>
          <div className="mini-content-container">photo 6</div>
        </div>
        <div className="media-input">
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
          <div className="header-1">Summary</div>
          <div className="paragraph-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            maxime delectus placeat in doloribus quae harum, expedita,
            reprehenderit odio inventore officia veritatis est sapiente,
            consectetur necessitatibus a qui quam voluptas!
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

export default StudentSources;
