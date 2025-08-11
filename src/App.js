import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">Marcus Jazz</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#teaching">Teaching</Nav.Link>
              <Nav.Link href="#music">Music</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <div className="hero-content">
                <Badge bg="primary" className="mb-3 hero-badge">Jazz Musician & Educator</Badge>
                <h1 className="hero-title mb-4">
                  <span className="text-white">Marcus</span>
                  <span className="text-orange"> Williams</span>
                </h1>
                <p className="hero-description mb-4">
                  Bringing the soul of jazz to life through performance and education. With over 15 years of experience, 
                  I help students discover their unique musical voice while mastering the fundamentals of jazz improvisation.
                </p>
                <div className="hero-buttons">
                  <Button variant="warning" size="lg" className="me-3 btn-orange">
                    Listen to My Music
                  </Button>
                  <Button variant="outline-primary" size="lg" className="btn-outline-blue">
                    Get In Touch
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-image-container">
                <div className="hero-image-bg"></div>
                <img 
                  src="https://placehold.co/592x500" 
                  alt="Marcus Williams"
                  className="hero-image img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5" id="about">
        <Container>
          <Row>
            <Col lg={8}>
              <h2 className="section-title mb-4">
                <span className="text-white">About</span>
                <span className="text-teal"> Marcus</span>
              </h2>
              <p className="about-text mb-4">
                Born and raised in New Orleans, I grew up surrounded by the rich musical heritage of jazz. 
                My journey began at age 12 when I first picked up the saxophone, and I haven't looked back since. 
                I've performed at renowned venues across the country and have had the privilege of sharing the 
                stage with some of jazz's greatest legends.
              </p>
              <p className="about-text">
                My passion for music extends beyond performance. For the past decade, I've dedicated myself to 
                teaching and mentoring the next generation of jazz musicians. I believe that jazz is not just 
                about technical proficiency, but about expressing one's authentic self through music.
              </p>
            </Col>
            <Col lg={4}>
              <div className="stats-container">
                <div className="stat-card stat-purple mb-3">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card stat-orange mb-3">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Students Taught</div>
                </div>
                <div className="stat-card stat-teal">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Performances</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Teaching Approach Section */}
      <section className="teaching-section py-5" id="teaching">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title mb-3">
                <span className="text-white">My Teaching</span>
                <span className="text-primary"> Approach</span>
              </h2>
              <p className="section-subtitle">
                Every student is unique, and so is their musical journey. I tailor my teaching methods to unlock each individual's potential.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="teaching-card border-primary">
                <div className="teaching-icon bg-primary">
                  <i className="bi bi-music-note-beamed"></i>
                </div>
                <h3 className="teaching-title">Strong Fundamentals</h3>
                <p className="teaching-text">
                  Building a solid foundation in music theory, scales, and technique that 
                  serves as the backbone for creative expression.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="teaching-card border-warning">
                <div className="teaching-icon bg-warning">
                  <i className="bi bi-lightning-fill"></i>
                </div>
                <h3 className="teaching-title">Creative Improvisation</h3>
                <p className="teaching-text">
                  Developing the confidence and skills to improvise freely while maintaining 
                  musical coherence and personal style.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="teaching-card border-success">
                <div className="teaching-icon bg-success">
                  <i className="bi bi-headphones"></i>
                </div>
                <h3 className="teaching-title">Active Listening</h3>
                <p className="teaching-text">
                  Learning from the masters through careful analysis and transcription of 
                  iconic jazz performances.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Performances Section */}
      <section className="performances-section py-5" id="music">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title mb-3">
                <span className="text-white">Featured</span>
                <span className="text-purple"> Performances</span>
              </h2>
              <p className="section-subtitle">A glimpse into my musical journey</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="https://placehold.co/290x192" />
                <Card.Body>
                  <Card.Title className="performance-title">Blue Note Sessions</Card.Title>
                  <Card.Text className="performance-venue">Live at Lincoln Center</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="https://placehold.co/290x192" />
                <Card.Body>
                  <Card.Title className="performance-title">Midnight Jazz</Card.Title>
                  <Card.Text className="performance-venue">Village Vanguard</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="https://placehold.co/290x192" />
                <Card.Body>
                  <Card.Title className="performance-title">Studio Sessions</Card.Title>
                  <Card.Text className="performance-venue">Original Compositions</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="https://placehold.co/290x192" />
                <Card.Body>
                  <Card.Title className="performance-title">Jazz Festival</Card.Title>
                  <Card.Text className="performance-venue">Monterey 2023</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5" id="contact">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title mb-3">
                <span className="text-white">Get In</span>
                <span className="text-orange"> Touch</span>
              </h2>
              <p className="section-subtitle">Ready to start your jazz journey? Let's connect.</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={5} className="mb-5">
              <div className="contact-info">
                <div className="contact-item mb-4">
                  <div className="contact-icon bg-primary">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <h5 className="contact-label">Email</h5>
                    <p className="contact-value">marcus.williams@jazzmusic.com</p>
                  </div>
                </div>
                <div className="contact-item mb-4">
                  <div className="contact-icon bg-success">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="contact-details">
                    <h5 className="contact-label">Phone</h5>
                    <p className="contact-value">(504) 555-JAZZ</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon bg-purple">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h5 className="contact-label">Location</h5>
                    <p className="contact-value">New Orleans, LA</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="contact-form">
                <Form>
                  <Row>
                    <Col md={12} className="mb-3">
                      <Form.Label className="form-label">Name</Form.Label>
                      <Form.Control type="text" className="form-input" />
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Label className="form-label">Email</Form.Label>
                      <Form.Control type="email" className="form-input" />
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Label className="form-label">Subject</Form.Label>
                      <Form.Control type="text" className="form-input" />
                    </Col>
                    <Col md={12} className="mb-3">
                      <Form.Label className="form-label">Message</Form.Label>
                      <Form.Control as="textarea" rows={5} className="form-input" />
                    </Col>
                    <Col md={12}>
                      <Button variant="warning" size="lg" className="w-100 btn-orange">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="footer-brand">Marcus Jazz</div>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="social-links mb-2">
                <a href="#" className="social-link me-3"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-link me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="social-link me-3"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-link"><i className="bi bi-youtube"></i></a>
              </div>
              <p className="footer-text">© 2024 Marcus Williams. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
