import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import profileImage from '../assets/images/Pic.jpg';
import awsBadge from '../assets/images/aws-badge.png';
import { Card, Row, Col, Badge } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="py-5 bg-light min-vh-100 d-flex align-items-center position-relative overflow-hidden" id="home">
      {/* Animated SVG Gradient Background */}
      <svg style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0}} viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b34aba" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <ellipse cx="720" cy="300" rx="900" ry="320" fill="url(#heroGradient)">
          <animate attributeName="rx" values="900;950;900" dur="8s" repeatCount="indefinite" />
          <animate attributeName="ry" values="320;350;320" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <div className="container position-relative" style={{zIndex:1}}>
        <Row className="align-items-center g-5 flex-column-reverse flex-md-row">
          {/* Left Section */}
          <Col md={6} className="text-center text-md-start" data-aos="fade-right" data-aos-delay="100">
            <p className="fs-5 fw-semibold text-primary mb-2">Hello 👋</p>
            <h1 className="fw-bold mb-3" style={{ fontSize: '2rem', lineHeight: 1.2 }}>
              I’m <span className="text-primary">Keerthipriya</span>,<br />
              Student, Full Stack Developer &<br />
              Cloud Enthusiast
            </h1>
            <p className="lead text-secondary mb-3">
              I am currently pursuing my Bachelor’s in Computer Science at VIT-AP University. I am passionate about building robust, scalable web applications and love learning new technologies. My journey includes hands-on experience with React, FastAPI, and AWS, and I am always eager to take on new challenges and grow as a developer.
            </p>
            <p className="mb-4 text-secondary">
              <strong>Open to internships, full-time roles, and collaborative projects.</strong> I am enthusiastic, quick to learn, and ready to contribute to innovative teams.
            </p>
            <div className="d-flex align-items-center gap-3 mb-4 flex-wrap justify-content-center justify-content-md-start" data-aos="fade-up" data-aos-delay="200">
              <img src={awsBadge} alt="AWS Certified Cloud Practitioner" style={{ height: '40px' }} />
              <span className="badge bg-info text-dark fw-semibold">AWS Certified Cloud Practitioner</span>
            </div>
            <div className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <h5 className="fw-bold mb-2">Why Hire Me?</h5>
              <ul className="list-unstyled text-start mx-auto" style={{maxWidth:'400px'}}>
                <li>• Strong foundation in computer science and web development</li>
                <li>• Quick learner and highly adaptable</li>
                <li>• Experience with modern tech stacks (React, FastAPI, AWS)</li>
                <li>• Passionate about clean code and user experience</li>
                <li>• Excellent communicator and team player</li>
              </ul>
            </div>
            <div className="d-flex gap-3 flex-wrap justify-content-center justify-content-md-start" data-aos="fade-up" data-aos-delay="400">
              <Button className="btn btn-primary px-4 py-2 fw-semibold shadow-sm transition-transform" style={{transition:'transform 0.2s'}} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'} onClick={() => navigate('/contact')}>
                Hire Me
              </Button>
              <a
                href="https://drive.google.com/file/d/1_rTc8LSEAZLltEQN_cr5vXKnWOq5SA6r/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary px-4 py-2 fw-semibold shadow-sm ms-2"
                style={{transition:'transform 0.2s'}}
                onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'}
                onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}
              >
                Download Resume
              </a>
            </div>
          </Col>
          {/* Right Section */}
          <Col md={6} className="d-flex justify-content-center" data-aos="zoom-in" data-aos-delay="200">
            <Card className="shadow-lg border-0 position-relative" style={{ maxWidth: '420px', borderRadius: '1rem' }}>
              <Card.Img
                src={profileImage}
                alt="Keerthipriya - Full Stack Developer"
                className="img-fluid rounded"
                style={{ borderRadius: '1rem', objectFit: 'cover', width: '100%', minHeight: '320px', maxHeight: '420px' }}
              />
              <Badge bg="primary" className="position-absolute top-0 start-0 m-3 px-3 py-2 fs-6 shadow">Full Stack Dev</Badge>
              <Badge bg="light" text="primary" className="position-absolute bottom-0 end-0 m-3 px-3 py-2 fs-6 shadow border border-primary">Cloud Learner</Badge>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
