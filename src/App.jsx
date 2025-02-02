import React from "react";
import "./App.css";
import TeamSection from "./components/TeamSection.jsx";
import PersonalDetails from "./components/PersonalDetails.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<TeamSection/>} />
      <Route path="/personal" element={<PersonalDetails />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
    <Footer/>


    </div>
  );
}

export default App;
