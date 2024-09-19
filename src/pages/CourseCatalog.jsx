import React from 'react';
// import HeroSection from './components/HeroSection';
// import HeroSection from "../components/HeroSection";
import CoursesAll from "../components/CoursesAll";
// import Testimonials from "../components/Testimonials";
import Offers from "../components/Offers";


const Home = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <CoursesAll />
      {/* <Testimonials /> */}
      <Offers />
      {/* Другие секции */}
    </div>
  );
};

export default Home;
