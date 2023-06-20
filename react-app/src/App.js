import{ BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Login from "./components/login/login";


const App = () => {
  return (
       <div className="app">
     
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} ></Route>
    <Route path="/about" element={<About />} ></Route>
    <Route path="/contact" element={<Contact />} ></Route>
    <Route path="/login" element={<Login />} ></Route>
  </Routes>
  </BrowserRouter>
     <Home />
     <About />
     <Contact />
     <Login />
     
      </div>
   
  );
}

export default App;;
