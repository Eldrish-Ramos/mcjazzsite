import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="brand-text">Mauricio Castellanos</Navbar.Brand>
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
                  <span className="text-white">Mauricio</span>
                  <span className="text-orange"> Castellanos</span>
                </h1>
                <p className="hero-description mb-4">
                  Trumpet player and educator from Los Angeles, exploring jazz, Black American music, Latino music, and improvisational forms. 
                  Trained under renowned masters including Dan Rosenboom, Howard Sheer, and Arturo Sandoval, with experience performing 
                  in notable ensembles and recording soundtracks for independent films.
                </p>
                <div className="hero-buttons">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    className="me-3 btn-orange"
                    onClick={() => window.open('https://www.youtube.com/watch?v=wNnTF3IMvfc', '_blank')}
                  >
                    Listen to My Music
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="lg" 
                    className="btn-outline-blue"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-image-container">
                <div className="hero-image-bg"></div>
                <img 
                  src="/assets/Mauricio Castellanos.jpg" 
                  alt="Mauricio Castellanos"
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
                <span className="text-teal"> Mauricio</span>
              </h2>
              <p className="about-text mb-4">
                Mauricio Castellanos (b. May, 23, 2001) is a trumpet player and educator from the Los Angeles area. His areas of musical interest include those of jazz, Black American music,  Latino music, and improvisational music, while also keeping an interest in jazz education. He has studied under the guidance of Dan Rosenboom, Howard Sheer, Mike Fortunato and Joshua Augiar, while receiving one off lessons from Jens Linderman and Arturo Sandoval. Castellanos has performed with notable bands such as the CSUN B and C Bands, Boyd Cannon Big Band, has led several of his own ensembles and has recorded a few soundtracks for independent films. Castellanos currently studying at California State University Northridge to recieve his single subject teaching credential.
              </p>
              <p className="about-text">
                "I am interested in the study of music and the discipline of music and the experience of music and music as a esoteric mechanism to continue my real intentions." - Anthony Braxton
              </p>
            </Col>
            <Col lg={4}>
              <div className="stats-container">
                <div className="stat-card stat-purple mb-3">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card stat-orange mb-3">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Film Soundtracks</div>
                </div>
                <div className="stat-card stat-teal">
                  <div className="stat-number">20+</div>
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
                “If the musician is illuminated from within, he becomes a lamp that lights other lamps” -Kenny Werner, “Effortless Mastery”	
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="teaching-card border-primary">
                <div className="teaching-icon bg-primary">
                  <i className="bi bi-music-note-list"></i>
                </div>
                <h3 className="teaching-title">Modern Trumpet Approach</h3>
                <p className="teaching-text">
                  The trumpet is more than just lead or solo - it's a beautiful tool and companion through life. 
                  I teach the core fundamentals (air, embouchure, tongue, fingers) while helping students 
                  discover their unique voice beyond traditional roles.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="teaching-card border-warning">
                <div className="teaching-icon bg-warning">
                  <i className="bi bi-clock-history"></i>
                </div>
                <h3 className="teaching-title">Jazz History & Lineage</h3>
                <p className="teaching-text">
                  Understanding who came before us and why we embark on this musical journey. 
                  I preserve the important lineage of jazz while acknowledging the complex stories 
                  that shape our understanding of this music's rich heritage.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="teaching-card border-success">
                <div className="teaching-icon bg-success">
                  <i className="bi bi-person-heart"></i>
                </div>
                <h3 className="teaching-title">Personal Excellence</h3>
                <p className="teaching-text">
                  Each student is as unique as jazz itself. Rather than seeking to be the world's best, 
                  I encourage students to be their personal best - a more meaningful and challenging goal 
                  that fosters deeper love for the music through discipline and self-discovery.
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
                <Card.Img variant="top" src="/assets/TheMo.png" />
                <Card.Body>
                  <Card.Title className="performance-title">The Mo</Card.Title>
                  <Card.Text className="performance-venue">Live at American Pie Records</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="/assets/RecitalHall.jpg" />
                <Card.Body>
                  <Card.Title className="performance-title">Senior Recital, 2023</Card.Title>
                  <Card.Text className="performance-venue">Cal. State University Northridge</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="https://placehold.co/290x192" />
                <Card.Body>
                  <Card.Title className="performance-title">PlaceHolder</Card.Title>
                  <Card.Text className="performance-venue">PlaceHolder</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <Card className="performance-card">
                <Card.Img variant="top" src="https://placehold.co/290x192" />
                <Card.Body>
                  <Card.Title className="performance-title">PlaceHolder</Card.Title>
                  <Card.Text className="performance-venue">PlaceHolder</Card.Text>
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
                    <p className="contact-value">mauriciocastellanostpt@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item mb-4">
                  <div className="contact-icon bg-success">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div className="contact-details">
                    <h5 className="contact-label">Phone</h5>
                    <p className="contact-value">(805) 509-8090</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon bg-purple">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h5 className="contact-label">Location</h5>
                    <p className="contact-value">Camarillo, CA</p>
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
              <div className="footer-brand">Mauricio Castellanos</div>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="social-links mb-2">
                <a 
                  href="https://www.instagram.com/maurictpt/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link me-3"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a 
                  href="https://www.youtube.com/@mauriciocastellanos6780/videos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
              <p className="footer-text">© 2024 Mauricio Castellanos. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
