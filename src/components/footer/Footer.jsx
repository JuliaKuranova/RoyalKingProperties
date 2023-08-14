import logoDesk from '../../assets/img/logo/Logo-desk.svg'

import SocialLinks from '../UI/images/SocialLinks';

export default function Footer() {
  return (
    <footer>
        <div class="footer__wrapper">
        <img src={logoDesk} className='footerLogo' alt="Royal King Properties" />

          <div class="footer-menu">
            <SocialLinks />
            <a class="h2" href="tel:+971545477732" title="+971 54 547 7732">+971 54 547 7732</a>
            <ul class="footer-menu-items h2">
                <li><a href="">Properties</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
          </div>
          <div class="footer-notes hints">
            <a href="">Privacy policy</a>
            <div>© 2023 Royal King Properties. All rights reserved</div>
            <div>Designed by Gleb Kossov</div>
          </div>
        </div>
      </footer>
  );
}