import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: 'FinWell',
    description:
      'Financial planner for retirees, predicts costs, optimizes savings, and suggests smart moves.',
    tech: ['Flask', 'MySQL', 'MongoDB', 'React', 'TensorFlow', 'AWS'],
    bg: 'linear-gradient(135deg, #1a1a40, #0d1b2a)',
  },
  {
    title: 'Cookez',
    description:
      'Smart recipe customizer with ingredient role detection, allergy filters, and dietary adaptation tools.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'OCR API'],
    bg: 'linear-gradient(135deg, #2d1e40, #1c2b3a)',
  },
  {
    title: 'Supply Chain Tool',
    description:
      'Internal tool to manage POs with manager approval flow, login-based access, and real-time updates.',
    tech: ['React', 'Flask', 'MySQL', 'JWT', 'Bootstrap'],
    bg: 'linear-gradient(135deg, #1b2a49, #0f2027)',
  },
  {
    title: 'Self-driving Car Simulation',
    description:
      'An AI-based self-driving car simulation using NEAT algorithm for autonomous navigation in a 2D environment with obstacles and traffic rules.',
    tech: ['Python', 'Pygame', 'NEAT algorithm'],
    bg: 'linear-gradient(135deg, #3a1c71, #1c1c2b)',
  },
  {
    title: 'ParkSmart',
    description:
      'A smart parking solution that helps users find available parking spots in real-time, reserve them and make payments.',
    tech: ['React', 'Framer Motion', 'tsparticles', 'CSS Modules'],
    bg: 'linear-gradient(135deg, #112240, #0a192f)',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        paddingTop: '100px',
        paddingBottom: '60px',
        minHeight: '100vh',
        backgroundColor: 'transparent',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', color: '#00f0ff' }}>Projects</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '1rem auto 3rem', color: '#ccc' }}>
        A glance at all the projects I've built so far.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          maxWidth: '1150px',
          margin: '0 auto',
        }}
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            style={{
              background: project.bg,
              padding: '1.7rem',
              borderRadius: '16px',
              width: '280px',
              minHeight: '270px',
              textAlign: 'left',
              boxShadow: '0 0 20px rgba(0,240,255,0.1)',
              border: '1px solid #00f0ff33',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0,240,255,0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.1)';
            }}
          >
            <h3 style={{ color: '#00f0ff', fontSize: '1.3rem', marginBottom: '0.6rem' }}>
              {project.title}
            </h3>
            <p style={{ color: '#ccc', fontSize: '0.95rem', marginBottom: '1.2rem', lineHeight: '1.5' }}>
              {project.description}
            </p>

            {/* Tech Stack as Pill Bubbles */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    backgroundColor: '#00f0ff22',
                    border: '1px solid #00f0ff55',
                    borderRadius: '50px',
                    color: '#00f0ff',
                    fontWeight: '500',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
