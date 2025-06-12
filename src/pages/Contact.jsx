import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 700,
        marginBottom: '2rem',
        color: '#2d3748',
        position: 'relative',
        display: 'inline-block',
        ':after': {
          content: '""',
          position: 'absolute',
          bottom: '-10px',
          left: 0,
          width: '50px',
          height: '3px',
          background: '#3182ce'
        }
      }}>Get In Touch</h2>
      
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        <div>
          <label htmlFor="name" style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500,
            color: '#2d3748'
          }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              transition: 'border 0.2s',
              ':focus': {
                outline: 'none',
                borderColor: '#3182ce',
                boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.2)'
              }
            }}
          />
        </div>
        
        <div>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500,
            color: '#2d3748'
          }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              transition: 'border 0.2s',
              ':focus': {
                outline: 'none',
                borderColor: '#3182ce',
                boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.2)'
              }
            }}
          />
        </div>
        
        <div>
          <label htmlFor="message" style={{
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: 500,
            color: '#2d3748'
          }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              transition: 'border 0.2s',
              resize: 'vertical',
              ':focus': {
                outline: 'none',
                borderColor: '#3182ce',
                boxShadow: '0 0 0 3px rgba(49, 130, 206, 0.2)'
              }
            }}
          ></textarea>
        </div>
        
        <Button type="submit" style={{
          alignSelf: 'flex-start',
          padding: '0.75rem 2rem'
        }}>Send Message</Button>
      </form>
    </section>
  );
};

export default Contact;