import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const FunFact = ({ funfact, targetValue, icon }) => {
  const funFactRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) {
      const scrollHandlar = () => {
        if (window.scrollY > funFactRef.current.offsetTop) {
          setDone(true);
          setStartCount(true);
        }
      };
      window.addEventListener("scroll", scrollHandlar);
      return () => {
        window.removeEventListener("scroll", scrollHandlar);
      };
    }
  });

  return (
    <div className="fun-fact col-md-3 col-6" ref={funFactRef}>
      <div>
        <i className={icon}></i>
        <h3 className="mt-2">
          {startCount ? (
            <CountUp start={0} end={targetValue} duration={2} delay={0} />
          ) : (
            "0"
          )}
          +
        </h3>
        <p className="mb-2">{funfact}</p>
      </div>
    </div>
  );
};

export default FunFact;
