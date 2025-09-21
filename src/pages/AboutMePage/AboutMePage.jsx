import { useEffect, useRef, useState } from "react";
import "./AboutMePage.scss";
import ExperienceItem from "../../components/ExperienceItem/ExperienceItem";
import experiencesList from "../../data/experiences-list.json";
import star from "../../assets/icons/star.svg";
import coverImg from "/cover-images/cover_bg.jpeg";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

export default function AboutMePage() {
  const [isOpenImg, setIsOpenImg] = useState(false);
  const metaDataImg = {
    tittle: "Cover Image",
    technique: "Digital Photography",
  };

  return (
    <section className="about">
      {isOpenImg ? <PhotoItem metaData={metaDataImg} image={coverImg} setIsOpenImg={setIsOpenImg} /> : null}

      <div className="about__profile">
        <p className="about__profile--title emphasis">Hi! I'm Joice Ceron </p>
        <p className="about__profile--detail">
          I am a detail-oriented, UI/UX Designer & Software Development. My
          passion for art and visual experiences fuels my belief in the power of
          graphic design as a communication tool. However, I recognize the need
          to go beyond static visuals. To address this, I have been mastering
          web development tools, combining them with my proficiency in the Adobe
          Suite, enabling me to create scalable, visually engaging, and
          functional applications.
        </p>
      </div>

      <div
        onClick={() => {
          setIsOpenImg(true);
        }}
        id="colorlib-counter"
        className="colorlib-counters about__button"
      >
        <br />
      </div>

      <h2 className="about__experience--title"> Work experience</h2>

      <div className="about__experience">
        {experiencesList.map((experience, index) => (
          <ExperienceItem type={"Work"} experience={experience} key={index} />
        ))}
        <img className="about__dot" src={star} alt="" />
      </div>

      <h2 className="about__experience--title"> Education & Certifications</h2>
      <div className="about__experience">
        {experiencesList.map((experience, index) => (
          <ExperienceItem
            type={"Education"}
            experience={experience}
            key={index}
          />
        ))}
        <img className="about__dot" src={star} alt="" />
      </div>
    </section>
  );
}
