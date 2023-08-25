import logoDesk from "../../assets/img/logo/Logo-desk.svg";
import SocialLinks from "../UI/images/SocialLinks";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer__wrapper">
        <a href=".home">
          <img
            src={logoDesk}
            className="footerLogo"
            alt="Royal King Properties"
          />
        </a>

        <div className="footer-menu">
          <SocialLinks />
          <a className="h2" href="tel:+971545477732" title="+971 54 547 7732">
            +971 54 547 7732
          </a>
          <ul className="footer-menu-items h2">
            <li>
              <a href="">Properties</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-notes hints">
          <Link to="/privacy-policy">
            Privacy policy
          </Link>
          
          <div>© 2023 Royal King Properties. All rights reserved</div>
          <div>Designed by Gleb Kossov</div>
        </div>
      </div>
    </footer>
  );
}
