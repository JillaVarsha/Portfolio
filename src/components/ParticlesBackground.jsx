import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#0d1b2a" },
        particles: {
          number: { value: 80 },
          size: { value: 3 },
          color: { value: "#00d8e6" },
          links: {
            enable: true,
            color: "#00f0ff",
            distance: 120,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.7
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
