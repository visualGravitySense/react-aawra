import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const testimonials = [
  {
    id: 1,
    name: 'Анастасия',
    photo: 'https://via.placeholder.com/100', // Замените на URL изображения
    review: 'Курс по маникюру был замечательным! Очень полезные советы и практические занятия.',
  },
  {
    id: 2,
    name: 'Елена',
    photo: 'https://via.placeholder.com/100', // Замените на URL изображения
    review: 'Уход за волосами — это то, что мне действительно нужно было. Рекомендую всем!',
  },
  {
    id: 3,
    name: 'Мария',
    photo: 'https://via.placeholder.com/100', // Замените на URL изображения
    review: 'Курс по макияжу просто отличный! Много нового и интересного.',
  },
  {
    id: 4,
    name: 'Анастасия',
    photo: 'https://via.placeholder.com/100', // Замените на URL изображения
    review: 'Курс по маникюру был замечательным! Очень полезные советы и практические занятия.',
  },
  {
    id: 5,
    name: 'Елена',
    photo: 'https://via.placeholder.com/100', // Замените на URL изображения
    review: 'Уход за волосами — это то, что мне действительно нужно было. Рекомендую всем!',
  },
  {
    id: 6,
    name: 'Мария',
    photo: 'https://via.placeholder.com/100', // Замените на URL изображения
    review: 'Курс по макияжу просто отличный! Много нового и интересного.',
  },
  // Добавьте больше отзывов по мере необходимости
];

const Testimonials = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Отзывы участников курсов</h2>
      <Row>
        {testimonials.map(testimonial => (
          <Col key={testimonial.id} md={4} className="mb-4">
            <Card className="text-center border-light" style={{ backgroundColor: '#f8f9fa' }}>
              <Card.Img variant="top" src={testimonial.photo} alt={testimonial.name} className="rounded-circle mx-auto" style={{ width: '100px', height: '100px' }} />
              <Card.Body>
                <Card.Text>"{testimonial.review}"</Card.Text>
                <Card.Title>{testimonial.name}</Card.Title>
                <Button variant="primary-sec">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonials;
