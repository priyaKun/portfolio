import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const formRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      });
      if (response.ok) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ success: false, message: 'Oops! Something went wrong. Try again.' });
      }
    } catch {
      setSubmitStatus({ success: false, message: 'Oops! Something went wrong. Try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const styles = getStyles(isMobile);

  return (
    <>
      <Helmet>
        <title>Contact | Keerthipriya</title>
        <meta name="description" content="Reach out for collaborations, freelance work or inquiries." />
      </Helmet>

      <section style={styles.section} id="contact">
        <div style={styles.container}>
          <div style={styles.newHeader}>
            <h1 style={styles.newTitle}>Let’s Connect</h1>
            <p style={styles.newSubtitle}>
              Feel free to drop a message — whether it’s collaboration, feedback, or just a hello 👋
            </p>
          </div>

          <div style={styles.content}>
            <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
              {submitStatus && (
                <div style={{
                  ...styles.statusMessage,
                  backgroundColor: submitStatus.success ? '#ecfdf5' : '#fef2f2',
                  borderColor: submitStatus.success ? '#34d399' : '#f87171',
                  color: submitStatus.success ? '#065f46' : '#7f1d1d',
                }}>
                  {submitStatus.message}
                </div>
              )}

              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Please Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Write here"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                ></textarea>
              </div>

              <Button type="submit" disabled={isSubmitting} style={styles.button}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>

            <div style={styles.info}>
              <h3 style={styles.infoTitle}>Reach Me At</h3>
              <ul style={styles.infoList}>
                <li style={styles.infoItem}>📧 keerthypriya2105@gmail.com</li>
                <li style={styles.infoItem}>📍 Andhra Pradesh, India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// 🔽 Responsive style generator
function getStyles(isMobile) {
  return {
    section: {
      padding: '3rem 1rem',
      backgroundColor: '#f9fafb',
      fontFamily: "'Inter', sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
      overflow: 'hidden',
    },
    newHeader: {
      background: 'radial-gradient(circle at top left, #f3c1f7, #d0e5fc)',
      padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      textAlign: 'center',
      color: '#1e293b',
      borderBottom: '1px solid #e5e7eb',
    },
    newTitle: {
      fontSize: isMobile ? '2rem' : '2.75rem',
      fontWeight: '700',
      marginBottom: '1rem',
    },
    newSubtitle: {
      fontSize: '1rem',
      color: '#4b5563',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
    },
    content: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '2rem',
      padding: isMobile ? '2rem' : '3rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: 500,
      color: '#374151',
    },
    input: {
      padding: '0.875rem',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      backgroundColor: '#f9fafb',
      color: '#111827',
      fontSize: '1rem',
    },
    textarea: {
      padding: '0.875rem',
      borderRadius: '8px',
      border: '1px solid #d1d5db',
      backgroundColor: '#f9fafb',
      color: '#111827',
      fontSize: '1rem',
      resize: 'vertical',
    },
    button: {
      padding: '1rem 2rem',
      backgroundColor: '#2563eb',
      color: '#fff',
      fontWeight: 600,
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    statusMessage: {
      padding: '1rem',
      borderRadius: '6px',
      borderWidth: '1px',
      borderStyle: 'solid',
      fontSize: '0.95rem',
    },
    info: {
      padding: '1rem',
      borderRadius: '8px',
      backgroundColor: '#f1f5f9',
    },
    infoTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '1rem',
      color: '#1f2937',
    },
    infoList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      color: '#4b5563',
    },
    infoItem: {
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
  };
}

export default Contact;
