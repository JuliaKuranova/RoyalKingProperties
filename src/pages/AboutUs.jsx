import headerImage from '../assets/img/header_image.png';
import HeaderImage from '../components/UI/images/HeaderImage';
import RegisterForm from '../components/forms/RegisterForm';
import Map from '../components/UI/images/Map';

export default function AboutUs() {
  return (
    <main className="about-us">
      <div className="about-us__banner">
        <HeaderImage img={headerImage} />
      </div>
      <div className='about-us__info section'>
        <p className='main-text'>Welcome to Royal King Properties, the premier real estate agency in Dubai. With our unwavering commitment to excellence, exceptional service, and in-depth market expertise, we have established ourselves as a trusted leader in the industry.</p>
        <div className="">
          <h2 className='h3'>Why Choose Us?</h2>
          <p className='main-text'><span>Leading Real Estate Agency in Dubai.</span> As a top-rated and highly recommended real estate agency, Royal King Properties has a proven track record of delivering exceptional results.</p>
          <p className='main-text'><span>Leading Real Estate Agency in Dubai.</span> As a top-rated and highly recommended real estate agency, Royal King Properties has a proven track record of delivering exceptional results.</p>
          <p className='main-text'><span>Leading Real Estate Agency in Dubai.</span> As a top-rated and highly recommended real estate agency, Royal King Properties has a proven track record of delivering exceptional results.</p>
          <p className='main-text'><span>Luxury Property Specialists. </span> Royal King Properties specializes in luxury properties for high-end buyers and investors. We provide access to exclusive listings and ultra-personalized services tailored to the discerning tastes of luxury real estate clients.</p>
        </div>
        <div className="">
          <h2 className='h3'>Contact Royal King Properties - Your Trusted Real Estate Partner</h2>
          <p className='main-text'>Choose Royal King Properties as your trusted real estate partner in Dubai. Benefit from our deep market insights, personalized service, and access to exclusive properties. Contact us today to start a successful real estate journey with Royal King Properties.</p>
        </div>
      </div>
      <section className='contacts__form section'>
        <Map />
        <RegisterForm title='request a call'></RegisterForm>
      </section>
    </main>
  );
}
