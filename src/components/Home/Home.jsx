import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./home.css";
import "./fonts.css"
import Footer from "../Footer/Footer";
import logo from "../../assets/light-bulb.png";

function Home() {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set animationComplete to true after a short delay to trigger the animation
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 300);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(animationTimer);
  }, []);

  function handleEng() {
    navigate(`/SelectionMenu`);
  }

  function HandleItal() {
    navigate(`/ItalianMenu`);
  }

  function HandleFren() {
    navigate(`/FrenchMenu`);
  }

  function HandlePol() {
    navigate(`/PolishMenu`);
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="main"
      >
        <Navbar />

        <h2 className="animated-text" style={{ paddingLeft: "3%", color: "black", fontWeight: "bolder",margin:'4%' }}>
        Willkommen im ROCCA-MENÜ
        </h2>
        <div className="animation-container">
          <img src={logo} alt="Logo" className={`logo ${animationComplete ? 'logo-animation' : ''}`} />
          <div className="animated-text" style={{ marginTop: "1%", color: "black", fontWeight: "bolder" }}>
          Willkommen im ROCCA-Menü. Bitte wählen Sie Ihre gewünschte Sprache aus
          </div>
        </div>

        <div className="Menu-button">
          <button className="button-50" role="button" onClick={handleEng}>
            Englisch
          </button>
          <button className="button-50 btn-sign-in" role="button" onClick={HandleItal} style={{ marginTop: "2%" }}>
            Italienisch
          </button>
          <button className="button-50 btn-video" role="button" onClick={HandleFren} style={{ marginTop: "2%" }}>
            Französisch
          </button>
          <button className="button-50 btn-video" role="button" onClick={HandlePol} style={{ marginTop: "2%" }}>
            Deutsch
          </button>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}

export default Home;
