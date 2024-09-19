import React from 'react';
import { Container, Card, Button, ListGroup } from 'react-bootstrap';

const CourseCard = ({ course }) => {
  return (
    <Container className="mt-5">
      <Card className="border-light">
        <Card.Img variant="top" src={course.image} alt={course.title} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>
            <strong>Описание:</strong> {course.description}
          </Card.Text>
          <Card.Text>
            <strong>Программа курса:</strong>
            <ul>
              {course.program.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Card.Text>
          <Card.Text>
            <strong>Преподаватели:</strong> {course.instructors.join(', ')}
          </Card.Text>
          <Card.Text>
            <strong>Отзывы студентов:</strong>
            <ListGroup>
              {course.reviews.map((review, index) => (
                <ListGroup.Item key={index}>
                  <strong>{review.studentName}:</strong> {review.comment}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Text>
          <Card.Text>
            <strong>Сертификаты:</strong> {course.certificates.join(', ')}
          </Card.Text>
          <Button variant="primary" className="me-2">Записаться на курс</Button>
          <Button variant="outline-secondary">Получить консультацию</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseCard;
