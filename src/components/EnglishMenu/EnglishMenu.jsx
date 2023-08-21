import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import b1 from "../../assets/b1.png";
import b3 from "../../assets/b4.png";
import b4 from "../../assets/b4.png";
import b6 from "../../assets/b6.png";

import "./eng.css";

const variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
};

function AnimatedCard({ image, title, description }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <Card className="menu-card" style={{ background: "transparent", color: 'white' }}>
        <div className="mainCard">
          <div className="inner-Card">

            <Card.Body>
              <Card.Title style={{marginTop: '20%'}}>{title}</Card.Title>
            </Card.Body>

            <h1 className="price-Card">$15</h1>
          </div>

          <p1 style={{marginLeft: '5%', marginBottom:'5%'}}>{description}</p1>
        </div>
      </Card>
    </motion.div>
  );
}

function EnglishMenu() {
  return (
    <div className="main">
      <Navbar />
      <div className="card-container">
        <AnimatedCard

          title="Beefy Tender"
          description="A mouthwatering symphony of perfectly seasoned, flame-grilled beef patty, served on a fresh, toasted bun, accompanied by a tantalizing array of gourmet toppings that will leave your taste buds craving more."
        />
        <AnimatedCard

          title="Beefy Tender"
          description="A mouthwatering symphony of perfectly seasoned, flame-grilled beef patty, served on a fresh, toasted bun, accompanied by a tantalizing array of gourmet toppings that will leave your taste buds craving more."
        />
        <AnimatedCard
          title="Beefy Tender"
          description="A mouthwatering symphony of perfectly seasoned, flame-grilled beef patty, served on a fresh, toasted bun, accompanied by a tantalizing array of gourmet toppings that will leave your taste buds craving more."
        />

        
      </div>
    </div>
  );
}

export default EnglishMenu;
