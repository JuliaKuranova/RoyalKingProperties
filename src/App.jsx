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



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      {/* <Apartments /> */}
      {/* <Project /> */}

      <Footer />
    </div>
  );
}

export default App;
