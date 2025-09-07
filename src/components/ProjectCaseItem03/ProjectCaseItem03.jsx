import "./ProjectCaseItem03.scss";

import novaNekoTitleImg from "../../assets/images/case-02-images/SplashScreenTitle.png";

export default function ProjectCaseItem02() {
  const skills = [
    "Unity",
    "After Effects",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "GitHub Desktop",
    "Kanban ",
    "Lucidchart",
    "Cross-funtional Collaboration",
  ];
  // https://github.com/Sebastian6277/NovaNekoEscape
  // Character concepts, sprite sheets, environment assets, UI design, logo design, p

  return (
    <div className="case">
      <div className="case__title">
        <img
          src={novaNekoTitleImg}
          alt="Nova Neko"
          className="case__title--img"
        />
        <h3>Game Developement & Art</h3>
        <div className="case__title--skills ">
          {skills.map((skill, index) => (
            <p className="case__title--skill" key={index}>
              {skill}
            </p>
          ))}
        </div>
        <p className="case__title--date">2022</p>
      </div>

      <article className="case__box">
        <h2>Overview</h2>
        <p>
          Nova Neko is a 2D infinite runner game developed in Unity, created in
          collaboration with a six-person team, as a summer project, hence the
          logo 6 summers of our studio. The game follows two magical cats,
          Nimbus and Nova , as they escape a ghostly force threatening to
          consume the universe.
        </p>
      </article>

      <article className="case__box">
        <h2>Problem Space</h2>
        <h3>Challenges</h3>
        <p>
          Our challenge was to design a dual-character system that felt fun,
          intuitive, and rewarding, while also crafting a memorable art style
          that stood out. The game’s core mechanic is character switching:
          players can swap between Nimbus and Nova at any moment, each offering
          distinct movement abilities and powers granted by collectible coins.
          Create a visually distinctive platformer with two playable characters.
          Design UI and game art that matched the magical, cosmic theme. Ensure
          the player experience was smooth and intuitive when switching
          characters.
        </p>
        <ul className="square-list">
          <li>
            Balancing two different characters with unique abilities (jump
            height, powers).
          </li>
          <li>
            Designing UI that clearly communicates abilities and collected
            items.
          </li>
          <li>
            Maintaining team communication across roles (QA, PM, Level Designer,
            Audio Designer).
          </li>
          <li>Creating assets under a limited capstone timeline. </li>
          <li>
            Worked closely with the level designer to keep visuals clear for
            gameplay readability.
          </li>
          <li>
            Coordinated with QA to iterate on UI feedback and improve usability.
          </li>
        </ul>
        <h3>Roles & Responsibilities</h3>
        <p>
          I was responsible for all art direction and user interface design,
          while other team members covered QA, project management, level design,
          and audio design. The lead for art direction and UI design, I was
          responsible for establishing the game’s visual style, creating all
          character and environment assets, and designing the user interface. I
          collaborated closely with the level designer to ensure that the art
          supported gameplay clarity and worked with QA to refine the UI based
          on player feedback.
        </p>
        <p></p>
      </article>

      <article className="case__box">
        <h2>Game Narrative</h2>
        <h3>Core Gameplay Features</h3>
        <p>
          In the vast universe of Nubecila, a brave cat named Nimbus discovers a
          mysterious cosmic artifact: the Cosmic button. Upon activating it,
          Nova gains the ability to instantly transform into a galactic cat and
          explore infinite space. But his transformation attracts the attention
          of a new threat: the Cosmic Hunter. This technologically advanced
          alien hunts extramundane creatures for their intergalactic collection,
          viewing Nova as the most precious jewel. Determined to capture Nova,
          the Cosmic Hunter deploys a variety of traps and obstacles along his
          path; the hunter will do everything possible to stop Nova and capture
          him. Our heroes collect Star cookie energy to maintain his galactic
          forms and get various powers for avoiding falling into the void or
          being trapped by the screen. As Nova races through the cosmos, he
          discovers clues about the true nature of the Star Cookie and its
          connection to the Cosmic Hunter. Determined to protect his home and
          avoid falling into the hands of the hunters, Nova becomes the fastest
          and most cunning cosmic runner the universe has ever seen. With each
          race, Nova gets closer to unraveling the mystery behind the Star
          Cookie and facing the Cosmic Hunter in a final battle for freedom and
          justice in the cosmos.
        </p>
        <h3>Dual-Character Mechanic</h3>
        <p>
          Nimbus: higher jumps, pastel rainbow aesthetic. Nova: faster movement,
          cosmic fire theme. Switching is mapped to a single key for fluid
          transitions.One-key instant switching for flow and puzzle chaining.
        </p>
        <ul class="square-list">
          <li>
            <strong>Nimbus:</strong> higher jump arc; pastel rainbow identity.
          </li>
          <li>
            <strong>Nova:</strong> faster movement; cosmic flame identity.
          </li>
        </ul>
        <h3>Collectible Power Coins</h3>
        <p>
          Temporary ability boosts (double jump, speed dash). Integrated into UI
          with clear feedback for activation.
        </p>
        <h3>Dynamic Platforming Challenges</h3>
        <p>
          Puzzles require swapping between characters. Ghostly force serves as a
          constant narrative and mechanical pressure.
        </p>
      </article>

      <article className="case__box">
        <div className="case__box--row">
          <div>
            <h2>User Interface Design</h2>
            <h3>Isologo</h3>
            <p></p>
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
              Prototypes were created to bring the solution to life and
              visualize the app’s structure and flow. The initial designs began
              as pencil sketches to quickly explore layout ideas and user
              interface elements.
            </p>
          </div>
        </div>
        <div className="case__box--row">
          <div>
            <h3>Color pallete</h3>
            <p></p>
          </div>
          <img
            src=""
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
        </div>
      </article>

      <article className="case__box">
        <h2>Art & Visual Design</h2>
        <h3>Character Design: Nimbus</h3>
        <p>soft gradients, cloud-like textures.</p>
        <img
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left "
        />
        <h3>Character Design: Nova</h3>
        <p>glowing edges, space-inspired color scheme.</p>
        <img
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left "
        />{" "}
        <h3>UI Style</h3>
        <p>sRounded icons, cosmic motifs (stars, galaxies).</p>
        <img
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left "
        />
        <h3>Color Palette & Typography</h3>
        <p>
          Balanced bright pastels with deep indigos and purples for contrast.
        </p>
        <img
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left "
        />
      </article>

      <article className="case__box">
        <h2>Results & Impact</h2>
        <p>
          Delivered a playable demo that was showcased as part of our capstone
          presentation. Positive feedback highlighted the visual identity and
          intuitive UI. Switching mechanic was praised as fun and strategic once
          mastered. Strengthened my skills in UI/UX for games, art direction,
          asset creation, and cross-disciplinary teamwork.
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
