import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetail from './pages/CourseDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coursecatalog" element={<CourseCatalog />} />
        {/* <Route path="/courses/:id" element={<CourseDetail />} /> */}
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
