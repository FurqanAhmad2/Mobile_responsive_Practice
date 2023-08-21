import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../../assets/light-bulb.png";
import pizza from "../../assets/pizza.png";
import pasta from "../../assets/spaguetti.png";
import dessert from "../../assets/dessert.png";
import drink from "../../assets/soft-drink.png";
import beer from "../../assets/glass.png";
import menu from "../../assets/menu.png";
import cupCake from "../../assets/cupcake.png";
import salad from "../../assets/salad.png";

import "./mainSelection.css";

const animationDuration = 0.5;
const animationDelay = 0.2;
const easing = [0.4, 0, 0.2, 1];
const staggerDuration = 0.1; // Delay between staggered animations

function MainSelection() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  const handlePasta = () => {
    navigate(`/EnglishPasta`);
  };

  const handlePizza = () => {
    navigate(`/VegSel`);
  };

  const handleDrinks = () => {
    navigate(`/DrinkSel`);

  };

  const handleSalad = () => {
    navigate(`/EnglishSalad`);

  };

  const handleDesserts = () => {
    navigate(`/EnglishDesserts`);

  };

  const handleDeals = () => {
    navigate(`/EnglishDealsMenu`);

  };

  const menuItems = [
    { label: "Pizza", icon: pizza, onClick: handlePizza },
    { label: "Pasta", icon: pasta, onClick: handlePasta },
    { label: "Deals", icon: menu, onClick: handleDeals },
    { label: "Dessert", icon: cupCake, onClick: handleDesserts },
    { label: "Salad", icon: salad, onClick: handleSalad },
    { label: "Drinks", icon: drink, onClick: handleDrinks },
    // Add other menu items here
  ];

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="main">
      <Navbar />

      <h2 className="animated-text" style={{ paddingLeft: "3%", color: 'black', fontWeight: 'bolder' }}>
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
          style={{ marginTop: "1%", color: 'black', fontWeight: 'bolder' }}
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: animationDuration,
            delay: animationDelay,
            ease: easing,
          }}
        >
          Welcome to Restaurant MENU. Please Choose Your Desired Category
        </motion.div>
      </div>

      <div className="Menu-button-selection">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="menu-selection-button"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
            transition={{
              duration: animationDuration,
              delay: animationDelay + index * staggerDuration,
              ease: easing,
            }}
          >
            <motion.img
              src={item.icon}
              alt="Logo"
              style={{ width: "20%", margin: "2%" }}
              className="logo"
              initial={{ opacity: 0 }}
              animate={animationComplete ? { opacity: 1 } : {}}
              transition={{
                duration: animationDuration,
                delay: animationDelay,
                ease: easing,
              }}
            />

            <motion.button
              className="button-50"
              role="button"
              onClick={item.onClick}
              style={{ marginTop: "2%" }}
            >
              {item.label}
            </motion.button>
          </motion.div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default MainSelection;
