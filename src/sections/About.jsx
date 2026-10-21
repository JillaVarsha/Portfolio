import React, { useState } from 'react';
import { motion } from 'framer-motion';
import avatarGif from '../assets/avatar-walk.gif';
import { FiBook, FiFeather } from 'react-icons/fi';
import { CgPen } from 'react-icons/cg';
import { GiPingPongBat } from 'react-icons/gi';

const checkpoints = [
  {
    id: 0,
    label: 'IEEE',
    left: 60,
    club: 'IEEE TEMS Society',
    info: 'Learnt to write attention grabbing content, collaborated on tech projects.',
  },
  {
    id: 1,
    label: 'Enactus',
    left: 200,
    club: 'Enactus',
    info: 'Worked in teams to solve real-world challenges through creative thinking and entrepreneurship.',
  },
  {
    id: 2,
    label: 'INOVX',
    left: 340,
    club: 'INOVX',
    info: 'Played a key role as a Partenership Associate, connecting with people and fostering collaborations.',
  },
  {
    id: 3,
    label: 'Intellexa',
    left: 480,
    club: 'Intellexa',
    info: 'Played a key role as the Head of Public Relations, bridging the gap between the club and the student community.',
  },
  {
    id: 4,
    label: 'Film Club',
    left: 620,
    club: 'Film Club',
    info: "As the Head of Content Creation, I created engaging content for our social media platforms, showcasing the club's activities and events.",
  },
];

