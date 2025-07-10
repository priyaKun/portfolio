import React, { useState, useRef } from 'react';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet';
import { Row, Col, Card, Form, Alert } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://portfolio-cst3.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: new URLSearchParams(formData),
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

  return (
    <>
      <Helmet>
        <title>Contact | Keerthipriya</title>
        <meta name="description" content="Reach out for collaborations, freelance work or inquiries." />
      </Helmet>

            <section className="py-5 min-vh-100" id="contact">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary mb-3">Let’s Connect</h1>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
              Feel free to drop a message — whether it’s collaboration, feedback, or just a hello 👋
            </p>
          </div>

                  <Row className="g-4 align-items-stretch">
            {/* Contact Form */}
            <Col md={7}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Body>
                  <h2 className="h4 fw-semibold mb-4 text-primary">Send a Message</h2>
                  {submitStatus && (
                    <Alert variant={submitStatus.success ? 'success' : 'danger'}>{submitStatus.message}</Alert>
                  )}
                  <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Please Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={6}
                        placeholder="Write here"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary px-4 py-2 fw-semibold" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            {/* Contact Info */}
            <Col md={5}>
              <Card className="shadow-sm border-0 h-100 bg-light">
                <Card.Body>
                  <h3 className="h5 fw-semibold text-primary mb-3">Reach Me At</h3>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3 fs-6"><span role="img" aria-label="email">📧</span> keerthypriya2105@gmail.com</li>
                    <li className="mb-3 fs-6"><span role="img" aria-label="location">📍</span> Andhra Pradesh, India</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
