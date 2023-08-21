import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



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

function AnimatedCard({ image, title, description ,price}) {
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
            <h1 className="price-Card" style={{ fontSize: '28px' }}>{price}</h1>
          </div>
        </div>
  
        <p1 style={{  margin: '5%', marginBottom: '5%', fontSize: '18px' }}>{description}</p1>
      </div>
    </Card>
  </motion.div>
  
  
  );
}

function PizzaEnglishVeg() {
    return (
        <div className="main">
            <Navbar />

            <h1
        style={{ color: 'black', justifyContent: 'center', 
        display: 'flex', fontWeight: 'bolder', 
        margin: '2%', marginBottom: '10%' }}
        
      >Veg Pizza</h1>



            <div className="card-container">
                <AnimatedCard
                    title="Margherita Pizza"
                    description="Our vegan Margherita delights with dairy-free mozzarella, fresh basil, and olive oil—a compassionate twist on the classic."
                    price="8,90€"                   
                />

                <AnimatedCard
                    title="Funghi Pizza"
                    description="Earthy Funghi pizza boasts champignon mushrooms and oregano—a mushroom lover's dream."
                    price="9,90€"   
                />

                <AnimatedCard
                    title="Rucola Pizza"
                    description="Refreshing Rucola pizza combines arugula and cherry tomatoes for a zesty experience."
                    price="10,50€"   
                />

                <AnimatedCard
                    title="Gemüse Pizza"
                    description="Gemüse bursts with freshness—mushrooms, peppers, zucchini, onions, and more, celebrating nature's bounty."
                    price="11,50€"   
               />

                <AnimatedCard
                    title="Salami Pizza"
                    description="Savor vegan Salami pizza, delivering bold flavors and satisfying textures."
                />

                <AnimatedCard
                    title="Pizza Vegane Mista"
                    description="Vegane Mista blends vegan salami, mushrooms, peperoni, and cherry tomatoes—a harmony of tastes."
                    price="11,50€"   
                />

                <AnimatedCard
                    title="Pizza Vegane Spinat"
                    description="Vegane Spinat offers nutrient-packed spinach, bell peppers, cherry tomatoes, and olives—a wholesome delight."
                    price="11,50€"   
                />
            </div>
        </div>
    );
}

export default PizzaEnglishVeg;
