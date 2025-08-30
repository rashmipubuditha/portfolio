import React from "react";
import { mySocialLinks } from "../data";

const SocialLink = () => {
  return (
    <>
      {mySocialLinks.map((obj, idx) => (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a key={idx} href={obj.link} target="_blank">
          <i className={obj.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLink;
