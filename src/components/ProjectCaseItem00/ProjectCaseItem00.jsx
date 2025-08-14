import "./ProjectCaseItem00.scss";

import userPersonaImg from "/case-study-images/user-persona.jpg";
import flowChartImg from "/case-study-images/flow-chart.jpg";
import sketch01Img from "/case-study-images/sketch01.jpg";
import sketch02Img from "/case-study-images/sketch02.png";
import sketch04Img from "/case-study-images/sketch04.jpg";
import sketch05Img from "/case-study-images/sketch05.jpg";
import sketch06Img from "/case-study-images/sketch06.jpg";

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

      <div className="case__title">
        <h2 className="case__title--name">Budget Bloom</h2>
        <h3 className="case__subtitle">UI/UX Design and Full Stack Development</h3>
        <div  className="case__title--skills">
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
          BudgetBloom is a budget estimator designed to assist users in
          visualizing their financial situation and setting financial goals. The
          web application lets users plan their annual budget by enteringtheir
          monthly expenses and income with spending categories. Designed,
          developed and maintained a budget planner using modular components
          with React.js, MySQL, and Knex. Integrated RESTful APIs and ensured
          scalability with GitHub backups.
        </p>
      </article>

      <article className="case__box">
        <h2>Problem Space</h2>
        <h3>Objective</h3>
        <p>
          Single web page no payment need Provide real-time updates and
          summaries to help users understand their monthly financial status.
          Include tools for long-term financial goal setting and tracking.
          Generate a full-year budget overview, allowing users to anticipate
          future financial outcomes.
        </p>
        <h3>Challenges</h3>
        <p>
          Single web page no payment need Provide real-time updates and
          summaries to help users understand their monthly financial status.
          Include tools for long-term financial goal setting and tracking.
          Generate a full-year budget overview, allowing users to anticipate
          future financial outcomes.
        </p>
      </article>

      <article className="case__box">
        <h2>Empathize</h2>
        <h3>Research</h3>
        <p>
          Five college students aged between 20 and 25 were asked the following
          questions: How do you feel when you have to talk about money or
          budgets? Have you ever tried to track your expenses? What tools do you
          use? What frustrates you most when using budgeting apps? What features
          would you find most useful in a financial app? How often do you check
          your balance or expenses? Would you like to see charts, progress bars,
          or other visual elements? What would motivate you to maintain a
          financial tracking habit?
        </p>
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

      <article className="case__box case__box--row">
        <div>
          <h2>Ideate</h2>
          <h3>Flow chart</h3>
          <p>
            In the Ideate phase, the goal is to brainstorm and explore creative
            solutions focused on improving the user experience. With a clear
            understanding of user needs and pain points, a flow chart was
            generated to reflect the simple and intuitive app they require.
            Every idea is evaluated through the lens of our user persona to
            ensure that the final design offers both functionality and delight.
          </p>
        </div>
        <img
          src={flowChartImg}
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left"
        />
      </article>

      <article className="case__box case__box--row">
        <div>
          <h2>UX Design</h2>
          <h3>Sketch</h3>
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
          className="case__img case__img--small-third "
        />
      </article>

      <article className="case__box">
        <div className="case__box--row">
          <div>
            <h2>User Interface Design</h2>
            <h3>Isologo</h3>
            <p>
              Prototypes were created to bring the solution to life and
              visualize the app’s structure and flow. The initial designs began
              as pencil sketches to quickly explore layout ideas and user
              interface elements.
            </p>
          </div>
          <img
            src={sketch05Img}
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
        </div>
        <div className="case__box--row">
          {" "}
          <img
            src={sketch06Img}
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
            <p>
              Prototypes were created to bring the solution to life and
              visualize the app’s structure and flow. The initial designs began
              as pencil sketches to quickly explore layout ideas and user
              interface elements.
            </p>
          </div>
          <img
            src={sketch04Img}
            alt="Flow Chart for Budget Bloom"
            className="case__img case__img--small-left "
          />
        </div>
      </article>

      <article className="case__box">
        <h2>Results & Impact</h2>
        <p>
          "Single web page no payment need", "Provide real-time updates and
          summaries to help users understand their monthly financial status.",
          "Include tools for long-term financial goal setting and tracking.",
          "Generate a full-year budget overview, allowing users to anticipate
          future financial outcomes."
        </p>
        <img
          src={sketch02Img}
          alt="Flow Chart for Budget Bloom"
          className="case__img case__img--small-left "
        />
      </article>
    </div>
  );
}
