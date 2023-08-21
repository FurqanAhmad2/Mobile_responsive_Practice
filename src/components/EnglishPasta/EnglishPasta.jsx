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

function PastaEnglish() {
    return (
      <div className="main">
        <Navbar />

        <h1
        style={{ color: 'black', justifyContent: 'center', 
        display: 'flex', fontWeight: 'bolder', 
        margin: '2%', marginBottom: '10%' }}
        
      >Pasta</h1>
        <div className="card-container">
          {/* Previous pasta options */}
          
          <AnimatedCard
            title="Überbacken Pasta Munzuro"
            description="Delight in the Überbacken Pasta Munzuro, a fusion of mozzarella, tomato sauce, spinach, chicken, Parmesan cheese, champignons, and creamy sauce."
            price="11,90€"   
          />
  
          <AnimatedCard
            title="Überbacken Pasta Scampi"
            description="Indulge in the Überbacken Pasta Scampi, featuring Scampi, Parmesan cheese, mozzarella, cherry tomatoes, garlic, parsley, white wine, peperoncino, creamy sauce, and lobster paste."
            price="12,90€"   

          />
  
          <AnimatedCard
            title="Überbacken Pasta Lachs"
            description="Experience the richness of Überbacken Pasta Lachs, combining Lachs, parmarosa, cheese, cherry tomatoes, garlic, parsley, white wine, peperoncino, creamy sauce, lobster paste, mozzarella, and tomato sauce."
            price="12,90€"   
          
          />
  
          <AnimatedCard
            title="Überbacken Pasta Broccoli"
            description="Savor the creaminess of Überbacken Pasta Broccoli, made with creamy sauce, broccoli, chicken, Parmesan cheese, mozzarella, tomato sauce, onions, spinach, and champignons."
            price="11,90€"   

          />
  
         
          
          <AnimatedCard
            title="Überbacken Pasta Bolognese"
            description="A hearty dish featuring rich tomato sauce, tender ground beef, onions, carrots, hard cheese, and melted mozzarella."
            price="11,90€"   
          
          />
  
          <AnimatedCard
            title="Überbacken Napoli Pasta"
            description="Indulge in this Napoli-style pasta with tomato sauce, onions, carrots, melted mozzarella, and Parmesan cheese."
            price="11,90€"   
          
          />
  
          <AnimatedCard
            title="Überbacken Gorgonzola Pasta"
            description="Creamy goodness awaits with this Gorgonzola-infused pasta, accompanied by mozzarella and Parmesan cheese."
            price="11,90€"   
         
         />
  
          <AnimatedCard
            title="Überbacken Polo Pasta"
            description="Savor the combination of tomato sauce, succulent chicken, Parmesan cheese, spinach, and melted mozzarella."
            price="12,90€"   
        
        />
  
          <AnimatedCard
            title="Überbacken Arabiata Pasta "
            description="A spicy delight featuring tomato sauce, Peperoncino, Parmesan cheese, and melted mozzarella."
            price="11,90€"   
          
          />
        </div>
      </div>
    );
  }
  
  export default PastaEnglish;
  