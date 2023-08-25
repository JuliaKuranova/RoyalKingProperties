// import logo from '../../../assets/img/logo.svg';
// import logoText from '../../../assets/img/logoText.svg';
import logoMob from '../../../assets/img/logo/Logo-mob.svg'; 
import logoDesk from '../../../assets/img/logo/Logo-desk.svg';


export default function Logo() {

  return (

        // <div className='header__logo'>
        //   <img src={logo} alt="" />
        //   <img src={logoText}  className='logoText' alt="" />
        // </div>

        <a className='logo' href='./home'>
          <img src={logoMob} className='logoMob' alt="" />
          <img src={logoDesk}  className='logoDesk' alt="" />
        </a>
        
  );
}