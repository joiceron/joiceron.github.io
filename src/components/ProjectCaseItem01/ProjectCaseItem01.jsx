import "./ProjectCaseItem01.scss";

import studyCases from "../../data/ui-ux-list.json";

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
        <h2 className="case__title--name01">Mauricio's Portfolio</h2>
        <h3>Branding, Web Design and Mini Game Developement</h3>
        <div className="case__title--skills ">
          {skills.map((skill, index) => (
            <p className="case__title--skill" key={index}>
              {skill}
            </p>
          ))}
        </div>
        <p className="case__title--date">2022</p>
      </div>

      <div className="case__box">
        <h2>Overview</h2>
        <p>
          I created a full visual identity and a portfolio website concept for a
          software and game developer named Mauricio. The brand was inspired by
          his name and his love for cats, resulting in a playful and distinctive
          style that merges technology with character. I created a complete
          brand identity, portfolio UI design, and a playful mini game for a
          fictional developer named Mauricio, whose nickname "Mau" inspired a
          cat-themed concept. This project blends branding, interaction design,
          and basic game programming into a unique, engaging developer
          portfolio.
        </p>
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
        <p>
          • How to combine a professional identity with a fun and playful
          personality without losing clarity? • How to design a cohesive visual
          language across logo, UI, and game? • How to make typography the
          central visual element? • How to build a game using only typographic
          characters and logic in Python?
        </p>
      </div>

      <div className="case__box">
        <h2>Research & Ideation</h2>
        <h3>Inspiration</h3>
        <p>
          I looked into: • Cat iconography and character branding • Minimal UI
          developer portfolios • Retro pixel art games and ASCII-style graphics
          • Google's Chrome Dino Game mechanics
        </p>
        <h3>Sketches</h3>
        <p>
          I explored several directions for the brand using just slab-serif
          characters to form cat-like shapes.
        </p>
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
      </div>

      <div className="case__box">
        <h2>Web UI/UX Design</h2>
        <h3>Site Structure</h3>
        <p>
          • Hero section (Name, Logo, CTA) • About Me • Projects • Game Section
          • Contact
        </p>
        <h3>Visual Direction</h3>
        <p>
          I chose a dark theme with monospaced and slab serif fonts, referencing
          developer tools and terminals, while keeping elements soft and playful
          with rounded corners and glyph illustrations.
        </p>
      </div>

      <div className="case__box">
        <h2>Game Development: “Hunting Cat”</h2>
        <p>
          Built with Python and Pygame, the game is inspired by the Chrome Dino
          Game. • Player is a cat trying to catch the right mice using the
          spacebar • Some mice are toxic or fake toys, and must be avoided •
          Sprites are built from typography characters only • Score increases
          with each correct catch • Speed increases over time
        </p>
        <h3>Game Mechanics</h3>
        <p>
          • Collision logic for mice • Timed object generation • Typographic
          sprite animation • Score tracking & increasing difficulty
        </p>
      </div>

      <div className="case__box">
        <h2>Obstacles & Decisions</h2>
        <h3>Problem</h3>
        <p>
          Typography sprites lacked personality Game logic felt too easy at
          first Difficult to balance playful and professional in web UI
          Integrating game into website technically.
        </p>{" "}
        <h3>Decision</h3>
        <p>
          Typography sprites lacked personality Game logic felt too easy at
          first Difficult to balance playful and professional in web UI
          Integrating game into website technically.
        </p>
      </div>

      <div className="case__box">
        <h2>Results & Impact</h2>
        <p>
          • Builded consistency across brand, interface, and interaction •
          Pushed creativity by working within typographic limitations •
          Strengthened logic and flow building with Python and Pygame
        </p>
      </div>
    </article>
  );
}