const About = () => {
  const [avatarX, setAvatarX] = useState(50);
  const [activeCard, setActiveCard] = useState(null);
  const [hasClickedOnce, setHasClickedOnce] = useState(false);

  const handleCheckpointClick = (point) => {
    setAvatarX(point.left);
    setActiveCard(point);
    setHasClickedOnce(true);
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        paddingTop: '100px',
        paddingBottom: '60px',
        minHeight: '100vh',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: 'transparent',
        color: 'white',
      }}
    >
      {/* Intro */}
      <h2 style={{ fontSize: '2.5rem', color: '#00f0ff' }}>About Me</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '1rem auto', color: 'white' }}>
        I'm a CSBS student passionate about blending code with creativity. Whether it's building full-stack apps, designing smart systems, or optimizing user journeys, I believe in tech that serves real people.
      </p>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '1rem auto 3rem', color: 'white' }}>
        When I’m not coding, I’m probably lost in a murder mystery, sketching whatever’s on my mind, or trying to turn emotions into poems.
      </p>

      {/* Club Journey */}
      <h3 style={{ fontSize: '1.8rem', color: '#00f0ff', marginTop: '6rem', marginBottom: '2rem' }}>
        My Club Journey
      </h3>
      <div
        className="timeline"
        style={{
          '--journey-progress': `${10 + Math.max(0, Math.min(1, (avatarX - 60) / 560)) * 80}%`,
          position: 'relative',
          height: '200px',
          borderTop: '4px dashed #00f0ff',
          width: '700px',
          maxWidth: '90vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '6rem',
          marginBottom: '5rem',
        }}
      >
        {!hasClickedOnce && (
          <div
            className="timeline-hint"
            style={{
              position: 'absolute',
              top: '-90px',
              left: `${avatarX - 30}px`,
              color: '#fff',
              backgroundColor: '#112240',
              padding: '6px 12px',
              borderRadius: '12px',
              fontSize: '0.9rem',
              boxShadow: '0 0 8px rgba(0, 240, 255, 0.2)',
            }}
          >
            Tap or click a dot to explore!
          </div>
        )}
        <img
          src={avatarGif}
          alt="Walking Avatar"
          className="timeline-avatar"
          style={{
            position: 'absolute',
            top: '-48px',
            left: `${avatarX}px`,
            width: '48px',
            transition: 'left 1s linear',
          }}
        />
        {checkpoints.map((point) => (
          <button
            key={point.id}
            type="button"
            onClick={() => handleCheckpointClick(point)}
            style={{
              position: 'absolute',
              top: '-10px',
              left: `${point.left}px`,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              backgroundColor: '#00f0ff',
              border: '2px solid white',
              cursor: 'pointer',
            }}
            className="timeline-checkpoint"
            aria-label={`Show details about ${point.club}`}
            title={point.label}
          >
            <span>{point.label}</span>
          </button>
        ))}
        {activeCard && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="timeline-card"
            style={{
              position: 'absolute',
              top: '40px',
              left: `${activeCard.left - 110}px`,
              backgroundColor: '#112240',
              padding: '1rem 1.5rem',
              borderRadius: '12px',
              color: '#fff',
              width: '220px',
              textAlign: 'left',
              boxShadow: '0 0 8px rgba(0,240,255,0.3)',
              zIndex: 10,
            }}
          >
            <div style={{ fontWeight: 'bold', color: '#00f0ff', marginBottom: '0.5rem' }}>
              {activeCard.club}
            </div>
            <div style={{ fontSize: '0.9rem' }}>{activeCard.info}</div>
            <div
              className="timeline-card__pointer"
              style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderBottom: '10px solid #112240',
              }}
            />
          </motion.div>
        )}
      </div>

      {/* Hobbies */}
      <div className="hobbies-section" style={{ marginTop: '4rem' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#00f0ff', marginBottom: '1.5rem' }}>
          Hobbies & Interests
        </h3>
        <div
          className="hobbies-grid"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {[
            {
              icon: <FiBook size={32} color="#00f0ff" />,
              title: 'Reading Novels',
              desc: 'Exploring mysteries and meaningful narratives through books.',
            },
            {
              icon: <FiFeather size={32} color="#00f0ff" />,
              title: 'Literature',
              desc: 'Writing poems that capture thoughts and feelings.',
            },
            {
              icon: <CgPen size={32} color="#00f0ff" />,
              title: 'Sketching',
              desc: 'Sketching and painting as a visual outlet.',
            },
            {
              icon: <GiPingPongBat size={32} color="#00f0ff" />,
              title: 'Table Tennis',
              desc: 'A fun way to unwind and stay active.',
            },
          ].map((hobby, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, #112240, #0a192f)',
                border: '1px solid #00f0ff55',
                borderRadius: '12px',
                padding: '1.2rem 1.5rem',
                minWidth: '230px',
                maxWidth: '250px',
                textAlign: 'center',
                boxShadow: '0 0 15px rgba(0,240,255,0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0,240,255,0.15)';
              }}
            >
              <div style={{ marginBottom: '0.5rem' }}>{hobby.icon}</div>
              <h4 style={{ color: '#00f0ff', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
                {hobby.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#ccc' }}>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Languages Known */}
<div className="languages-section" style={{ marginTop: '4rem' }}>
  <h3 style={{ fontSize: '1.8rem', color: '#00f0ff', marginBottom: '1.5rem' }}>
    Languages Known
  </h3>
  <div
    className="languages-grid"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1.2rem',
      maxWidth: '900px',
      margin: '0 auto',
    }}
  >
    {[
      {
        lang: 'English',
        level: 'Full Professional Proficiency',
      },
      {
        lang: 'French',
        level: 'Limited Working Proficiency',
      },
      {
        lang: 'Telugu',
        level: 'Native / Bilingual Proficiency',
      },
      {
        lang: 'Tamil',
        level: 'Professional Working Proficiency',
      },
      {
        lang: 'Hindi',
        level: 'Professional Working Proficiency',
      },
    ].map((language, i) => (
      <div
        key={i}
        style={{
          background: 'linear-gradient(135deg, #112240, #0a192f)',
          border: '1px solid #00f0ff55',
          borderRadius: '12px',
          padding: '1rem 1.2rem',
          minWidth: '200px',
          textAlign: 'center',
          boxShadow: '0 0 12px rgba(0,240,255,0.12)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 0 18px rgba(0,240,255,0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 0 12px rgba(0,240,255,0.12)';
        }}
      >
        <h4 style={{ color: '#00f0ff', fontSize: '1.2rem', marginBottom: '0.3rem' }}>
          {language.lang}
        </h4>
        <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: '1.2' }}>{language.level}</p>
      </div>
    ))}
  </div>
</div>
<a
  href="/resume.pdf"
  download
  style={{
    display: 'inline-block',
    marginTop: '5rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#00f0ff',
    color: '#0a192f',
    borderRadius: '8px',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
    transition: 'background-color 0.3s ease',
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0ef')}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#00f0ff')}
>
  Download My Resume
</a>



      
    </motion.section>
  );
};

export default About;
