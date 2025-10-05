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
  tel="+61 432 300 733"
  label="Talk to True Shine"
  color="#16a34a"
  accent="rgba(22,163,74,.35)"
  chat={{
    whatsapp: { text: "Hi True Shine! I’d like to book a clean." },
    sms: { body: "Hello True Shine, can we chat about a quote?" },
    link: "/contact",                 // or an external chat URL if you use Intercom/LiveChat
    email: "hello@trueshine.au",      // optional fallback
    label: "Chat with us",            // optional
  }}
/>

    </Router>
  );
}
