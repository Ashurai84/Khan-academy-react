import React, { useState } from "react";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Stats from "./components/Stats.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Footer from "./components/Footer.jsx";


import Subjects from "./components/subject.jsx";

import { Routes, Route, Link } from "react-router-dom";


import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Home from "./pages/Home.jsx";
import AxiosProblem from "./Axios-problem/axios.jsx";
import AxiosAsync from "./Axios-problem/Axiox-async.jsx";
import Todos from "./Components/Todos.jsx";

import { Menu, X } from "lucide-react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Routes>
      <Route path="/axios" element={<AxiosProblem />} />
      <Route path="/photos" element={<AxiosAsync />} />
      <Route path="/todos" element={<Todos />} />
      
      <Route path="/*" element={
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <svg className="logo" aria-hidden="true" width="176px" height="28px" viewBox="0 0 176 28">
              </svg>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/axios" className="text-[#1865f2] hover:text-teal-600 transition-colors">
                Axios Demo
              </Link>
              <Link to="/photos" className="text-[#1865f2] hover:text-teal-600 transition-colors">
                Photos
              </Link>
              <Link to="/todos" className="text-[#1865f2] hover:text-teal-600 transition-colors">
                Redux Todos
              </Link>
              <Link to="/donate" className="text-[#1865f2] hover:text-teal-600 transition-colors">
                Donate
              </Link>
              <button className="text-[#1865f2] font-semibold hover:text-teal-700 transition-colors">
                Log in
              </button>
              <button className="bg-[#1865f2] text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-700 transition-colors">
                Sign up
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 ww-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link to="/donate" className="block text-gray-700 hover:text-teal-600">
                Donate
              </Link>
              <button className="block w-full text-left text-teal-600 font-semibold">
                Log in
              </button>
              <button className="block w-full bg-teal-600 text-white px-6 py-2 rounded-md font-semibold">
                Sign up
              </button>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <Stats />
        <Features />
        <Subjects />
        <Testimonial />
      </main>

      <Footer />
    </div>
      } />
    </Routes>
  );
}

// Main App with Khan Academy style
export default App;

/* Simple Nav version with Axios - commented out
function AppWithNav() {
  return (
    <div> 
      <nav style={{ display:"flex", gap:"1rem", padding:"1rem", background:"#0f0f0f" }}>
        <Link to="/" style={{color:"white"}}>Home</Link>
        <Link to="/about" style={{color:"white"}}>About</Link>
        <Link to="/contact" style={{color:"white"}}>Contact</Link>
        <Link to="/axios" style={{color:"white"}}>Axios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/axios" element={<AxiosProblem />} />
      </Routes>
    </div>
  );
}
*/
