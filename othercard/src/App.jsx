import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
function App() {
  
  return (
    <>
         
          <Router>
              <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/AboutUs" element={<AboutUs />} />
                  <Route path="/ContactUs" element={<ContactUs />} />
              </Routes>
          </Router>
    </>
  )
}

export default App
