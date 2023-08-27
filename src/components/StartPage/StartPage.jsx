import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import "./startPage.css"
import logo from '../../assets/rooca.jpeg';

const StartPage = () => {
  const navigate = useNavigate();
  const [animationFinished, setAnimationFinished] = useState(false);

  // Use Framer Motion controls for animation
  const controls = useAnimation();

  useEffect(() => {
    // Simulate animation completion after a delay (adjust as needed)
    const animationTimeout = setTimeout(async () => {
      // Start the creative animation sequence
      await controls.start({
        scale: [0, 1.2, 1], // Bouncing pop effect
        opacity: [0, 1, 1], // Fading in
        rotate: [0, 0], // Full rotation
        transition: { duration: 1.5, ease: 'easeInOut' },
      });
      
      setAnimationFinished(true);
    }, 500);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    if (animationFinished) {
      // Redirect to the home page after animation is finished with a 2-second delay
      const navigationTimeout = setTimeout(() => {
        navigate('/Home');
      }, 2000);

      return () => {
        clearTimeout(navigationTimeout);
      };
    }
  }, [animationFinished]);

  return (
    <div className='page'>
      <div className="animated-image-container">
        <motion.img
          src={logo}
          width={300}
          height={100}
          style={{margin :'10%', marginTop:"50%"}}
          alt="Animated Image"
          className={`animated-image ${animationFinished ? 'animation-finished' : ''}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={controls} // Use Framer Motion controls for animation
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-container"
          style={{
            textAlign: 'center', // Center the text horizontally
            marginTop: '1rem', // Add a bit of margin at the top
            fontWeight: 'bold', // Make the text bold
            fontSize: '1.5rem', // Increase the font size
            color: 'black', // Set text color to white
            textShadow: '0 0 5px rgba(255, 255, 255, 0.7)', // White text shadow
          }}
        >
          <h1 className="text-heading"
          style={{fontSize: '40px'}}>PIZZA PASTA</h1>
          <p className="text-subheading">(Willkommen im Rocco-Menü)</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StartPage;
