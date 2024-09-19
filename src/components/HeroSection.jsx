import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section w-100 d-flex align-items-center ">
      <Container fluid className="p-0 ">
        <Row className="align-items-center w-100">
          <Col md={6} className="text-center text-md-start">
            <div className="hero-text">
              <h1>Discover New Beauty Trends</h1>
              <p className="hero-subtitle">
                Each course is designed to help you master beauty techniques and trends with ease.
              </p>
              <Button variant="dark" className="hero-btn">Explore Courses</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <div className="hero-image">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Beauty Model" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
