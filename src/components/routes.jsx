import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './home/homePage.component';
import About from './about/about.component';

const AllRoutes = () => {
  return ( 
    <>
      <Router>
        <>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<About />} />
          </Routes>
        </>
      </Router>
    </>
   );
}
 
export default AllRoutes;