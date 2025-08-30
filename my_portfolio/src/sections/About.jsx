import { aboutInfo, aboutMe, funFacts, skills, skillsData } from "../data";
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

          {/* <div className="row skills mt-5 justify-content-center"> */}
          {/* {skills.map((obj, idx) => (
              <Skill key={idx} skill={obj.skill} />
            ))}
          </div> */}
          <div className="row skills mt-5">
            <div className="col-12">
              <h3
                className="mb-4 "
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#7b0447ff",
                }}
              >
                Technical Skills
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {skillsData
                      .slice(0, Math.ceil(skillsData.length / 2))
                      .map((obj, idx) => (
                        <li
                          key={idx}
                          className="mb-4"
                          style={{
                            background: "#888",
                            borderRadius: "8px",
                            padding: "1rem 1.5rem",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                              color: "#222",
                            }}
                          >
                            {obj.skill}
                          </span>
                          <br />
                          <span
                            style={{ color: "#1a1a1aff", fontSize: "0.98rem" }}
                          >
                            {obj.tools}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    {skillsData
                      .slice(Math.ceil(skillsData.length / 2))
                      .map((obj, idx) => (
                        <li
                          key={idx}
                          className="mb-4"
                          style={{
                            background: "#888",
                            borderRadius: "8px",
                            padding: "1rem 1.5rem",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.1rem",
                              color: "#222",
                            }}
                          >
                            {obj.skill}
                          </span>
                          <br />
                          <span
                            style={{ color: "#1a1a1aff", fontSize: "0.98rem" }}
                          >
                            {obj.tools}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div> */}
          {/* <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=python,flask,react,mysql,mongodb,js,fastapi,html,css,aws,docker,git,github,githubactions,gitlab,kubernetes,docker,linux,java,c,arduino" />
              </a>
            </p> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
