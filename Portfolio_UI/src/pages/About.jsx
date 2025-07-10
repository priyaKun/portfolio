import React from 'react';
import Skills from '../components/Skills';
import { Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section className="py-5 bg-body min-vh-100 text-body" id="about">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="display-5 fw-bold mb-3 text-primary">About Me</h2>
          <p className="lead text-body mx-auto" style={{ maxWidth: '600px' }}>
            I’m a Computer Science student at VIT-AP University, passionate about technology, problem-solving, and continuous learning. I love building real-world solutions and collaborating with others to create impactful products.
          </p>
        </div>

        {/* Content */}
        <Row className="g-4 align-items-start">
          {/* LEFT: Bio */}
          <Col md={7} data-aos="fade-right" data-aos-delay="100">
            <Card className="mb-4 shadow-sm border-0 bg-body text-body">
              <Card.Body>
                {/* My Background Section as Card */}
                <Card className="bg-body-secondary border-start border-4 border-primary text-body mb-4">
                  <Card.Body>
                    <h4 className="h6 fw-bold text-primary mb-2">My Background</h4>
                    <p className="mb-3">
                      I am currently pursuing my Bachelor’s in Computer Science at VIT-AP University. My academic journey has equipped me with a strong foundation in algorithms, data structures, and software engineering principles. I enjoy applying my knowledge to build scalable, user-friendly web applications.
                    </p>
                    <p className="mb-0">
                      I have contributed to projects like <strong>StudyKart</strong> and <strong>Smart Power Prediction</strong>, and completed an internship as a Software Development Intern at iQuadra Technologies. I am an <strong>AWS Certified Cloud Practitioner</strong> and an active participant in coding events and technical clubs.
                    </p>
                  </Card.Body>
                </Card>

                {/* My Approach Card */}
                <Card
                  className="bg-body-secondary border-start border-4 border-primary mt-4 text-body"
                  data-aos="fade-in"
                  data-aos-delay="200"
                >
                  <Card.Body>
                    <h4 className="h6 fw-bold text-primary mb-2">My Approach</h4>
                    <p className="mb-0">
                      I focus on writing clean, maintainable code and creating accessible, user-friendly interfaces. I am a fast learner who enjoys solving real-world problems and continuously evolving with the latest tech trends.
                    </p>
                  </Card.Body>
                </Card>

                {/* My Values Card */}
                <Card className="bg-body-secondary border-0 mt-4 text-body" data-aos="fade-in" data-aos-delay="300">
                  <Card.Body>
                    <h4 className="h6 fw-bold text-primary mb-2">My Values</h4>
                    <ul className="mb-0 ps-3">
                      <li>Curiosity and lifelong learning</li>
                      <li>Collaboration and teamwork</li>
                      <li>Integrity and responsibility</li>
                      <li>Creativity and innovation</li>
                    </ul>
                  </Card.Body>
                </Card>

                {/* Fun Fact */}
                <div className="mt-4" data-aos="fade-in" data-aos-delay="400">
                  <span className="fw-semibold text-primary">Fun Fact:</span> I love participating in hackathons and enjoy exploring new tech trends in my free time!
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* RIGHT: Skills */}
          <Col md={5} data-aos="fade-left" data-aos-delay="200">
            <Card className="shadow-sm border-0 bg-body text-body">
              <Card.Body>
                <h3 className="h5 fw-semibold text-primary mb-3">My Skills</h3>
                <Skills />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
