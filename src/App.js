import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">MC Jazz Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <h1 className="display-4 fw-bold mb-4">Welcome to MC Jazz Site</h1>
              <p className="lead mb-4">
                A modern React website built with Bootstrap components. 
                Ready to customize and make it your own!
              </p>
              <Button variant="primary" size="lg" className="me-3">
                Get Started
              </Button>
              <Button variant="outline-primary" size="lg">
                Learn More
              </Button>
            </Col>
            <Col lg={6}>
              <div className="hero-image">
                <div className="placeholder-image">
                  <h3>Your Image Here</h3>
                  <p>Replace with your content</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5">Features</h2>
              <p className="lead">What makes this site special</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="bi bi-bootstrap" style={{fontSize: '3rem', color: '#0d6efd'}}></i>
                  </div>
                  <Card.Title>Bootstrap Ready</Card.Title>
                  <Card.Text>
                    Built with Bootstrap 5 and React Bootstrap components for rapid development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="bi bi-phone" style={{fontSize: '3rem', color: '#198754'}}></i>
                  </div>
                  <Card.Title>Responsive Design</Card.Title>
                  <Card.Text>
                    Fully responsive layout that works perfectly on all devices and screen sizes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="bi bi-lightning" style={{fontSize: '3rem', color: '#ffc107'}}></i>
                  </div>
                  <Card.Title>Fast & Modern</Card.Title>
                  <Card.Text>
                    Built with modern React and optimized for performance and user experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>MC Jazz Site</h5>
              <p>A React website with Bootstrap</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>&copy; 2025 MC Jazz Site. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
