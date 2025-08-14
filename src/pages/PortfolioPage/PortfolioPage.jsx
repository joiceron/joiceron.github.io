import "./PortfolioPage.scss";
import { useState } from "react";

import Header from "../../components/Header/Header";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import CaseItem from "../../components/CaseItem/CaseItem";
import ProjectCaseItem00 from "../../components/ProjectCaseItem00/ProjectCaseItem00";
import ProjectCaseItem01 from "../../components/ProjectCaseItem01/ProjectCaseItem01";
import ProjectCaseItem02 from "../../components/ProjectCaseItem02/ProjectCaseItem02";
import ProjectCaseItem03 from "../../components/ProjectCaseItem03/ProjectCaseItem03";

import cover00Img from "/cover-images/budget-bloom-img.png";
import cover01Img from "/cover-images/Mau.png";
import cover02Img from "/cover-images/Interface with sunset-03.png";
import cover03Img from "/cover-images/Logo Sin slogan_4.png";

import webProjects from "../../data/web-projects-list.json";
import gameProjects from "../../data/game-projects-list.json";
import drawProjects from "../../data/draw-projects-list.json";

import webApiHackatonImg from "/web-dev-images/web-api-hackaton.png";
import budgetBloomImg from "/web-dev-images/budget-bloom.png";
import catImg from "/cover-images/Mau.png";

import draw00 from "/drawing-images/image00.jpg";
import draw01 from "/drawing-images/image01.jpg";
import draw02 from "/drawing-images/image02.jpg";
import draw03 from "/drawing-images/image03.jpg";
import draw04 from "/drawing-images/image04.jpg";
import draw05 from "/drawing-images/image05.jpg";

import game00 from "/game-images/img-0.jpg";
import game01 from "/game-images/img-1.jpg";
import game02 from "/game-images/img-2.jpg";
import game03 from "/game-images/img-3.jpg";
import game04 from "/game-images/img-4.jpg";
import game05 from "/game-images/img-5.jpg";

import disImg00 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0001.jpg";
import disImg01 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0003.jpg";
import disImg02 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0004.jpg";
import disImg03 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0005.jpg";
import disImg04 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0006.jpg";
import disImg05 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0007.jpg";
import disImg06 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0008.jpg";
import disImg07 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0009.jpg";
import disImg08 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0010.jpg";
import disImg09 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0011.jpg";
import disImg10 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0012.jpg";
import disImg11 from "/graphic-dis-images/Joice_Ceron_Portfolio_page-0013.jpg";

export default function PortfolioPage() {
  const industry = [
    "Buget Bloom",
    "Mauricio",
    "Nova Neko",
    "DHM Painting",
    "More Projects",
  ];

  const webImageMap = {
    budgetBloom: budgetBloomImg,
  };

  const gameImageMap = {
    game00,
    game01,
    game02,
    game03,
    game04,
    game05,
    webApiHackatonImg,
  };

  const drawingsMap = {
    image00: draw00,
    image01: draw01,
    image02: draw02,
    image03: draw03,
    image04: draw04,
    image05: draw05,
  };

  const disImagMap = [
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
  ];

  const [portfolioDoc, setPortfolioDoc] = useState("Buget Bloom");
  const [isFading, setIsFading] = useState(false);

  function renderPortfolioCover() {
    switch (portfolioDoc) {
      case industry[0]:
        return (
          <div className="portfolio__cover portfolio__cover--00">
            <img
              src={cover00Img}
              alt={`Budget Bloom logo`}
              className={`portfolio__cover--image ${
                isFading ? "fade-out" : "fade-in"
              }`}
            />
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
              alt={`Nova Neko Splash Screen`}
              className={`portfolio__cover--image ${
                isFading ? "fade-out" : "fade-in"
              }`}
            />
          </div>
        );

      case industry[3]:
        return (
          <div className="portfolio__cover portfolio__cover--03">
            <img
              src={cover03Img}
              alt={`DMH logo`}
              className={`portfolio__cover--image ${
                isFading ? "fade-out" : "fade-in"
              }`}
            />
          </div>
        );

      case industry[4]:
        return <Header />;

      default:
        return <Header />;
    }
  }

  function renderPortfolioContent() {
    switch (portfolioDoc) {
      case industry[0]:
        return <ProjectCaseItem00 />;

      case industry[1]:
        return <ProjectCaseItem01 />;

      case industry[2]:
        return <ProjectCaseItem02 />;
      case industry[3]:
        return <ProjectCaseItem03 />;

      case industry[4]:
        return gameProjects.map((project) => (
          <ProjectItem
            project={project}
            image={gameImageMap[project.key]}
            key={project.key}
          />
        ));

      default:
        return gameProjects.map((project) => (
          <ProjectItem
            project={project}
            image={gameImageMap[project.key]}
            key={project.key}
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
            <li>
              <button
                className={`button portfolio__nav--button ${
                  portfolioDoc == industry[4] ? "active" : ""
                }`}
                onClick={() => {
                  if (portfolioDoc !== industry[4]) {
                    setIsFading(true);
                    setTimeout(() => {
                      setPortfolioDoc(industry[4]);
                      setIsFading(false);
                    }, 600);
                  }
                }}
              >
                {industry[4]}
              </button>
            </li>
          </ul>
        </div>

        <div className="section">{renderPortfolioContent()}</div>
      </section>
    </>
  );
}
