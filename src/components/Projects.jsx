import "../styles/Projects.css";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h4>Portfolio</h4>

      <div className="project-one">
        <div className="one-img-area interactable">
          <img
            src="\images\WhatsApp Image 2024-08-01 at 23.32.05_2e649e8f.jpg"
            alt="project-pic"
          />
        </div>

        <div className="one-text-area">
          <h4>Kartikay Estate</h4>
          <p>
            Kartikay Estate is the best place to find your next perfect place to
            live.
            <br /> We have a wide range of properties for you to choose from.
          </p>

          <div className="links">
            <a href="https://github.com/KS1745/Real-Estate">
              Code <i className="ri-github-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
