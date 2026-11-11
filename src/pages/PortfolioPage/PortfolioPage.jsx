import "./PortfolioPage.scss";
import { useState } from "react";

import Header from "../../components/Header/Header";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import BudgetBloomSvg from "../../components/Svg's/BudgetBloomSVG";
import moreProjectsList from "../../data/more-projects-list.json";
import Case00 from "../../components/Case00/Case00";
import Case01 from "../../components/Case01/Case01";
import Case02 from "../../components/Case02/Case02";

//import cover00Img from "../../assets/cover-images/bb";
import cover01Img from "../../assets/cover/Mau.png";
import cover02Img from "../../assets/cover/SinSilencio.png";
import webApiHackatonImg from "../../assets/images/more-projects-images/web-api-hackaton.png";
import draw00 from "../../assets/images/more-projects-images/image00.jpg";
import draw01 from "../../assets/images/more-projects-images/image01.jpg";
import game00 from "../../assets/images/more-projects-images/img-0.jpg";
import game01 from "../../assets/images/more-projects-images/img-1.jpg";
import game02 from "../../assets/images/more-projects-images/img-2.jpg";
import game03 from "../../assets/images/more-projects-images/img-3.jpg";
import game04 from "../../assets/images/more-projects-images/img-4.jpg";
import game05 from "../../assets/images/more-projects-images/img-5.jpg";
import disImg12 from "../../assets/images/more-projects-images/NixLogo.png";

import disImg00 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0001.jpg";
import disImg01 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0003.jpg";
import disImg02 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0004.jpg";
import disImg03 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0005.jpg";
import disImg04 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0006.jpg";
import disImg05 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0007.jpg";
import disImg06 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0008.jpg";
import disImg07 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0009.jpg";
import disImg08 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0010.jpg";
import disImg09 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0011.jpg";
import disImg10 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0012.jpg";
import disImg11 from "../../assets/images/portfolio-pdf-pages/Joice_Ceron_Portfolio_page-0013.jpg";


