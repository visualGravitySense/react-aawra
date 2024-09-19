import React from 'react';
// import HeroSection from './components/HeroSection';
import HeroSection from "../components/HeroSection";
import CoursesList from "../components/CoursesList";
import Testimonials from "../components/Testimonials";
import Offers from "../components/Offers";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <CoursesList />
      <Testimonials />
      <Offers />
      {/* Другие секции */}
    </div>
  );
};

export default Home;
