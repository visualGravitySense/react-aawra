import React from 'react';
import { Card } from 'react-bootstrap';

const CourseCard = ({ course }) => {
  return (
    <Card className="text-center border-light" style={{ backgroundColor: '#f8f9fa' }}>
      <Card.Img variant="top" src={course.image} alt={course.title} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <div>
          <strong>Длительность:</strong> {course.duration}<br />
          <strong>Цена:</strong> {course.price}<br />
          <strong>Рейтинг:</strong> {course.rating} ⭐
        </div>
        <button className="btn btn-primary mt-2">Записаться</button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
