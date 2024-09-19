import React from 'react';
// import HeroSection from './components/HeroSection';
// import HeroSection from "../components/HeroSection";
import CoursesAll from "../components/CoursesAll";
import CourseCard from "../components/CourseCard";
import Offers from "../components/Offers";

const courseExample = {
  title: 'Курс маникюра',
  description: 'Изучите основные техники маникюра.',
  program: ['Основы маникюра', 'Дизайн ногтей', 'Гигиенические процедуры', 'Работа с клиентами'],
  instructors: ['Анна Иванова', 'Светлана Петрова'],
  reviews: [
    { studentName: 'Ирина', comment: 'Отличный курс, много полезной информации!' },
    { studentName: 'Елена', comment: 'Преподаватели очень опытные.' },
  ],
  certificates: ['Сертификат маникюра', 'Сертификат по дизайну ногтей'],
  image: 'https://via.placeholder.com/600',
};

// Используйте компонент




const Home = () => {
  return (
    <div>
      <CourseCard course={courseExample} />
      {/* <HeroSection /> */}
      <CoursesAll />
      {/* <Testimonials /> */}
      <Offers />
      {/* Другие секции */}
    </div>
  );
};

export default Home;
