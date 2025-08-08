import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Form,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const themeClass = darkMode ? "dark-theme" : "light-theme";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className={themeClass}>
      <Navbar expand="lg" className="main-navbar">
        <Container>
          <Navbar.Brand href="#home">Rashmi Pubuditha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Button onClick={toggleTheme} className="theme-toggle-btn ml-3">
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-content">
          <img
            src="/DSC_1596.jpg"
            alt="Rashmi Pubuditha"
            className="hero-image"
          />
          <h1 className="hero-title">Rashmi Pubuditha</h1>
          <h4>Software Engineer | ML & DevOps Enthusiast</h4>
          <p className="lead">
            Experienced and skilled programmer passionate about Software
            Development, ML, and DevOps.
          </p>
          <div className="hero-buttons mt-3">
            <a href="/your-cv.pdf" download className="btn btn-primary mx-2">
              Download CV
            </a>
            <a href="#contact" className="btn btn-outline-light mx-2">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <Container id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m an experienced and skilled programmer passionate about Software
          Development, Machine Learning, and DevOps. I focus on continuously
          growing by learning new technologies and improving my skills. I am
          eager to find opportunities where I can contribute, learn, and grow
          within the industry.
        </p>
      </Container>

      <Container id="skills" className="section">
        <h2>Skills</h2>
        <Row>
          <Col md={6}>
            <h5>Technical Skills</h5>
            <ul>
              <li>Python, Java, React, Flask</li>
              <li>Docker, CI/CD, MongoDB, AWS</li>
              <li>Machine Learning, OpenCV, YOLO</li>
              <li>LLM, Generative AI</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Soft Skills</h5>
            <ul>
              <li>Team Collaboration</li>
              <li>Critical Thinking</li>
              <li>Adaptability</li>
              <li>Problem Solving</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container id="experience" className="section">
        <h2>Experience</h2>
        <ul>
          <li>
            <strong>
              Software Engineer at Adveccio Pvt Ltd (Oct 2024 – Present)
            </strong>
            <ul>
              <li>Built end-to-end ERP systems using React, Flask, MySQL</li>
              <li>
                Developed AI chatbot for Salesforce app using RASA and Flask
              </li>
              <li>Created time series forecasting tools using SARIMA, LSTM</li>
            </ul>
          </li>
          <li>
            <strong>Trainee at VEGA Innovations (Aug 2023 – Oct 2023)</strong>
            <ul>
              <li>Real-time CAN Data Logger and Python algorithm design</li>
            </ul>
          </li>
          <li>
            <strong>
              Trainee at KBSL Information Technologies (June 2022 – Aug 2022)
            </strong>
            <ul>
              <li>Worked in ISP support and network monitoring</li>
            </ul>
          </li>
        </ul>
      </Container>

      <Container id="education" className="section">
        <h2>Education</h2>
        <ul>
          <li>
            BSc (Hons) in Electrical and Electronic Engineering, University of
            Peradeniya (GPA: 3.3/4.0)
          </li>
          <li>Visakha Vidyalaya – A/L: 2A’s & 1B (2018), O/L: 9A’s (2015)</li>
        </ul>
      </Container>

      <Container id="projects" className="section">
        <h2>Projects</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src="/images/number_plate_project.jpg" />
              <Card.Body>
                <Card.Title>Number Plate Visibility Enhancement</Card.Title>
                <Card.Text>
                  SRCNN, ESRGAN, Motion Deblurring, Python, TensorFlow
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img
                variant="top"
                src="/images/ceramic_defect_detection.jpg"
              />
              <Card.Body>
                <Card.Title>Defect Detection - Ceramic Products</Card.Title>
                <Card.Text>YOLOv8, Python, OpenCV</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src="/images/video_compression.jpg" />
              <Card.Body>
                <Card.Title>Image & Video Compression System</Card.Title>
                <Card.Text>Hybrid Codec, Motion Prediction, Python</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src="/images/treadmill_dashboard.jpg" />
              <Card.Body>
                <Card.Title>Treadmill Dashboard GUI</Card.Title>
                <Card.Text>Python-based real-time metrics display</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src="/images/pill_dispenser.jpg" />
              <Card.Body>
                <Card.Title>Smart Pill Dispenser</Card.Title>
                <Card.Text>IoT, ESP32, Firebase, Arduino</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src="/images/hospital_mgmt.jpg" />
              <Card.Body>
                <Card.Title>COVID-19 Hospital System</Card.Title>
                <Card.Text>C Programming, patient management</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id="contact" className="section">
        <h2>Contact</h2>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Your message..."
            />
          </Form.Group>
          <Button className="cta-btn mt-3" type="submit">
            Submit
          </Button>
        </Form>
        <p className="mt-4">
          Email: rashmi@example.com |{" "}
          <a href="https://linkedin.com/in/rashmi">LinkedIn</a> |{" "}
          <a href="https://github.com/rashmi">GitHub</a>
        </p>
      </Container>

      <footer className="site-footer text-center py-3">
        <small>&copy; 2025 Rashmi Pubuditha. All rights reserved.</small>
      </footer>
    </div>
  );
}
