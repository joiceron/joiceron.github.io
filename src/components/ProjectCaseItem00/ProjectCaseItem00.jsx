import "./ProjectCaseItem00.scss";

import linkIcon from "../../assets/icons/link-icon.svg";
import userPersonaImg from "../../assets/images/case-00-images/user-persona.jpg";
import flowChartImg from "../../assets/images/case-00-images/flow-chart.jpg";
import sketch01Img from "../../assets/images/case-00-images/sketch01.jpeg";
import sketch02Img from "../../assets/images/case-00-images/sketch02.png";
import sketch04Img from "../../assets/images/case-00-images/sketch04.jpg";
import sketch05Img from "../../assets/images/case-00-images/sketch05.jpg";
import sketch06Img from "../../assets/images/case-00-images/sketch06.jpg";
import sketch07Img from "../../assets/images/case-00-images/sketch07.jpeg";

export default function ProjectCaseItem00() {
  const skills = [
    "Branding",
    "Typography",
    "Adobe Illustrator",
    "Affinity",
    "React",
    "Knex",
    "Node.js",
    "MySQL",
    "API",
    "Figma",
    "VS Code",
  ];

  return (
    <div className="case">
      {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}
      <div className="case__title">
        <h2 className="case__title--name">Budget Bloom</h2>
        <h3>UI/UX Design and Full Stack Development</h3>

        <p className="case__title--date">2025</p>
      </div>

      <article className="case__box">
        <h2>Overview</h2>
        <p>
          BudgetBloom is a budget estimator designed to assist users in
          visualizing their financial situation. The web application lets users
          plan their annual budget by enteringtheir monthly expenses and income
          with spending categories.
        </p>
        <div className="case__title--skills">
          {skills.map((skill, index) => (
            <p className="case__title--skill" key={index}>
              #{skill}
            </p>
          ))}
        </div>
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Problem Space=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box">
        <h2>Problem Space</h2>
        <ul className="square-list">
          <li>
            No appealing and free applications are available in the market.
          </li>
          <li>Not knowing how you will end the month or the next one.</li>
          <li>Long-term financial planning issues.</li>
          <li>Lack of knowledge on how to organize income and expenses.</li>
          <li>
            Difficulty visualizing spending patterns. Other tools do not provide
            a full-year overview.
          </li>
        </ul>
        <h3>Objective</h3>
        <ul className="square-list">
          <li>Single web page no payment needed.</li>
          <li>
            Provide real-time updates and summaries to help users understand
            their monthly financial status.
          </li>
          <li>Long-term financial planning issues.</li>
          <li>
            Include tools for long-term financial goal setting and tracking.
          </li>
          <li>
            Generate a full-year budget overview, allowing users to anticipate
            future financial outcomes..
          </li>
        </ul>
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Empathize=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box">
        <h2>Empathize</h2>
        <h3>Research</h3>
        {/* <p>
          Five college students aged between 20 and 25 were asked the following
          questions:
          <ul className="square-list">
            <li>
              How do you feel when you have to talk about money or budgets?
            </li>
            <li>Have you ever tried to track your expenses?</li>
            <li>What tools do you use?</li>
            <li>What frustrates you most when using budgeting apps?</li>
            <li>
              What features would you find most useful in a financial app?
            </li>
            <li>How often do you check your balance or expenses?</li>
            <li>
              Would you like to see charts, progress bars, or other visual
              elements?
            </li>
            <li>
              What would motivate you to maintain a financial tracking habit?
            </li>
          </ul>
        </p> */}
        <p>
          Competitive Analysis Most finance apps focus on automation or complex
          budgeting methods, which can overwhelm beginners. Tools like Mint and
          YNAB offer powerful features but lack simplicity or visual appeal.
          BudgetBloom fills this gap by providing a friendly, engaging, and
          goal-driven experience. It empowers users to take control of their
          finances in a way that feels clear and motivating.
        </p>
        <h3>Insights</h3>
        <p>
          Many users associate money with stress and guilt. They stop using apps
          with complicated or poorly designed menus. Desire predictability. They
          want to know how their finances will be at the end of the month or
          year. Visually boring. Current tools are uninspiring or too "serious."
        </p>
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Define=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box">
        <h2>Define</h2>
        <h3>User Persona</h3>
        <p>
          By analyzing user research and findings, we can clearly define the
          core problems that need to be solved. Creating a user persona helps
          visualize and empathize with real users their needs, goals, pain
          points, and behaviors. This understanding allows us to make informed
          design decisions that align with user expectations and improve
          usability. Throughout the process, we can evaluate ideas by asking,
          “Would this help Anna?” ensuring that each feature remains relevant,
          purposeful, and user-centered.
        </p>
        <img
          src={userPersonaImg}
          alt="User Persona for Budget Bloom"
          className="case__img"
        />
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Ideate=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box case__box--row">
        <div>
          <h2>Ideate</h2>
          <h3>Flow chart</h3>
          <p>
            In the Ideate phase, the goal is to brainstorm and explore creative
            solutions focused on improving the user experience. With a clear
            understanding of user needs and pain points.
          </p>
        </div>
        <img
          src={flowChartImg}
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-right"
        />
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Sketchs=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box case__box--row">
        <div>
          <h2>Sketchs</h2>
          <p>
            Prototypes were created to bring the solution to life and visualize
            the app’s structure and flow. The initial designs began as pencil
            sketches to quickly explore layout ideas and user interface
            elements.
          </p>
        </div>
        <img
          src={sketch01Img}
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--smallest-right"
        />
        <img
          src={sketch07Img}
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--smallest-right"
        />
      </article>

      <article className="case__box">
        <h2>Design</h2>
        <div className="case__box--row">
          <div>
            <h3 className=" case__box--centered">Logo</h3>
            <p>"Budget" Refers to the app's primary purpose </p>
            <p>
              "Bloom" (flourish) Evokes the idea of ​​growth, transformation,
              and financial well-being.
            </p>
            <p>
              The name conveys hope and progress, not just numbers or
              restrictions. It's easy to remember and sounds appealing,
              especially for young or visually inclined people. It lends itself
              to a soft graphic identity, with pastel colors, icons of plants,
              growth, etc.
            </p>
          </div>
          <img
            src={sketch05Img}
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-right"
          />
        </div>

        <div className="case__box--row">
          <img
            src={sketch06Img}
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
          <div>
            <h3>Typography</h3>
            <p>
              Bungee is bold and playful, with a strong urban vibe that
              instantly captures attention. Its thick strokes and square
              proportions make it perfect for headlines where impact and
              memorability are essential.
            </p>

            <p>
              Montserrat is clean, modern, and versatile, offering excellent
              readability for body text, captions, and user interfaces. Inspired
              by urban signage, it balances the playfulness of Bungee with a
              professional tone.
            </p>
          </div>
        </div>
        <div className="case__box--row">
          <div>
            <h3>Color pallete</h3>
            <p>
              This palette is simple, cute, and thoughtfully balanced using
              complementary colors. The addition of Rich Black and Neutral Gray
              provides grounding tones that enhance readability, and all chosen
              shades meet AA accessibility standards, ensuring text and elements
              are easily distinguishable for most users. Overall, it’s a palette
              that’s visually appealing, cheerful, and user-friendly.
            </p>
          </div>
          <img
            src={sketch04Img}
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-right"
          />
        </div>
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Implementation=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box">
        <h2>Implementation</h2>
        <h3 className=" case__box--centered">Tech Stack</h3>
        <p>Frontend: React</p>
        <p> Backend: Node.js with Express.js to handle server-side logic</p>
        <h3>APIs</h3>
        <p>
          APIs will be utilized through Axios to create, edit, and delete data
          on the server side.
        </p>
        <p>
          <strong>GIF API:</strong> Generates memes based on the remaining
          balance at the end of the year.
        </p>
        <h3>Data</h3>
        <ul>
          <li>
            <strong>Users:</strong> ID, email, password
          </li>
          <li>
            <strong>Transactions:</strong> Date, amount, category, type (income
            or expense)
          </li>
          <li>
            <strong>Budget Values/Amounts:</strong> Defined by the user for each
            category and month
          </li>
        </ul>
        <h3>Endpoints</h3>
        <ul>
          <li>
            <strong>POST /signup</strong>
          </li>
          <li>
            <strong>POST /:id/budget:</strong> Saves budget data for a specific
            user
          </li>
          <li>
            <strong>GET /:id/budget:</strong> Retrieves budget data for a
            specific user
          </li>
        </ul>
      </article>

      {/* -=-=-=-=-=-=-=-=-=-Results & Impact=-=-=-=-=-=-=-=-=-=-=-=- */}

      <article className="case__box">
        <h2>Result</h2>

        <div className="case__box--row">
          
          <div>
            <a
              href={
                "https://github.com/joiceron/budget-bloom?tab=readme-ov-file"
              }
              className="content__link--text"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkIcon}
                alt="link icon"
                className="content__link--img"
              />
              Go to Repository
            </a>
            <br />
            <a
              href={"https://joiceron.github.io/budget-bloom/"}
              className="content__link--text"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkIcon}
                alt="link icon"
                className="content__link--img"
              />
              Go to Live Project
            </a>
            <br />
          </div>
          <a
            className=""
            href="https://github.com/joiceron/budget-bloom"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={sketch02Img}
              alt="Flow Chart for Budget Bloom"
              className="case__img case__img--small"
            />
          </a>
        </div>
      </article>
    </div>
  );
}
