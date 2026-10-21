import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual backend/form service
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '80px',
        backgroundColor: 'transparent',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', color: '#00f0ff' }}>Let's Connect</h2>
      <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '3rem', textAlign: 'center', maxWidth: '600px' }}>
        Whether it’s a project collaboration, career opportunity, or just a friendly chat.  I'd love to hear from you!
      </p>

      <div
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '20px',
          padding: '2.5rem',
          boxShadow: '0 0 20px rgba(0,240,255,0.1)',
          width: '90%',
          maxWidth: '500px',
        }}
      >
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <FloatingInput name="name" label="Name" value={formData.name} onChange={handleChange} />
          <FloatingInput name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
          <FloatingTextarea name="message" label="Message" value={formData.message} onChange={handleChange} />

          <button
            type="submit"
            style={{
              padding: '12px 24px',
              background: '#00f0ff',
              color: '#0a192f',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 0 12px rgba(0,240,255,0.5)',
              cursor: 'pointer',
              transition: '0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(0,240,255,0.8)')}
            onMouseOut={(e) => (e.currentTarget.style.boxShadow = '0 0 12px rgba(0,240,255,0.5)')}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Socials */}
      <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
        <SocialIcon href="https://github.com/JillaVarsha" icon={<FaGithub />} />
        <SocialIcon href="https://www.linkedin.com/in/varsha-jilla-40223328a/" icon={<FaLinkedin />} />
        <SocialIcon href="mailto:jvarsha1606@gmail.com" icon={<FaEnvelope />} />
      </div>
    </motion.section>
  );
};

// Floating Input Component
const FloatingInput = ({ name, label, value, onChange, type = 'text' }) => (
  <div style={{ position: 'relative' }}>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      style={{
        width: '100%',
        padding: '14px 12px',
        background: 'transparent',
        border: '1px solid #00f0ff55',
        borderRadius: '8px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
      }}
    />
    <label
      style={{
        position: 'absolute',
        left: '12px',
        top: '-10px',
        fontSize: '0.8rem',
        background: '#0a192f',
        padding: '0 4px',
        color: '#00f0ff',
      }}
    >
      {label}
    </label>
  </div>
);

const FloatingTextarea = ({ name, label, value, onChange }) => (
  <div style={{ position: 'relative' }}>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={5}
      required
      style={{
        width: '100%',
        padding: '14px 12px',
        background: 'transparent',
        border: '1px solid #00f0ff55',
        borderRadius: '8px',
        color: 'white',
        fontSize: '1rem',
        outline: 'none',
        resize: 'none',
      }}
    />
    <label
      style={{
        position: 'absolute',
        left: '12px',
        top: '-10px',
        fontSize: '0.8rem',
        background: '#0a192f',
        padding: '0 4px',
        color: '#00f0ff',
      }}
    >
      {label}
    </label>
  </div>
);

// Reusable Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#00f0ff',
      fontSize: '1.7rem',
      transition: 'transform 0.2s, color 0.3s',
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'scale(1.2)';
      e.currentTarget.style.color = '#00f7ff';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.color = '#00f0ff';
    }}
  >
    {icon}
  </a>
);

export default Contact;
