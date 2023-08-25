import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Apartments from './pages/Apartments';
import Project from './pages/Project';
import ApartmentPage from './pages/ApartmentPage';
// import Filter from './components/filter/Filter';
import PrivacyPolicy from './pages/PrivacyPolicy';




function App() {
  return (
    <div className="App">
      <Header />

      <Routes> 
        <Route path='/services' element={<Services />} /> 
        <Route path='/about-us' element={<AboutUs />} /> 
        <Route path='/contacts' element={<Contacts />} /> 
        <Route path='*' element={<Home />} /> 

        <Route path='/project' element={<Project />} /> 
        <Route path='/apartment-page' element={<ApartmentPage />} /> 
        <Route path='/apartments' element={<Apartments />} /> 
        <Route path='/privacy-policy' element={<PrivacyPolicy />} /> 
      </Routes>
      {/* <Filter /> */}

      <Footer />
    </div>
  );
}

export default App;
