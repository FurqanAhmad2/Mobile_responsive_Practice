import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import b1 from "../../assets/b1.png";
import b3 from "../../assets/b4.png";
import b4 from "../../assets/b4.png";
import b6 from "../../assets/b6.png";


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

function AnimatedCard({ image, title, description,ingredients,price }) {
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
        <div className="inner-Card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  
          <div style={{ flex: 1 }}>
            <h2 style={{marginTop: '5%', fontSize: '24px', fontWeight: 'bold' }}>{title}</h2>
          </div>
  
          <div style={{ flex: 1, textAlign: 'right' }}>
            <h1 className="price-Card" style={{ fontSize: '28px' }}>$15</h1>
          </div>
        </div>
  
        <p1 style={{  margin: '5%', marginBottom: '5%', fontSize: '18px'}}>{description}</p1>
      </div>
    </Card>
  </motion.div>
  );
}

function EnglishDealsMenu  () {
  return (
    <div className="main">
      <Navbar />

      <h1
        style={{ color: 'black', justifyContent: 'center', 
        display: 'flex', fontWeight: 'bolder', 
        margin: '2%', marginBottom: '7%' }}
        
      >MENU</h1>
      <div className="card-container">
      <AnimatedCard
          title="Menü 1 - Chicken Wings"
          price="10,90€"
          description="6 Stk. Chicken Wings Portion Pommes\nach Wahl Getränke (0,33 Cola, Fanta, Sprite, Cola light)"
        />
        <AnimatedCard
          title="Menü 2 - Chicken Nuggets"
          price="10,90€"
          description="6 Stk. Chicken Nuggets Portion Pommes nach Wahl Getränke (0,33 Cola, Fanta, Sprite, Cola light)"
        />
        <AnimatedCard
          title="Menü 3 - Chicken Finger"
          price="10,90€"
          description="6 Stk. Chicken Finger, Portion Pommes nach Wahl Getränke (0,33 Cola, Fanta, Sprite, Cola light)"
        />
        <AnimatedCard
          title="Menü 4 - Mozzarella Sticks"
          price="10,90€"
          description="6 Stk. Mozzarella Sticks Portion Pommes nach Wahl Getränke (0,33 Cola, Fanta, Sprite, Cola light)"
        />
        <AnimatedCard
          title="Menü 5 - Chili Cheese Nuggets"
          price="10,90€"
          description="6 Stk. Chili Cheese Nuggets Portion Pommes nach Wahl Getränke (0,33 Cola, Fanta, Sprite, Cola light)"
        />
        <AnimatedCard
          title="Menü 6 - Cheese Poppers"
          price="10,90€"
          description="6 Stk. Cheese Poppers Portion Pommes nach Wahl Getränke (0,33 Cola, Fanta, Sprite, Cola light)"
        />
        <AnimatedCard
          title="Menü 7 - Chicken Wings"
          price="13,90€"
          description="6 Stück Chicken Wings Pommes, Salat Nachwahl, Getränke nach Wahl (0,33 Cola Fanta Sprite Cola light)"
        />
        <AnimatedCard
          title="Menü 8 - Chicken Finger"
          price="13,90€"
          description="6 Stück Chicken Finger Pommes, Salat nach Wahl Getränke nach Wahl (0,33 Cola Fanta Sprite Cola light)"
        />
        <AnimatedCard
          title="Menü 9 - Mozzarella Sticks"
          price="13,90€"
          description="6 Stück Mozzarella sticks Pommes, Salat nach Wahl Getränke nach Wahl (0,33 Cola Fanta Sprite Cola light)"
        />
        <AnimatedCard
          title="Menü 10 - Chili Cheese Poppers"
          price="13,90€"
          description="6 Stück Chili Cheese Poppers Pommes, Salat nach Wahl Getränke nach Wahl (0,33 Cola Fanta Sprite Cola light)"
        />
        <AnimatedCard
          title="Menü 11 - Chili Cheese Nuggets"
          price="13,90€"
          description="6 Stück Chili Cheese Nuggets Pommes. Salat nach Wahl Getränke nach Wahl (0,33 Cola Fanta Sprite Cola light)"
        />
        <AnimatedCard
          title="Menü 12 - Rocca Menü"
          price="24,90€"
          description="3Stk. chicken wings Stk. stück Nuggets Stk. Chicken Fingers 3stk Mozzarella sticks Pommes, Salat & Getränke nach Wahl- (0,33 Cola Fanta Sprite Cola light)"
        />
        <AnimatedCard
          title="Menü 13 - Kinder Menü"
          price="9,90€"
          description="6 Stück chicken Nuggets kleine Portion Pommes, Capri Sonne"
        />

   
        



      </div>
    </div>
  );
}

export default EnglishDealsMenu;
