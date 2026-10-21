import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/varsha.jpg'; // Adjust path if needed

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '600px' }}
        >
          <h1 style={{ fontSize: '3rem' }}>Hi, I'm Jilla Varsha!</h1>
          <h4 style={{ fontSize: '2rem', margin: '1rem 0', color: '#00f0ff' }}>
            Student. Developer. Dreamer.
          </h4>
          <p style={{ fontSize: '1.2rem' }}>
            A passionate Computer Science & Business student who loves building creative full-stack solutions and exploring the intersection of tech and entrepreneurship.
          </p>
        </motion.div>

        <motion.img
          src={profileImg}
          alt="Varsha Jilla"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '250px', // Increased size
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #00f0ff',
            boxShadow: '0 0 10px #00f0ff', // Softer glow
          }}
        />
      </div>
    </motion.section>
  );
};

export default Home;
