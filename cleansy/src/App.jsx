import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import React from "react";
import HashScroll from "./components/HashScroll.jsx"; 

const App = () => {
  return (
    <Router>
      
      <HashScroll />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
