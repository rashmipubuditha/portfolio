import { aboutInfo, aboutMe, funFacts, skills } from "../data";
import Skill from "../components/Skill";
import FunFact from "../components/FunFact";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="row about-row">
          <SectionTitle title="About Me" des="Know more about me" />

          <div className="about-img mb-3">
            <img
              src={aboutMe.about_image}
              className="about-img"
              alt="person"
              loading="lazy"
            />
          </div>

          <div className="about-me col-md-6">
            <h3 className="mb-3">
              I'm <b>{aboutMe.name}</b>, {aboutMe.job}
            </h3>
            {aboutMe.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="about-info col-md-4 ms-md-5">
            {aboutInfo.map((obj, idx) => (
              <li key={idx}>
                <i className={obj.icon}></i>
                <p>{obj.info}</p>
              </li>
            ))}
          </div>

          <div className="row fun-facts mt-3">
            {funFacts.map((obj, idx) => (
              <FunFact
                key={idx}
                targetValue={obj.targetValue}
                icon={obj.icon}
                funfact={obj.funFact}
              />
            ))}
          </div>

          <div className="row skills mt-5">
            {skills.map((obj, idx) => (
              <Skill key={idx} targetValue={obj.target} skill={obj.skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
