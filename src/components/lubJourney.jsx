import React, { useState } from 'react';
import avatarGif from '../assets/avatar-walk.gif';

const checkpoints = [
  { id: 0, label: 'GDSC', left: 60, club: 'Google Developer Student Club', info: 'Learned full-stack collaboration, Firebase, and teamwork.' },
  { id: 1, label: 'E-Cell', left: 200, club: 'Entrepreneurship Cell', info: 'Gained pitch experience, event planning, and startup insight.' },
  { id: 2, label: 'WiT', left: 340, club: 'Women in Tech Society', info: 'Led mentorship circles and learned leadership and diversity in tech.' },
  { id: 3, label: 'Coding Club', left: 480, club: 'Coding Club', info: 'Solved DSA problems, organized coding sprints, and grew logical thinking.' },
  { id: 4, label: 'Design Circle', left: 620, club: 'Design Circle', info: 'Explored UI/UX design tools, collaborated on posters and digital content.' },
];


const ClubJourney = () => {
  const [avatarX, setAvatarX] = useState(50);
  const [activeCard, setActiveCard] = useState(null);

  const handleCheckpointClick = (point) => {
    setAvatarX(point.left);
    setActiveCard(point);
  };

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0d1b2a',
        color: 'white',
        padding: '4rem 2rem',
        position: 'relative',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', color: '#00f0ff' }}>
        My Journey in Clubs
      </h2>

      {/* Map Line */}
      <div style={{
        position: 'relative',
        marginTop: '4rem',
        height: '200px',
        borderTop: '4px dashed #00f0ff',
        width: '100%',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {/* Avatar */}
        <img
          src={avatarGif}
          alt="Walking Avatar"
          style={{
            position: 'absolute',
            top: '-48px',
            left: `${avatarX}px`,
            width: '48px',
            transition: 'left 1s linear',
          }}
        />

        {/* Checkpoints */}
        {checkpoints.map((point) => (
          <div
            key={point.id}
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
            title={point.label}
          />
        ))}
      </div>

      {/* Info Card */}
      {activeCard && (
        <div style={{
          marginTop: '3rem',
          backgroundColor: '#112240',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)',
        }}>
          <h3 style={{ color: '#00f0ff' }}>{activeCard.club}</h3>
          <p style={{ marginTop: '0.5rem' }}>{activeCard.info}</p>
        </div>
      )}
    </section>
  );
};

export default ClubJourney;
