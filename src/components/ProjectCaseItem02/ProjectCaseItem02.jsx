import "./ProjectCaseItem02.scss";

// import novaNekoTitleImg from "../../assets/images/case-02-images/SplashScreenTitle.png";

export default function ProjectCaseItem02() {
  const skills = [
    "Graphic Design",
    "Branding",
    "Illustration",
    "Typography",
    "Research",
  ];
  return (
    <div className="case">
      <div className="case__title">
        <h3 className="case__title--name02">
          Sin Silencio <i> (No Silence) </i>
        </h3>
        <h3>Public Awareness Campaign</h3>
        <div className="case__title--skills">
          {skills.map((skill, index) => (
            <p className="case__title--skill " key={index}>
              {skill}
            </p>
          ))}
        </div>
        <p className="case__title--date">2021</p>
      </div>

      <article className="case__box">
        <h2>Overview</h2>
        <p>
          This project aimed to develop a visual communication system to raise
          awareness about legal actions against cybersexual harassment on social
          media in Ecuador. It provided victims with the necessary information
          to recognize, report, and legally pursue cases of digital sexual
          violence.
        </p>
      </article>

      <article className="case__box">
        <h2>Problem Space</h2>
        <p>
          Social networks in Ecuador have seen an increase in cases of
          cyberbullying and cybersexual harassment, especially during the
          COVID-19 pandemic. Many victims do not report these incidents due to
          shame, fear, or lack of awareness about their legal rights.
        </p>
        <h3>Challenges</h3>
        <ul className="square-list">
          <li>
            Ecuador has no specific law on cybersexual harassment, but articles
            from the Penal Code can be applied.
          </li>
          <li>
            Nearly one-third of Ecuadorian youth reported being victims of
            cyberbullying, yet most never report it.
          </li>
          <li>
            Lack of clear and accessible communication materials for victims to
            follow legal processes.
          </li>
        </ul>
      </article>

      <article className="case__box">
        <h2>Research & Insights</h2>
        <p>
          To better understand the needs and expectations of the target
          audience, several methods were used, including surveys, interviews
          with lawyers, psychologists, and observation of digital behavior.
          Surveys revealed preferences and challenges, while interviews captured
          personal experiences, giving a complete view of what information
          people value most.
        </p>
        <p>
          The results showed that participants often felt overwhelmed by the
          amount of information available and preferred clear, visual
          explanations over long texts. Many respondents also highlighted the
          importance of having reliable resources collected in one place. These
          insights guided the design decisions, leading to the creation of
          easy-to-follow visuals, simplified messages, and a structured pathway
          of information.
        </p>
      </article>

      <article className="case__box">
        <h2>Define</h2>
        <h3>Proposal</h3>
        <ul className="square-list">
          <li>
            An informative <strong> web page</strong> with links to goverment
            resources
          </li>
          <li>
            A <strong> printable guide </strong> with a clear information
            pathway for profesionalssuch psicologist or lawyers to give a
            victims
          </li>
          <li>
            A <strong>social media campaign</strong>that could empower users to
            take legal action.
          </li>
        </ul>
        <p>
          A system of visual communication was designed, including a logo,
          characters, infographics, and a color palette to be used in both
          digital and printed campaigns: to establish a strong and consistent
          visual identity. The logo ensures brand recognition, the characters
          create a sense of empathy and connection, the infographics simplify
          complex information into clear visuals, and the color palette
          guarantees coherence across both digital and printed materials.
        </p>
        <img src="" alt="User Persona for Budget Bloom" className="case__img" />
      </article>

      <article className="case__box case__box--row">
        <div>
          <h2>Sketchs</h2>
        </div>
        <img
          src=""
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-third "
        />
      </article>

      <article className="case__box">
        <h2>Design</h2>
        <div className="case__box--row">
          <div>
            <h3>Logo</h3>
            <p>
              The logotype was created using bold typography and integrated
              graphic elements representing “not staying silent.” The design
              conveys seriousness while remaining approachable for younger
              audiences.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/logo-final.png"
            alt="Logo Design"
            className="case__img case__img--small-left"
          />
        </div>
        <div className="case__box--row">
          <div>
            <h3>Color Palette</h3>
            <p>
              Yellow (#FDAD18) was chosen for its high visibility and
              association with warnings. It was paired with brown, black, and
              white to reinforce contrast and readability.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/colors.png"
            alt="Color Palette"
            className="case__img case__img--small-left"
          />
        </div>
        <div className="case__box--row">
          <div>
            <h3>Characters</h3>
            <p>
              Illustrated silhouettes of young adults were developed in yellow
              with bold black outlines. These characters added relatability and
              human presence to the campaign.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/characters.png"
            alt="Character Illustrations"
            className="case__img case__img--small-left"
          />
        </div>
        <div className="case__box--row">
          <div>
            <h3>Iconography</h3>
            <p>
              Custom icons were designed to visually represent key concepts and
              actions, making complex information easy to understand and
              navigate for all users.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/characters.png"
            alt="Character Illustrations"
            className="case__img case__img--small-left"
          />
        </div>
        <div className="case__box--row">
          <div>
            <h3>Landing page</h3>
            <p>
              The website was created as an informative hub, structured to guide
              users through legal information and resources with a simple and
              intuitive layout.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/characters.png"
            alt="Character Illustrations"
            className="case__img case__img--small-left"
          />
        </div>
        <div className="case__box--row">
          <div>
            <h3>Guide</h3>
            <p>
              A printable guide was developed to provide a clear step-by-step
              process for reporting cyber harassment, summarizing relevant laws
              and offering practical support to victims.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/characters.png"
            alt="Character Illustrations"
            className="case__img case__img--small-left"
          />
        </div>
        <div className="case__box--row">
          <div>
            <h3>Social media</h3>
            <p>
              A social media campaign was designed to increase awareness and
              engagement, using visuals and messages that encourage safe online
              behavior and empower victims to take action.
            </p>
          </div>
          <img
            src="../../assets/images/case-03-images/characters.png"
            alt="Character Illustrations"
            className="case__img case__img--small-left"
          />
        </div>
      </article>

      <article className="case__box">
        <h2>Results & Impact</h2>
        <p>
          The project resulted in a cohesive visual communication system that
          empowers Ecuadorian social media users to recognize cybersexual
          harassment, understand their legal rights, and take action. The
          materials also serve as an educational tool to raise awareness and
          promote digital safety.
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