export default function PortfolioPage() {
  const industry = [
    "Budget Bloom", //case 00
    "Mauricio", //case 01
    "Sin Silencio", //case 02
    // "Nova Neko", //case 03
    // "DHM Painting", //case 04
    "More Projects",
  ];

  const webImageMap = {
    game00,
    game01,
    game02,
    game03,
    game04,
    game05,
    webApiHackatonImg,
    draw01,
    draw00,
    disImg00,
    disImg01,
    disImg02,
    disImg03,
    disImg04,
    disImg05,
    disImg06,
    disImg07,
    disImg08,
    disImg09,
    disImg10,
    disImg11,
    disImg12,
  };

  const [portfolioDoc, setPortfolioDoc] = useState("Budget Bloom");
  const [isFading, setIsFading] = useState(false);

  function renderPortfolioCover() {
    switch (portfolioDoc) {
      case industry[0]:
        return (
          <div
            className={`portfolio__cover portfolio__cover--00 ${
              isFading ? "fade-out" : "fade-in"
            }`}
          >
            <div className="portfolio__cover--svg" alt={`Budget Bloom logo`}>
              <BudgetBloomSvg />
            </div>
          </div>
        );

      case industry[1]:
        return (
          <div className="portfolio__cover portfolio__cover--01">
            <img
              src={cover01Img}
              alt={`Mauricio logo`}
              className={`portfolio__cover--image ${
                isFading ? "fade-out" : "fade-in"
              }`}
            />
          </div>
        );

      case industry[2]:
        return (
          <div className="portfolio__cover portfolio__cover--02">
            <img
              src={cover02Img}
              alt={`DMH logo`}
              className={`portfolio__cover--image ${
                isFading ? "fade-out" : "fade-in"
              }`}
            />
          </div>
        );

      case industry[3]:
        return <Header />;

      default:
        return <Header />;
    }
  }

  function renderPortfolioContent() {
    switch (portfolioDoc) {
      case industry[0]:
        return <Case00 />;

      case industry[1]:
        return <Case01 />;

      case industry[2]:
        return <Case02 />;

      case industry[3]:
        return moreProjectsList.map((project, index) => (
          <ProjectItem
            project={project}
            image={moreProjectsList[project.key]}
            key={project.key}
            reverseRow={index % 2 === 1}
          />
        ));

      default:
        return moreProjectsList.map((project) => (
          <ProjectItem
            project={project}
            image={moreProjectsList[project.key]}
            key={project.key}
            reverseRow={reverseRow}
            setReverseRow={setReverseRow}
          />
        ));
    }
  }

  return (
    <>
      <section className="portfolio">
        {renderPortfolioCover()}

        <div className="portfolio__nav-box">
          <ul className="portfolio__nav">
            <li>
              <button
                className={`button portfolio__nav--button ${
                  portfolioDoc == industry[0] ? "active" : ""
                }`}
                onClick={() => {
                  if (portfolioDoc !== industry[0]) {
                    setIsFading(true);
                    setTimeout(() => {
                      setPortfolioDoc(industry[0]);
                      setIsFading(false);
                    }, 400);
                  }
                }}
              >
                {industry[0]}
              </button>
            </li>
            <li>
              <button
                className={`button portfolio__nav--button ${
                  portfolioDoc == industry[1] ? "active" : ""
                }`}
                onClick={() => {
                  if (portfolioDoc !== industry[1]) {
                    setIsFading(true);
                    setTimeout(() => {
                      setPortfolioDoc(industry[1]);
                      setIsFading(false);
                    }, 600);
                  }
                }}
              >
                {industry[1]}
              </button>
            </li>
            <li>
              <button
                className={`button portfolio__nav--button ${
                  portfolioDoc == industry[2] ? "active" : ""
                }`}
                onClick={() => {
                  if (portfolioDoc !== industry[2]) {
                    setIsFading(true);
                    setTimeout(() => {
                      setPortfolioDoc(industry[2]);
                      setIsFading(false);
                    }, 600);
                  }
                }}
              >
                {industry[2]}
              </button>
            </li>
            <li>
              <button
                className={`button portfolio__nav--button ${
                  portfolioDoc == industry[3] ? "active" : ""
                }`}
                onClick={() => {
                  if (portfolioDoc !== industry[3]) {
                    setIsFading(true);
                    setTimeout(() => {
                      setPortfolioDoc(industry[3]);
                      setIsFading(false);
                    }, 600);
                  }
                }}
              >
                {industry[3]}
              </button>
            </li>
          </ul>
        </div>

        <div className="section">{renderPortfolioContent()}</div>
      </section>
      <button
        className="button button__nav button__nav--prev"
        onClick={() => {
          const currentIndex = industry.indexOf(portfolioDoc);
          const nextIndex =
            (currentIndex - 1 + industry.length) % industry.length;

          if (portfolioDoc !== industry[nextIndex]) {
            setIsFading(true);
            setTimeout(() => {
              window.scrollTo(0, 0);
              setPortfolioDoc(industry[nextIndex]);
              setIsFading(false);
            }, 400);
          }
        }}
      >
        🡠
      </button>
      <button
        className="button button__nav button__nav--next "
        onClick={() => {
          const currentIndex = industry.indexOf(portfolioDoc);
          const nextIndex = (currentIndex + 1) % industry.length;

          if (portfolioDoc !== industry[nextIndex]) {
            setIsFading(true);

            setTimeout(() => {
              window.scrollTo(0, 0);
              setPortfolioDoc(industry[nextIndex]);
              setIsFading(false);
            }, 400);
          }
        }}
      >
        🡢
      </button>
      <button
        className="button button__nav button__nav--bottom "
        onClick={() => window.scrollTo(0, 0)}
      >
        🡡
      </button>
    </>
  );
}
