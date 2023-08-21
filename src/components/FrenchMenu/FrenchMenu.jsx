import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import b1 from "../../assets/b1.png";
import b3 from "../../assets/b4.png";
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
      <Card className="menu-card" style={{ background: "transparent", color: "white" }}>
        <div className="mainCard">
          <div className="inner-Card">
            <img
              src={image}
              alt={title}
              width={150}
              height={120}
              className="menu-image"
            />
            <h1 className="price-Card">$15</h1>
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p1>{description}</p1>
          </Card.Body>
        </div>
      </Card>
    </motion.div>
  );
}

function FrenchMenu() {
  return (
    <div className="main">
      <Navbar />
      <div className="card-container">
        <AnimatedCard
          image={b1}
          title="Délice de Bœuf"
          description="Une symphonie succulente de steak de bœuf parfaitement assaisonné, grillé à la flamme, servi sur un petit pain frais et grillé, accompagné d'une variété tentante de garnitures gastronomiques qui laisseront vos papilles en redemander."
        />
        <AnimatedCard
          image={b3}
          title="Délice de Bœuf"
          description="Une symphonie succulente de steak de bœuf parfaitement assaisonné, grillé à la flamme, servi sur un petit pain frais et grillé, accompagné d'une variété tentante de garnitures gastronomiques qui laisseront vos papilles en redemander."
        />
        <AnimatedCard
          image={b6}
          title="Délice de Bœuf"
          description="Une symphonie succulente de steak de bœuf parfaitement assaisonné, grillé à la flamme, servi sur un petit pain frais et grillé, accompagné d'une variété tentante de garnitures gastronomiques qui laisseront vos papilles en redemander."
        />
      </div>
    </div>
  );
}

export default FrenchMenu;
