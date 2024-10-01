import React from "react";
import './style.css';
import Navbar from './Navbar.jsx';
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

import About from './About.jsx';
import Contact from "./Contact.jsx";
import FAQ from "./FAQ.jsx";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";



export default function App(){
    return(
        <>
         <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path="/"element={<Home></Home>}></Route>
            <Route path="/about"element={<About></About>}></Route>
            <Route path="/faqs"element={<FAQ></FAQ>}></Route>
            <Route path="/contact"element={<Contact></Contact>}></Route>
            
          </Routes>
            <Footer></Footer>  
        </Router> 
       
          
        </>
    )
}