import "./App.css";
import React, { useContext } from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/layout/hero/Hero";
import {
  ColorThemeContextProvider,
  ColorThemeContext,
} from "./context/ColorTheme.context";
import Skills from "./components/layout/skills/Skills";
import Projects from "./components/layout/projects/Projects";
import About from "./components/layout/about/About";
import Contact from "./components/layout/contact/Contact";
import Footer from "./components/layout/footer/Footer";

function App() {
  const { colorTheme } = useContext(ColorThemeContext);

  console.log(colorTheme);

  return (
    <div className="App">
      <div
        className={`${
          colorTheme === "light" ? "app-container-light" : "app-container-dark"
        }`}
      >
        <Header />
        <Hero />
        <Skills />
        <About />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
