import React from 'react';
import { motion } from 'framer-motion';

const techSkills = [
  'Python', 'JavaScript', 'C++', 'HTML', 'CSS',
  'React', 'TailwindCSS', 'Framer Motion', 'tsparticles',
  'Flask', 'Node.js', 'MySQL', 'MongoDB',
  'Git', 'Netlify', 'Firebase', 'AWS',
];

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Adaptability',
  'Creativity',
  'Leadership',
  'Critical Thinking',
  'Empathy',
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
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
      <h2 style={{ fontSize: '2.5rem', color: '#00f0ff', marginBottom: '2rem' }}>Skills</h2>
      <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto 3rem', color: '#ccc' }}>
        Here's a mix of the technical tools I build with and the soft skills I bring to every team.
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #112240, #0a192f)',
            padding: '2rem',
            borderRadius: '16px',
            width: '330px',
            border: '1px solid #00f0ff33',
            boxShadow: '0 0 15px rgba(0,240,255,0.15)',
            textAlign: 'left',
          }}
        >
          <h3 style={{ color: '#00f0ff', marginBottom: '1rem', fontSize: '1.4rem' }}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {techSkills.map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#00f0ff22',
                  border: '1px solid #00f0ff55',
                  borderRadius: '50px',
                  color: '#00f0ff',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, #112240, #0a192f)',
            padding: '2rem',
            borderRadius: '16px',
            width: '330px',
            border: '1px solid #00f0ff33',
            boxShadow: '0 0 15px rgba(0,240,255,0.15)',
            textAlign: 'left',
          }}
        >
          <h3 style={{ color: '#00f0ff', marginBottom: '1rem', fontSize: '1.4rem' }}>Soft Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {softSkills.map((skill, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 12px',
                  backgroundColor: '#00f0ff22',
                  border: '1px solid #00f0ff55',
                  borderRadius: '50px',
                  color: '#00f0ff',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Certifications Section */}
<div style={{ marginTop: '4rem' }}>
  <h3 style={{ fontSize: '1.8rem', color: '#00f0ff', marginBottom: '1.5rem', textAlign: 'center' }}>
    Certifications
  </h3>
  <div
    className="certifications-grid"
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem',
      maxWidth: '1000px',
      margin: '0 auto',
    }}
  >
    {[
      {
        course: 'Java Foundation Certification',
        platform: 'Infosys Springboard',
        link: '/certificates/javafoundation.pdf',
      },
      {
        course: 'Oracle Database 19c: Basic SQL',
        platform: 'LinkedIn Learning',
        link: '/certificates/linkedin.pdf',
      },
      {
        course: 'Data Analysis with Python',
        platform: 'IBM',
        link: '/certificates/dapibm.pdf',
      },
      {
        course: 'Data Visualization with Python',
        platform: 'IBM',
        link: '/certificates/dvpibm.pdf',
      },
      {
        course: 'Python 101 for Data Science',
        platform: 'IBM',
        link: '/certificates/pythonfords.pdf',
      },
      {
        course: 'Introduction To Internet of Things',
        platform: 'NPTEL',
        link: '/certificates/nptel.pdf',
      },
      {
        course: 'UiPath Automation Explorer for Students',
        platform: 'UiPath',
        link: '/certificates/uipath.pdf',
      },
      {
        course: 'Programming using Java',
        platform: 'Infosys Springboard',
        link: '/certificates/poj.pdf',
      },
    ].map((cert, index) => (
      <div
        key={index}
        className="certification-card"
        style={{
          background: 'linear-gradient(135deg, #112240, #0a192f)',
          border: '1px solid #00f0ff55',
          borderRadius: '12px',
          padding: '1.2rem 1.5rem',
          width: '250px',
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
        <h4 style={{ color: '#00f0ff', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
          {cert.course}
        </h4>
        <p style={{ fontSize: '0.85rem', color: '#ccc', marginBottom: '1rem' }}>{cert.platform}</p>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '6px 12px',
            borderRadius: '9999px',
            backgroundColor: '#00f0ff33',
            color: '#00f0ff',
            fontSize: '0.85rem',
            border: '1px solid #00f0ff88',
            textDecoration: 'none',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#00f0ff55';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#00f0ff33';
          }}
        >
          View Certificate
        </a>
      </div>
    ))}
  </div>
</div>

    </motion.section>
  );
};

export default Skills;
