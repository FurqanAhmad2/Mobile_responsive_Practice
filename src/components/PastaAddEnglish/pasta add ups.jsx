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

function AnimatedCard({ image, title, description,ingredients }) {
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
  
        <p1 style={{  margin: '5%', marginBottom: '5%', fontSize: '18px' }}>{description}</p1>
      </div>
    </Card>
  </motion.div>
  );
}

function Pastaadups  () {
  return (
    <div className="main">
      <Navbar />
      <div className="card-container">
<AnimatedCard
 title="Spaghetti Bolognese"
 price="9,90€"   

/>
<AnimatedCard
  title="Hausgemachter Pesto Verde"
 price="9,90€"   

/>
<AnimatedCard
  title="Gorgonzola"
 price="9,90€"   

/>
<AnimatedCard
  title="Napoli"
 price="8,90€"   

/>
<AnimatedCard
  title="Arrabiata"
 price="8,90€"   


/>
<AnimatedCard
  title="Vegetale (vegetarisch)"
 price="9,90€"   

/>
<AnimatedCard
  title="Amatriciana"
 price="9,90€"   

/>
<AnimatedCard
  title="Carbonara"
 price="9,90€"   

/>
<AnimatedCard
  title="Spinat & Hahnschenbrustfilet"
 price="9,90€"   

/>
<AnimatedCard
  title="Munzuro"
 price="9,90€"   

/>
<AnimatedCard
  title="Scampi"
 price="10,90€"   

/>
<AnimatedCard
  title="Lachs"
 price="10,90€"   

/>


        



      </div>
    </div>
  );
}

export default Salad;
