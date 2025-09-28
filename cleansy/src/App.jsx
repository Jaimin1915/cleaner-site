import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import HashScroll from "./components/HashScroll.jsx";
import FloatingPhone from "./components/FloatingPhone.jsx";

export default function App() {
  return (
    <Router>
      <HashScroll />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>

      <Footer />

      <FloatingPhone
  tel="+1 (555) 987-6543"
  label="Talk to True Shine"
  color="#16a34a"  
  accent="rgba(22,163,74,.35)"
/>

    </Router>
  );
}
