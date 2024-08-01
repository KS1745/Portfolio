import "../styles/Home.css";

export default function Home() {
  return (
    <section className="Home" id="home">
      <div className="main">
        <div className="main-text-area">
          <h1>
            Front-End <br /> Developer
          </h1>
          <p>
            Hi, I am Kartikay Sinha. A passionate Front-end <br /> Developer
          </p>
          <span className="icons">
            <a href="https://www.linkedin.com/in/kartikaysinha/">
              <i class="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/KS1745">
              <i class="ri-github-line"></i>
            </a>
          </span>
        </div>
        <div className="main-img-area">
          <img src="\images\file.jpg" alt="profile" />
        </div>
      </div>

      <div className="skills">
        <h3>Tech Stack</h3>
        <p>|</p>
        <div className="skills-icon">
          <img src="https://skillicons.dev/icons?i=html,css,js" />
        </div>
        <div className="skills-icon">
          <img src="https://skillicons.dev/icons?i=react,tailwind,next" />
        </div>
      </div>
    </section>
  );
}
