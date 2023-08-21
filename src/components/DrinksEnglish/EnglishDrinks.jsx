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

function AnimatedCard({ image, title, description, ingredients,price }) {
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
  
          
        </div>
        
  
        <p1 style={{  margin: '5%', marginBottom: '5%', fontSize: '22px' }}>Price {price}</p1>
      </div>
    </Card>
  </motion.div>
  );
}

function EnglishDrinks() {
  return (
    <div className="main">
      <Navbar />

      <h1
        style={{ color: 'black', justifyContent: 'center', 
        display: 'flex', fontWeight: 'bolder', 
        margin: '2%', marginBottom: '7%' }}
        
      >Drinks</h1>
      <div className="card-container">
        <AnimatedCard
          title=" Cola, Fanta, Sprite, Cola Light "
          price="3,00€"   

        />
        <AnimatedCard
          title="Fritz Cola Drink"
          price="2,50€"   
           />
        <AnimatedCard
          title="Fritz Cola Zuckerfrei Drink" 
          price="2,50€"   
          />
        <AnimatedCard
          title="Milsch Maschm " 
          price="2,50€"   
          />

        <AnimatedCard
          title="Fritz Limo Zitrone / Melone" 
          price="2,50€"   
          />
        <AnimatedCard
          title="Fritz Apfelschorle" 
          price="2,50€"   
          />
        <AnimatedCard
          title="Fritz Limo Apfelkirsch-Holunder" 
          price="2,50€"   
          />

        <AnimatedCard
          title="Nestea Zitrone / Pfirsich" 
          price="2,50€"   
          />

        <AnimatedCard
          title="Augustiner Drink" 
          price="2,50€"   
          />
        <AnimatedCard
          title="Budweiser Drink" 
          price="2,50€"   
          />






      </div>
    </div>
  );
}

export default EnglishDrinks;
