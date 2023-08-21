import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../assets/light-bulb.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DrinkSel() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  const navigate = useNavigate();

  const handleDrink = () => {
    navigate(`/EnglishDrinks`);
  };

  const handleBeer = () => {
    navigate(`/EnglishBeer`);
    
  };

  

  const animationDuration = 0.5; // Animation duration in seconds
  const animationDelay = 0.2; // Delay before animations start in seconds
  const easing = [0.4, 0, 0.2, 1]; // Cubic bezier easing

  return (
    <div className="main">
      <Navbar />

      <h2 className="animated-text" style={{ paddingLeft: "3%" ,color:'black',fontWeight: 'bolder'}}>
        Resturant MENU
      </h2>
      <div className="animation-container">
        <motion.img
          src={logo}
          alt="Logo"
          className="logo"
          initial={{ opacity: 0 }}
          animate={animationComplete ? { opacity: 1 } : {}}
          transition={{
            duration: animationDuration,
            delay: animationDelay,
            ease: easing,
          }}
        />
        <motion.div
          className="animated-text"
          style={{ marginTop: "1%" ,color:'black',fontWeight: 'bolder'}}
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: animationDuration,
            delay: animationDelay,
            ease: easing,
          }}
        >
          Welcome to Restaurant MENU. Please Choose Your Selection Here
        </motion.div>
      </div>

      <div className="Menu-button">
        <motion.button
          className="button-50"
          role="button"
          onClick={handleDrink}
          style={{ marginTop: "2%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: animationDuration,
            delay: animationDelay + 0.1, // Slightly delay this button
            ease: easing,
          }}
        >
          Drinks
        </motion.button>
        <motion.button
          className="button-50 btn-sign-in"
          role="button"
          onClick={handleBeer}
          style={{ marginTop: "10%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: animationDuration,
            delay: animationDelay + 0.2, // Slightly delay this button
            ease: easing,
          }}
        >
          Beers
        </motion.button>
      </div>
    </div>
  );
}

export default DrinkSel;
