import "./ProjectCaseItem01.scss";

import studyCases from "../../data/ui-ux-list.json";

import catAnimationImg from "../../assets/images/case-01-images/Cat-animation.gif";
import gameUiImage from "../../assets/images/case-01-images/Page 1.png";
import sprite01Img from "../../assets/images/case-01-images/Page 2.png";
import sprite02Img from "../../assets/images/case-01-images/Page 3.png";
import sprite03Img from "../../assets/images/case-01-images/Page 4.png";
import sprite04Img from "../../assets/images/case-01-images/Page 5.png";
import sprite05Img from "../../assets/images/case-01-images/Page 6.png";
import sprite06Img from "../../assets/images/case-01-images/Page 7.png";
import sprite07Img from "../../assets/images/case-01-images/Page 9.png";

import webPage01Img from "../../assets/images/case-01-images/Mau's logo-02.png";
import webPage02Img from "../../assets/images/case-01-images/Mau's logo-03.png";
import webPage03Img from "../../assets/images/case-01-images/Mau's logo-04.png";
import webPage04Img from "../../assets/images/case-01-images/Mau's logo-05.png";
import logoImg from "../../assets/images/case-01-images/Mau's logo-07.png";

export default function ProjectCaseItem01() {
  const skills = [
    "Branding",
    "Typography",
    "Adobe Illustrator",
    "C++",
    "Phython",
    "Eclipse",
  ];

  return (
    <article className="case">
      <div className="case__title">
        <h2 className="case__title--name01">Mauricio</h2>
        <h3>Branding, Web Design and Game Developement</h3>

        <p className="case__title--date">2023</p>
      </div>

      <div className="case__box case__box--row">
        <div>
          <h2>Overview</h2>
          <p>
            Mauricio is an software and game developer that need a portfolio
            website concept. The brand was inspired by his name and his love for
            cats. It was created a complete brand identity, portfolio UI design,
            and a playful mini game to match the aestheric.
          </p>
          <div className="case__title--skills ">
            {skills.map((skill, index) => (
              <p className="case__title--skill" key={index}>
                
                #{skill}
              </p>
            ))}
          </div>
        </div>
        <img
          src={catAnimationImg}
          alt=""
          className="case__img case__img--smallest-right case__img01"
        />
      </div>

      <div className="case__box">
        <h2>Problem Space</h2>
        <h3>Objective</h3>
        <p>
          Create a memorable and interactive personal portfolio for a developer
          who also builds games. The site should reflect both technical skills
          and creativity while staying lightweight and simple.
        </p>
        <h3>Challenges</h3>
        <ul className="square-list">
          <li>
            How to combine a professional identity with a fun and playful
            personality without losing clarity?
          </li>
          <li>
            How to design a cohesive visual language across logo, UI, and game?
          </li>
          <li>How to make typography the central visual element?</li>
          <li>
            How to build a game using only typographic characters and logic in
            Python?
          </li>
        </ul>
      </div>

      <div className="case__box">
        <h2>Research & Ideation</h2>
        <h3>Inspiration</h3>
        <p>
          I explored several directions for the brand using just slab-serif
          characters to form cat-like shapes.
        </p>
        <ul className="square-list">
          <li>Cat iconography and character branding </li>
          <li>Minimal UI developer portfolios</li>
          <li>Retro pixel art games and ASCII-style graphics</li>
          <li>Google's Chrome Dino Game mechanics</li>
        </ul>
        {/* <h3>Sketches</h3> */}
      </div>

      <div className="case__box">
        <h2>Branding & Logo Design</h2>
        <p>
          The brand centers around the name “Mau” from “Maullido”, which means
          "meow" in Spanish. I created a custom "M" with cat ears and eyes,
          using a slab serif font that gives a bold, structured but friendly
          feel. To expand the visual system, I also designed: • A full cat
          character using typographic glyphs • Multiple mouse characters
          (normal, toy, poisoned) with subtle glyph differences.
        </p>
        <div className="case__box--center">
          <img
            src={logoImg}
            alt="Home page"
            className="case__img case__img--small"
          />
        </div>
      </div>

      <div className="case__box">
        <h2>Web UI/UX Design</h2>
        <p>
          I chose a dark theme with monospaced and slab serif fonts, referencing
          developer tools and terminals, while keeping elements soft and playful
          with rounded corners and glyph illustrations.
        </p>
        <div className="case__box--row">
          <h3 className="case__subtitle">Home (Name, Logo, CTA)</h3>
          <img
            src={webPage01Img}
            alt="Home page"
            className="case__img case__img--small-right"
          />
        </div>
        <div className="case__box--row">
          <img
            src={webPage02Img}
            alt="Home page"
            className="case__img case__img--small-left"
          />
          <h3 className="case__subtitle">My Projects</h3>
        </div>
        <div className="case__box--row">
          <h3 className="case__subtitle">About Me </h3>
          <img
            src={webPage04Img}
            alt="Home page"
            className="case__img case__img--small-right"
          />
        </div>
        <div className="case__box--row">
          <img
            src={webPage03Img}
            alt="Home page"
            className="case__img case__img--small-left"
          />
          <h3 className="case__subtitle">Resume</h3>
        </div>
      </div>

      <div className="case__box">
        <h2>Game Development: “Hunting Cat”</h2>
        <p></p>
        <h3>Game Mechanics</h3>
        <p>
          Built with Python and Pygame, the game is inspired by the Chrome Dino
          Game. • Player is a cat trying to catch the right mice using the
          spacebar • Some mice are toxic or fake toys, and must be avoided •
          Sprites are built from typography characters only • Score increases
          with each correct catch • Speed increases over time. • Collision logic
          for mice • Timed object generation • Typographic sprite animation •
          Score tracking & increasing difficulty
        </p>
        <img src={gameUiImage} alt="" className="case__img" />
        <h3>Cat sprites</h3>
        <p>
          The sprites were created using characters from the Courier font at
          different weights. The ears were formed by the letter 'M' with a line
          in between, the whiskers are '=', and the paws are 'o' and '(' for the
          belly and a '?' for the tail.
        </p>
        <div className="case__box--group">
          <img
            src={sprite01Img}
            alt="Sprite 01"
            className="case__img case__img--small-group case__img01"
          />
          <img
            src={sprite07Img}
            alt="Sprite 08"
            className="case__img case__img--small-group case__img01"
          />
          <img
            src={sprite02Img}
            alt="Sprite 02"
            className="case__img case__img--small-group case__img01"
          />
          <img
            src={sprite03Img}
            alt="Sprite 03"
            className="case__img case__img--small-group case__img01"
          />
        </div>
        <h3>Mouse sprites</h3>
        <p>
          The characters used for this design were '?', 'v', 'l', '(' and '2'.
        </p>
        <div className="case__box--group">
          <img
            src={sprite05Img}
            alt="Sprite 05"
            className="case__img case__img--small-group case__img01"
          />
          <img
            src={sprite06Img}
            alt="Sprite 06"
            className="case__img case__img--small-group case__img01"
          />
          <img
            src={sprite04Img}
            alt="Sprite 04"
            className="case__img case__img--small-group case__img01"
          />
        </div>
      </div>

      <div className="case__box">
        <h2>Obstacles & Decisions</h2>
        <h3>Problem</h3>
        <p>
          Typography sprites lacked personality Game logic felt too easy at
          first Difficult to balance playful and professional in web UI
          Integrating game into website technically.
        </p>
        <h3>Decision</h3>
        <p>
          Typography sprites lacked personality Game logic felt too easy at
          first Difficult to balance playful and professional in web UI
          Integrating game into website technically.
        </p>
      </div>

      <div className="case__box">
        <h2>Results & Impact</h2>
        <ul className="square-list">
          <li>Builded consistency across brand, interface, and interaction</li>
          <li>Pushed creativity by working within typographic limitations</li>
          <li>Strengthened logic and flow building with Python and Pygame</li>
        </ul>
      </div>
    </article>
  );
}
