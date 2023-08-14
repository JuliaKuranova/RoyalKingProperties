import instagram from '../../../assets/img/Instagram.svg';
import whatsApp from '../../../assets/img/WhatsApp.svg';
import telegram from '../../../assets/img/Telegram.svg';

export default function SocialLinks() {
  return (
        <div className="social-links">
            <a href="">
            <img src={instagram} alt="Instagram" />
            </a>
            <a href="">
            <img src={whatsApp} alt="WhatsApp" />
            </a>
            <a href="">
            <img src={telegram} alt="Telegram" />
            </a>
        </div>

  );
}