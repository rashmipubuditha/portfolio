import React, { useEffect, useRef, useState } from "react";

const Skill = ({ targetValue, skill }) => {
  const skillRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isDone) {
      const increment = () => {
        if (window.scrollY > skillRef.current.offsetTop) {
          setCounter((prevCounter) => {
            const newCounter = prevCounter + 1;

            if (newCounter === targetValue) {
              setIsDone(true);
              clearInterval(intervalId);
            }

            return newCounter;
          });
        }
      };

      const intervalId = setInterval(increment, 15);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="skill col-3 col-md-1 mt-4 mx-3" ref={skillRef}>
      {/* <p align="center">
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=python,flask,react,mysql,mongodb,js,fastapi,html,css,aws,docker,git,github,githubactions,gitlab,kubernetes,docker,linux,java,c,arduino" />
        </a>
      </p> */}
      <div
        className="circular-progress"
        style={{
          background: `conic-gradient(var(--main-color) ${
            counter * 3.6
          }deg, var(--section-color-2) 0deg)`,
        }}
      >
        <div className="inner-circle"></div>
        <p className="info m-0 text-center">
          {/* <span className="percentage">{counter}%</span> */}
          <span className="title">{skill}</span>
        </p>
      </div>
    </div>
  );
};

export default Skill;
