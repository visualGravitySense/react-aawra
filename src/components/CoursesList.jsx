import React from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

const courses = [
  { id: 1, title: 'Маникюр', description: 'Изучите основные техники маникюра', category: 'маникюр' },
  { id: 2, title: 'Уход за волосами', description: 'Советы по уходу и стрижкам', category: 'волосы' },
  { id: 3, title: 'Макияжа', description: 'Создание идеального образа', category: 'макияж' },
  { id: 4, title: 'Маникюр', description: 'Изучите основные техники маникюра', category: 'маникюр' },
  { id: 5, title: 'Уход за волосами', description: 'Советы по уходу и стрижкам', category: 'волосы' },
  { id: 6, title: 'Макияжа', description: 'Создание идеального образа', category: 'макияж' },
  // Добавьте больше курсов по мере необходимости
];

const CourseList = () => {
  const [filter, setFilter] = React.useState('');

  const filteredCourses = courses.filter(course =>
    course.category.includes(filter)
  );

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Популярные курсы</h2>
      <Form.Group controlId="filterSelect" className="mb-4">
        <Form.Label>Фильтр по направлениям</Form.Label>
        <Form.Control
          as="select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          <option value="">Все</option>
          <option value="маникюр">Маникюр</option>
          <option value="волосы">Уход за волосами</option>
          <option value="макияж">Макияжа</option>
        </Form.Control>
      </Form.Group>
      <Row>
        {filteredCourses.map(course => (
          <Col key={course.id} md={4} className="mb-4">
            <Card className="text-center border-light" style={{ backgroundColor: '#f8f9fa' }}>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Button variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CourseList;
