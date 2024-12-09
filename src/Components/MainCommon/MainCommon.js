import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from '../Client/Navigation/Navigation';
import HomePage from '../Client/HomePage/HomePage';
import ContactPage from '../Client/ContactPage/ContactPage';
import AboutUs from '../Client/AboutUs/AboutUs';
const MainCommon = () => {
   return (
      <>
         <div>
            <Router>
               <Routes>
                  <Route path='' element={<Navigation/>}>
                     <Route path='' element={<HomePage />} />
                     <Route path='contact' element={<ContactPage />} />
                     <Route path='about' element={<AboutUs />} />
                  </Route>                  
               </Routes>
            </Router>
         </div>
      </>
   )
}

export default MainCommon