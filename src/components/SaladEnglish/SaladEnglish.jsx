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
            <h1 className="price-Card" style={{ fontSize: '28px' }}>{price}</h1>
          </div>
        </div>
  
        <p1 style={{  margin: '5%', marginBottom: '5%', fontSize: '18px' }}>{description}</p1>
      </div>
    </Card>
  </motion.div>
  );
}

function SaladEnglish () {
  return (
    <div className="main">
      <Navbar />

      <h1
        style={{ color: 'black', justifyContent: 'center', 
        display: 'flex', fontWeight: 'bolder', 
        margin: '2%', marginBottom: '10%' }}
        
      >Salad</h1>

      <div className="card-container">
      <AnimatedCard
          title="Rucola"
          ingredients="Rucola, Cherrytomaten, Paprika, Oliven."
          description="Our Rucola Salad showcases the vibrant flavors of peppery rucola, juicy cherry tomatoes, crunchy bell peppers, and briny olives. A medley of tastes that dances on your palate."
          price="8,90€"   

       />

        <AnimatedCard
          title="Gemischter Salat"
          ingredients="Eisbergsalat, Cherrytomaten, Gurke, Mais, Zwiebeln."
          description="The Gemischter Salat is a symphony of textures and tastes, combining crisp iceberg lettuce, bursting cherry tomatoes, refreshing cucumber, sweet corn, and zingy onions for a harmonious delight."
          price="8,50€"   

        />

        <AnimatedCard
          title="Gemischter Salat mit Mozzarellabällchen"
          ingredients="Eisbergsalat, Cherrytomaten, Gurke, Mais, Zwiebeln, Mozzarellabällchen."
          description="Elevate your experience with our Gemischter Salat featuring the velvety touch of mozzarella balls. Crisp iceberg lettuce, succulent cherry tomatoes, refreshing cucumber, sweet corn, and lively onions unite with the rich creaminess of mozzarella."
          price="8,90€"   

       />

        <AnimatedCard
          title="Gemischter Salat mit Tonno"
          ingredients="Eisbergsalat, Cherrytomaten, Gurke, Mais, Zwiebeln,."
          description="Dive into a world of flavors with our Gemischter Salat mit Tonno. Crisp iceberg lettuce, succulent cherry tomatoes, refreshing cucumber, sweet corn, and zingy onions harmonize with the rich taste of tender tuna."
          price="8,90€"   

        />

        <AnimatedCard
          title="Insalata Rocca"
          ingredients="Gemischter Salat mit Hähnchenbrust & Ei."
          description="Indulge in the heartiness of Insalata Rocca, where mixed greens cradle succulent grilled chicken breast and a meticulously boiled egg. A robust yet balanced combination for a satiating meal."
          price="9,50€"   

        />

        <AnimatedCard
          title="Insalata Tonno"
          ingredients="Gemischter Salat mit  Ei, Thunfisch & Rote Zwiebeln."
          description="Experience the dynamic blend of textures and flavors in our Insalata Tonno. Mixed greens form a canvas for flaky tuna, a meticulously boiled egg, and the lively bite of tangy red onions."
          price="9,50€"   

       />

        <AnimatedCard
          title="Mozzarella e Pomodoro"
          ingredients="Gemischter Salat mit Tomaten, Büffelmozzarella & Basilikum."
          description="Embark on a culinary journey with Mozzarella e Pomodoro. Mixed greens provide the backdrop for ripe tomatoes, indulgent buffalo mozzarella, and fragrant basil, creating a harmonious symphony of taste."
          price="8,90€"   

          />

        <AnimatedCard
          title="Insalata Pastore"
          ingredients="Gemischter Salat mit Schafskäse."
          description="Discover the essence of simplicity in Insalata Pastore. Mixed greens mingle with crumbled feta cheese, offering a pure and satisfying interplay of flavors and textures."
        
          price="8,90€"   
          />

        <AnimatedCard
          title="Insalata Lachs & Scampi"
          ingredients="Gemischter Salat mit Lachs, Scampi, Rote Zwiebeln."
          description="Unveil the treasures of the sea with Insalata Lachs & Scampi. Mixed greens set the stage for succulent salmon, tender scampi, and the vibrant kick of zesty red onions."
          price="10,90€"   

          />
        



      </div>
    </div>
  );
}

export default SaladEnglish;
