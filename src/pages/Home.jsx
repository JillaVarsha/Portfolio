import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '2rem', textAlign: 'center' }}
    >
      <h1>Hi, I'm Varsha 👋</h1>
      <p>CSBS student passionate about tech, coding & creativity!</p>
    </motion.div>
  );
};

export default Home;
