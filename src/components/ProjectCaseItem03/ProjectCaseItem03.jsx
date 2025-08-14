import "./ProjectCaseItem03.scss";

import novaNekoTitleImg from "../../assets/images/case-02-images/SplashScreenTitle.png";

export default function ProjectCaseItem03() {
  const skills = [
    "Photoshop",
    "Typography",
    "Branding",
    "Affinity",
    "Sketch",
  ];

  return (
    <div className="case">
      <div className="case__title">
        <h3 className="case__title--name03">DHM Painting</h3>
        <h3>Branding</h3>
        <div className="case__title--skills">
          {skills.map((skill, index) => (
            <p className="case__title--skill " key={index}>
              {skill}
            </p>
          ))}
        </div>
        <p className="case__title--date">2022</p>
      </div>

      <article className="case__box">
        <h2>Overview</h2>
        <p>
          DHM Painting 
        </p>
      </article>

      <article className="case__box">
        <h2>Problem Space</h2>
        <h3>Objective</h3>
        <p>
         
        </p>
        <h3>Challenges</h3>
        <p>
        </p>
      </article>

      <article className="case__box">
        <h2>Empathize</h2>
        <h3>Research</h3>
        <p>
 
        </p>
        <p>

        </p>
        <h3>Insights</h3>
        <p>

        </p>
      </article>

      <article className="case__box">
        <h2>Define</h2>
        <h3>User Persona</h3>
        <p>

        </p>
        <img
          src=""
          alt="User Persona for Budget Bloom"
          className="case__img"
        />
      </article>

      <article className="case__box case__box--row">
        <div>
          <h2>Ideate</h2>
          <h3>Flow chart</h3>
          <p>
          </p>
        </div>
        <img
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left"
        />
      </article>

      <article className="case__box case__box--row">
        <div>
          <h2>UX Design</h2>
          <h3>Sketch</h3>
          <p>
          </p>
        </div>
        <img
        
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-third "
        />
      </article>

      <article className="case__box">
        <div className="case__box--row">
          <div>
            <h2>User Interface Design</h2>
            <h3>Isologo</h3>
            <p>
            </p>
          </div>
          <img
          src=""
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
        </div>
        <div className="case__box--row">
          <img
          src=""
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
          <div>
            <h3>Typogrphy</h3>
            <p>

            </p>
          </div>
        </div>
        <div className="case__box--row">
          <div>
            <h3>Color pallete</h3>
            <p>

            </p>
          </div>
          <img
          src=""
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
        </div>
      </article>

      <article className="case__box">
        <h2>Results & Impact</h2>
        <p>

        </p>
        <img
 
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left "
        />
      </article>
    </div>
  );
}
