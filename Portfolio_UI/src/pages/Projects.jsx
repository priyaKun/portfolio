import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaMusic, FaMapMarkedAlt, FaBolt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';

const projectThumbnails = [
  <FaMusic size={48} className="text-primary mx-auto d-block mb-3" />,
  <FaMapMarkedAlt size={48} className="text-success mx-auto d-block mb-3" />,
  <FaBolt size={48} className="text-warning mx-auto d-block mb-3" />,
];

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Keerthipriya - Full Stack Developer</title>
        <meta
          name="description"
          content="Professional projects showcasing my work as a Full Stack Developer"
        />
      </Helmet>

      <section className="py-5 bg-light min-vh-100" id="projects">
        <div className="container">
          <header className="text-center mb-5">
            <div data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-2 text-primary">My Projects</h2>
            </div>
            <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }} data-aos="fade-up" data-aos-delay="150">
              Here are a few highlights of the projects I’ve built as a student and tech enthusiast. Each project reflects my passion for learning, problem-solving, and building real-world solutions.
            </p>
          </header>

          <Row className="g-4">
            {projects.map((project, idx) => (
              <Col md={6} lg={4} key={idx} data-aos="zoom-in-up" data-aos-delay={idx * 150}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column">
                    {/* Project Thumbnail/Icon */}
                    {projectThumbnails[idx]}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Card.Title className="h5 fw-bold mb-0">{project.name}</Card.Title>
                      <div className="d-flex gap-2">
                        {project.link && (
                          <Button
                            as="a"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline-dark"
                            size="sm"
                            aria-label={`View ${project.name} on GitHub`}
                          >
                            <FaGithub />
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            as="a"
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline-primary"
                            size="sm"
                            aria-label={`View ${project.name} demo`}
                          >
                            <FaExternalLinkAlt />
                          </Button>
                        )}
                      </div>
                    </div>
                    <Card.Text className="mb-3 text-secondary">{project.description}</Card.Text>
                    <div className="mb-2 mt-auto">
                      {project.tech.map((t, i) => (
                        <Badge bg="info" text="dark" className="me-2 mb-1" key={i}>{t}</Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

const projects = [
  {
    name: 'Spotify Clone',
    description:
      'A responsive front-end clone of Spotify built as a personal learning project. I designed and implemented a modern UI with React and styled-components, focusing on smooth animations and user experience. This project helped me deepen my understanding of component-based architecture and state management.',
    tech: ['React', 'Styled Components', 'Context API'],
    link: 'https://github.com/priyakun/spotifyClone',
    demo: 'https://priyakun.github.io/spotifyClone/',
  },
  {
    name: 'Trip Planner AI',
    description:
      'An AI-powered travel itinerary generator created as a team project. I worked on integrating the OpenAI API and building the front-end in React. The app generates personalized trip plans based on user preferences, helping users save time and plan better vacations. This project strengthened my skills in API integration and collaborative development.',
    tech: ['React', 'Spring Boot', 'OpenAI API', 'REST'],
    link: 'https://github.com/priyaKun/trip-planner-ai-.git',
  },
  {
    name: 'Smart Home Power Prediction',
    description:
      'A machine learning solution using LSTM networks to forecast power consumption patterns from IoT sensor data. I led the data preprocessing and model training, achieving 92% accuracy. This project was recognized in a university competition and gave me hands-on experience with ML workflows.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'Pandas'],
    link: 'https://github.com/priyaKun/Smart_house_power_consumption_prediction',
  },
];

export default Projects;
