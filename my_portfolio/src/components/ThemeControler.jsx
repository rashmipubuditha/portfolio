import React, { useState } from "react";
import ColorButton from "./ColorButton";
import { colors, defaultColor } from "../data";

const ThemeControler = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(defaultColor);
  return (
    <>
      <div className={`theme-colors ${open ? "open" : ""}`}>
        {/* <div
          className="theme-colors-btn"
          onClick={() => setOpen((open) => !open)}
        >
          <i className="fa-solid fa-palette"></i>
        </div>
        <div className="color-buttons">
          {colors.map((obj, idx) => (
            <ColorButton
              key={idx}
              id={idx + 1}
              color={obj.color}
              active={activeColor}
              setActive={setActiveColor}
            />
          ))}
        </div> */}
      </div>

      <div className="theme-mode-btn" onClick={() => setMode((mode) => !mode)}>
        {mode ? (
          <i id="dark" className="fa-solid fa-moon"></i>
        ) : (
          <i id="light" className="lnr lnr-sun fw-bolder"></i>
        )}
      </div>
    </>
  );
};

export default ThemeControler;
