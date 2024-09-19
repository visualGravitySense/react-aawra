import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const offers = [
  {
    id: 1,
    title: 'Скидка 20% на курс маникюра',
    description: 'Запишитесь на курс маникюра и получите скидку 20%. Специальное предложение только до конца месяца!',
    image: 'https://via.placeholder.com/300', // Замените на URL изображения
  },
  {
    id: 2,
    title: 'Курс по уходу за волосами с бесплатной консультацией',
    description: 'Запишитесь на курс и получите бесплатную консультацию с профессионалом!',
    image: 'https://via.placeholder.com/300', // Замените на URL изображения
  },
  {
    id: 3,
    title: 'Промо на курс макияжа -50%',
    description: 'Не упустите шанс! Только сейчас курс макияжа со скидкой 50%.',
    image: 'https://via.placeholder.com/300', // Замените на URL изображения
  },
  // Добавьте больше предложений по мере необходимости
];

const Offers = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Акции и скидки</h2>
      <Row>
        {offers.map(offer => (
          <Col key={offer.id} md={4} className="mb-4">
            <Card className="text-center border-light" style={{ backgroundColor: '#f8f9fa' }}>
              <Card.Img variant="top" src={offer.image} alt={offer.title} />
              <Card.Body>
                <Card.Title>{offer.title}</Card.Title>
                <Card.Text>{offer.description}</Card.Text>
                <button className="btn btn-primary">Записаться</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Offers;
