import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Navbar.css";
import Navbar from "./components/Navbar";
import Sechero from "./components/Sechero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Content from "./components/Contect";
import Footer from "./components/Footer";
import Certification from "./components/Certification";

function App() {
  // State to manage the theme
  const mode= localStorage.getItem("mode") || "light";
  const [darkMode, setDarkMode] = useState(mode);

  // Function to toggle the theme
  function changeTheme() {
    setDarkMode((prev) => {
      const mode = prev === "light" ? "dark" : "light";
      localStorage.setItem("mode", mode); 
      return mode;
    });
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode);
  }, [darkMode]);

  return (
    <div className="portfolio">
      <Navbar darkMode={darkMode} changeTheme={changeTheme} />
      <main>
        <Sechero />
        <About />
        <Skills />
        <Project />
        <Certification />   
        <Content />
      </main>
      <Footer />
    </div>
  );
}

export default App;