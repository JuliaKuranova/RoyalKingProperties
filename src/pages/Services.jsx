import RegisterForm from '../components/forms/RegisterForm';
import Map from '../components/UI/images/Map';
import photo from '../assets/img/services-photo-relocation.png'
import photoWomen from '../assets/img/photo-women.png'
import photo2 from '../assets/img/Photo-2.png'
import photo3 from '../assets/img/Photo-3.png'
import photo5 from '../assets/img/Photo-5.png'


export default function Services() {
  return (
    <main className="services-page">
      <div className="services__content section">
        <h1 className='h1'>Services</h1>
        <div className="services__items">
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>01</span>Residential Property Sales
              </div>
              <div className="main-text ">
              Our experienced agents specialize in residential property sales, offering a wide range of options to suit your preferences. From luxurious apartments to exquisite villas, we have an extensive selection of properties for you to explore.<br></br>Trust us to guide you through the process, ensuring a smooth and successful transaction that gets you the best possible price.
              </div>
            </div>
            <img src={photoWomen} alt="photo Women" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>02</span>Off-Plan and Investment Opportunities
              </div>
              <div className="main-text ">
              Unlock the profits of Dubai’s real estate market with our exclusive access to off-plan projects and investment opportunities. Whether you are an investor seeking high returns or a homebuyer looking for a future residence, our team will assist you in identifying the best today options. By securing properties at attractive prices before completion, you will maximize your investment potential and benefit from Dubai’s thriving property market.
              </div>
            </div>
            <img src={photo2} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>03</span>Buy Property with Crypto
              </div>
              <div className="main-text ">
              As a cryptocurrency-friendly real estate agency, we offer a secure and convenient way to buy properties using digital currencies. We’ll take care of the transaction process, combining the potential of real estate investments with the efficiency and no-trace security of cryptocurrency transactions. Let us help you navigate this exciting opportunity.
              </div>
            </div>
            <img src={photo3} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>04</span>Relocation Services in DubaI
              </div>
              <div className="main-text ">
              Planning to relocate to Dubai? Our dedicated relocation services are designed to make your transition seamless and stress-free. Our experienced team will assist you in finding the perfect home that matches your preferences, budget, and lifestyle. We understand the importance of settling into a new community, and we provide guidance on schools, amenities, and local attractions to help you acclimate to your new surroundings. Trust us to handle the logistics, and legalization while you focus on starting your new chapter in Dubai.
              </div>
            </div>
            <img src={photo} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>05</span>Buy Property Online
              </div>
              <div className="main-text ">
              We understand that convenience is key in today’s digital age. That’s why we offer a seamless online property buying experience. Our user-friendly platform provides access to extensive online listings, complete with detailed descriptions, high-quality images, and virtual tours. You can filter and compare properties based on your preferences, saving you valuable time and effort. With our online buying process, you can find and secure your desired property from anywhere in the world.
              </div>
            </div>
            <img src={photo5} alt="" />
          </div>
        </div>
      </div>

      <section className='contacts__form section'>
        <div className="map__box">
          <Map />
        </div>
        <RegisterForm title='request a call'></RegisterForm>
      </section>
    </main>
  );
}

