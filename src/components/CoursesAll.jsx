import React from 'react';
import './CourseCategories.css';
import { Container, Row, Col, Card } from 'react-bootstrap';


const categories = [
  {
    id: 1,
    name: 'Маникюр',
    courses: [
      {
        id: 1,
        title: 'Курс маникюра',
        description: 'Изучите основные техники маникюра.',
        duration: '4 недели',
        price: '2000 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по маникюру
    ],
  },
  {
    id: 2,
    name: 'Уход за волосами',
    courses: [
      {
        id: 2,
        title: 'Курс по уходу за волосами',
        description: 'Советы по уходу и стрижкам.',
        duration: '6 недель',
        price: '3000 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по уходу за волосами
    ],
  },
  {
    id: 3,
    name: 'Макияж',
    courses: [
      {
        id: 3,
        title: 'Курс макияжа',
        description: 'Создание идеального образа.',
        duration: '5 недель',
        price: '2500 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по макияжу
    ],
  },
  {
    id: 4,
    name: 'Косметология',
    courses: [
      {
        id: 4,
        title: 'Основы косметологии',
        description: 'Все о кожных процедурах.',
        duration: '8 недель',
        price: '4000 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по косметологии
    ],
  },
  {
    id: 6,
    name: 'Косметология',
    courses: [
      {
        id: 6,
        title: 'Основы косметологии',
        description: 'Все о кожных процедурах.',
        duration: '8 недель',
        price: '4000 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по косметологии
    ],
  },
  {
    id: 7,
    name: 'Стрижка',
    courses: [
      {
        id: 7,
        title: 'Курс стрижки',
        description: 'Научитесь делать различные стрижки.',
        duration: '5 недель',
        price: '2500 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по стрижке
    ],
  },
  {
    id: 5,
    name: 'Стрижка',
    courses: [
      {
        id: 5,
        title: 'Курс стрижки',
        description: 'Научитесь делать различные стрижки.',
        duration: '5 недель',
        price: '2500 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по стрижке
    ],
  },
  {
    id: 8,
    name: 'Стрижка',
    courses: [
      {
        id: 8,
        title: 'Курс стрижки',
        description: 'Научитесь делать различные стрижки.',
        duration: '5 недель',
        price: '2500 ₽',
        image: 'https://via.placeholder.com/300',
      },
      // Добавьте другие курсы по стрижке
    ],
  },
];

const CoursesAll = () => {
  return (
    <Container className="mt-5">
      
      <h2 className="text-center mb-4">Курсы по категориям</h2>
      {categories.map(category => (
        <div key={category.id} className="mb-5">
          <h3>{category.name}</h3>
          <Row>
            {category.courses.map(course => (
              <Col key={course.id} md={4} className="mb-4">
                <Card className="text-center border-light" style={{ backgroundColor: '#f8f9fa' }}>
                  <Card.Img variant="top" src={course.image} alt={course.title} />
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <div>
                      <strong>Длительность:</strong> {course.duration}<br />
                      <strong>Цена:</strong> {course.price}
                    </div>
                    <button className="btn btn-primary mt-2">Записаться</button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default CoursesAll;
