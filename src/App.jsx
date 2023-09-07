import "./styles/index.scss";
// import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Apartments from "./pages/Apartments";
import Project from "./pages/Project";
import ApartmentPage from "./pages/ApartmentPage";
import Filter from "./components/filter/Filter";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

function App() {
  return (
    <div className="App">
      <Header />

      <ScrollToTop>
        <Routes>
          <Route path="/services" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />

          <Route path="/project" element={<Project />} />
          <Route path="/apartment-page" element={<ApartmentPage />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </ScrollToTop>
      {/* <Filter /> */}

      <Footer />
    </div>
  );
}

export default App;
