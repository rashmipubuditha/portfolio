import React, { useEffect, useState } from "react";
import { addThemeControler, defaultMode } from "./data.js";
import "../src/css/css/box.css";
import "../src/css/css/menu-icon.css";
import "../src/css/css/global.css";
import "../src/css/css/main.css";
import "../src/css/css/circular_progress.css";

// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-svg-core";

// icons
import "linearicons/dist/web-font/style.css";

import Header from "./components/Header.jsx";

//sections
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
// import Services from "./sections/Services.jsx";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio.jsx";
// import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact.jsx";
import Loader from "./components/Loader.jsx";
import ThemeControler from "./components/ThemeControler.jsx";
import Footer from "./components/Footer.jsx";
import GoTopButton from "./components/GoTopButton.jsx";

const App = () => {
  const [isDark, setIsDark] = useState(defaultMode === "dark" ? true : false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <div className={`app ${isDark ? "dark" : ""}`}>
        <Header />
        {addThemeControler ? (
          <ThemeControler mode={isDark} setMode={setIsDark} />
        ) : null}
        <Home />
        <About />
        {/* <Services />*/}
        <Resume />
        <Portfolio />
        {/* <Testimonial /> */}
        <Contact />
        <GoTopButton />
        <Footer />
      </div>
    </>
  );
};

export default App;
