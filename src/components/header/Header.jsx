import { useEffect, useState } from 'react';
// import logo from '../../assets/img/logo.svg';
// import logoText from '../../assets/img/logoText.svg';
import whatsApp from '../../assets/img/WhatsApp.svg';
import MenuItem from '../UI/text/MenuItem';
import Logo from '../UI/images/Logo';
import { Link } from 'react-router-dom';


export default function Header() {
  const screenWidth = window.screen.width;
  const [isActive, setIsActive] = useState(false);
  const [displayNav, setDisplayNav] = useState(screenWidth >= 992);

  const display = screenWidth >= 992 ? 'flex' : (displayNav ? 'block' : 'none');

  const onBurgerClick = () => {
    if (isActive) {
      setIsActive(false);
      setTimeout(() => setDisplayNav(false), 300);
    } else {
      setDisplayNav(true);
      setTimeout(() => setIsActive(true), 0);
    }
  };

  return (
    <header className="header">
      <div className={`header__up ${isActive ? 'active' : ''}`}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" fill="none">
              <path d="M19.25 7.79297L5.25 21.793M5.25 21.793L19.25 35.793M5.25 21.793L35 21.793" stroke="white" stroke-width="2" />
            </svg> */}
        <Logo />
        <div className='header__right-icons'>
          <div className={`whatsapp-image ${isActive ? 'active' : ''}`}>
            <img src={whatsApp} alt="" />
          </div>
          <div className={`menu-btn ${isActive ? 'active' : ''}`} onClick={onBurgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={`header__nav ${isActive ? 'active' : ''}`} style={{ display }}>
        <ul>
          <Link to='/'><MenuItem>PROPERTIES</MenuItem></Link>
          <Link to='/services'><MenuItem>SERVICES</MenuItem></Link>
          <Link to='/about-us'><MenuItem>ABOUT US</MenuItem></Link>
          <Link to='/contacts'><MenuItem>CONTACTS</MenuItem></Link>
        </ul>
      </div>
    </header>
  );
}