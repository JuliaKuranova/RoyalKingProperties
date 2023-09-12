import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import logo from '../../assets/img/logo.svg';
// import logoText from '../../assets/img/logoText.svg';
// import whatsApp from "../../assets/img/WhatsApp.svg";
import MenuItem from "../UI/text/MenuItem";
import Logo from "../UI/images/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  const screenWidth = window.screen.width;
  const [isActive, setIsActive] = useState(false);
  const [displayNav, setDisplayNav] = useState(screenWidth >= 992);
  const location = useLocation();
  console.log(location)

  const display = screenWidth >= 992 ? "flex" : displayNav ? "block" : "none";
  // const [navBg, setNavBg] = useState(false);

  const onBurgerClick = () => {
    if (isActive) {
      setIsActive(false);
      setTimeout(() => setDisplayNav(false), 300);
    } else {
      setDisplayNav(true);
      setTimeout(() => setIsActive(true), 0);
    }
  };



  // window.onscroll = function (e) {
  //   setNavBg(window.scrollY > 10)
  // }

  return (
    // <header className={`header ${navBg ? 'show-bg' : ''}`}>
    <header className="header">
      <div className={`header__up ${isActive ? "active" : ""}`}>
        <Logo />
        <div className="header__right-icons">
          <a
            className={`whatsapp-image ${isActive ? "active" : ""}`}
            href="tel:+971 54 547 7732"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_901_4962)">
                <path
                  d="M23.6785 18.2841C23.6161 18.2542 21.2833 17.1054 20.8687 16.9563C20.6995 16.8955 20.5182 16.8362 20.3253 16.8362C20.0103 16.8362 19.7457 16.9931 19.5396 17.3015C19.3065 17.6479 18.6011 18.4725 18.3831 18.7189C18.3546 18.7514 18.3158 18.7902 18.2925 18.7902C18.2716 18.7902 17.9106 18.6416 17.8013 18.5941C15.2987 17.507 13.3992 14.8929 13.1387 14.452C13.1015 14.3887 13.1 14.3599 13.0997 14.3599C13.1088 14.3263 13.193 14.242 13.2364 14.1984C13.3635 14.0727 13.5011 13.907 13.6343 13.7467C13.6974 13.6707 13.7606 13.5947 13.8226 13.523C14.0158 13.2982 14.1019 13.1236 14.2016 12.9214L14.2539 12.8164C14.4974 12.3326 14.2894 11.9243 14.2222 11.7924C14.167 11.6821 13.182 9.30472 13.0772 9.05496C12.8254 8.45225 12.4926 8.17163 12.0302 8.17163C11.9873 8.17163 12.0302 8.17163 11.8502 8.17922C11.6311 8.18846 10.4379 8.34555 9.91027 8.67812C9.35079 9.03085 8.4043 10.1552 8.4043 12.1326C8.4043 13.9122 9.53365 15.5925 10.0185 16.2316C10.0306 16.2477 10.0527 16.2804 10.0848 16.3274C11.9418 19.0393 14.2567 21.049 16.6034 21.9865C18.8626 22.8889 19.9324 22.9932 20.5406 22.9932H20.5407C20.7963 22.9932 21.0009 22.9732 21.1813 22.9554L21.2958 22.9445C22.0763 22.8753 23.7914 21.9866 24.1815 20.9024C24.4889 20.0485 24.5699 19.1155 24.3654 18.7769C24.2254 18.5467 23.984 18.4309 23.6785 18.2841Z"
                  fill="white"
                />
                <path
                  d="M16.284 -0.103516C7.61743 -0.103516 0.566625 6.8943 0.566625 15.4958C0.566625 18.2778 1.31114 21.001 2.72153 23.3844L0.0220018 31.3475C-0.0282839 31.496 0.00911872 31.6601 0.118937 31.7719C0.19821 31.8528 0.305742 31.8965 0.41556 31.8965C0.457638 31.8965 0.500028 31.8901 0.541378 31.877L8.84475 29.2384C11.117 30.4524 13.6851 31.0933 16.2841 31.0933C24.9499 31.0934 32 24.0963 32 15.4958C32 6.8943 24.9499 -0.103516 16.284 -0.103516ZM16.284 27.8439C13.8384 27.8439 11.4697 27.1377 9.43353 25.8016C9.36507 25.7566 9.28559 25.7336 9.20559 25.7336C9.1633 25.7336 9.12091 25.74 9.07966 25.7531L4.92018 27.0753L6.26294 23.1138C6.30637 22.9856 6.28465 22.8442 6.20465 22.7349C4.65411 20.6163 3.83447 18.1131 3.83447 15.4958C3.83447 8.6861 9.4193 3.14594 16.2839 3.14594C23.1477 3.14594 28.7319 8.6861 28.7319 15.4958C28.732 22.3046 23.1479 27.8439 16.284 27.8439Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_901_4962">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          <div
            className={`menu-btn ${isActive ? "active" : ""}`}
            onClick={onBurgerClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`header__nav ${isActive ? "active" : ""}`}
        style={{ display }}
      >
        <nav>
          <Link to="/" className="header__nav__item">
            <MenuItem active={location.pathname === "/"}>
              PROPERTIES
            </MenuItem>
          </Link>

          <Link to="/services" className="header__nav__item">
            <MenuItem active={location.pathname === "/services"}>
              SERVICES
            </MenuItem>
          </Link>

          <Link to="/about-us" className="header__nav__item">
            <MenuItem active={location.pathname === "/about-us"}>
              ABOUT US
            </MenuItem>
          </Link>

          <Link to="/contacts" className="header__nav__item">
            <MenuItem active={location.pathname === "/contacts"}>
              CONTACTS
            </MenuItem>
          </Link>
        </nav>
      </div>
    </header>
  );
}
