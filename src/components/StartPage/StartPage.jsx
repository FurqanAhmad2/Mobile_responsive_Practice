import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/some_01.png';

const StartPage = () => {
  const navigate = useNavigate();
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    // Simulate animation completion after a delay (adjust as needed)
    const animationTimeout = setTimeout(() => {
      setAnimationFinished(true);
    }, 3000);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    if (animationFinished) {
      // Redirect to the home page after animation is finished
      navigate('/Home');
    }
  }, [animationFinished]);

  return (
    <div className="animated-image-container main">
      <motion.img
        src={logo}
        width={300}
        height={300}
        style={{margin :'10%'}}
        alt="Animated Image"
        className={`animated-image ${animationFinished ? 'animation-finished' : ''}`}
        initial={{ y: -100, opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ y: '50%', opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />
    </div>
  );
};

export default StartPage;
