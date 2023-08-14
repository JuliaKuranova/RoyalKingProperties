import RegisterForm from '../components/forms/RegisterForm';
import Map from '../components/UI/images/Map';
import photo from '../assets/img/services-photo-relocation.png'


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
                Our experienced agents specialize in residential property sales, offering a wide range of options to suit your preferences. From luxurious apartments to exquisite villas, we have an extensive selection of properties for you to explore.Trust us to guide you through the process, ensuring a smooth and successful transaction that gets you the best possible price.
              </div>
            </div>
            <img src={photo} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>02</span>Residential Property Sales
              </div>
              <div className="main-text ">
                Our experienced agents specialize in residential property sales, offering a wide range of options to suit your preferences. From luxurious apartments to exquisite villas, we have an extensive selection of properties for you to explore.Trust us to guide you through the process, ensuring a smooth and successful transaction that gets you the best possible price.
              </div>
            </div>
            <img src={photo} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>03</span>Residential Property Sales
              </div>
              <div className="main-text ">
                Our experienced agents specialize in residential property sales, offering a wide range of options to suit your preferences. From luxurious apartments to exquisite villas, we have an extensive selection of properties for you to explore.Trust us to guide you through the process, ensuring a smooth and successful transaction that gets you the best possible price.
              </div>
            </div>
            <img src={photo} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>04</span>Residential Property Sales
              </div>
              <div className="main-text ">
                Our experienced agents specialize in residential property sales, offering a wide range of options to suit your preferences. From luxurious apartments to exquisite villas, we have an extensive selection of properties for you to explore.Trust us to guide you through the process, ensuring a smooth and successful transaction that gets you the best possible price.
              </div>
            </div>
            <img src={photo} alt="" />
          </div>
          <div className="services__box">
            <div className="services__item">
              <div className="h3">
                <span>05</span>Residential Property Sales
              </div>
              <div className="main-text ">
                Our experienced agents specialize in residential property sales, offering a wide range of options to suit your preferences. From luxurious apartments to exquisite villas, we have an extensive selection of properties for you to explore.Trust us to guide you through the process, ensuring a smooth and successful transaction that gets you the best possible price.
              </div>
            </div>
            <img src={photo} alt="" />
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

