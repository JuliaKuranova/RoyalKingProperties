import headerImage from "../assets/img/header_image.png";
import aboutPhoto from "../assets/img/about-photo.png";
import ServicesPic from "../assets/img/Services-pic.png";
import HeaderImage from "../components/UI/images/HeaderImage";
import HeaderInfo from "../components/home/HeaderInfo";
import HomeProperties from "../components/home/HomeProperties";
import Units from "../components/home/Units";
import CallMe from "../components/UI/buttons/CallMe";
import Arrow from "../components/UI/svgs/Arrow";

export default function Home() {
  return (
    <main>
      <HeaderImage img={headerImage} />
      <div className="section">
        <Units />
      </div>
      <div className="section">
        <HomeProperties />
      </div>
      <div className="AboutUs section">
        <div className="about__cont">
          <h2 className="h1">about us</h2>
          <div className="about__text">
            <p className="main-text">
              Royal Kings Properties – Premier Real Estate Agency in Dubai.
              <br />
              With exceptional service and deep market expertise, we deliver
              outstanding home and investing solutions.
            </p>
            <h4 className="h2">Why Choose Us?</h4>
            <p className="main-text">
              Royal King Properties is known for exceeding client expectations
              and achieving exceptional results in Dubai's real estate market.
              Our experienced agents provide in-depth market knowledge of luxury
              residential and commercial properties, including exclusive
              listings for discerning buyers and investors.
            </p>
          </div>
          <CallMe>MORE</CallMe>
          {/* <a href="" className="btn__more">
            <span>more</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M1.61412 24.7349L24.6654 1.68359M24.6654 1.68359H3.43396M24.6654 1.68359V22.915" stroke="white" stroke-width="2"/>
              </svg>
          </a> */}
        </div>
        <div className="about__pic">
          <img src={aboutPhoto} alt="" />
        </div>
      </div>
      <div className="services">
        <div className="services__pic">
          <img src={ServicesPic} alt="" />
        </div>
        <div className="servises-text">
          <h2 className="h1">services</h2>
          <div className="services-items">
            <a className="services-item h3">
              <div className="services__title">
                <span>01</span>Residential Property&nbsp;Sales
              </div>
              <div className="services__btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M1.75 40.25L40.25 1.75M40.25 1.75H4.78947M40.25 1.75V37.2105"
                    stroke="#F5DEB2"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </a>

            <div className="services-item h3">
              <div className="services__title">
                <span>02</span>Off-plan and&nbsp;investments
              </div>
              <div className="services__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M1.75 40.25L40.25 1.75M40.25 1.75H4.78947M40.25 1.75V37.2105"
                    stroke="#F5DEB2"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>

            <div className="services-item h3">
              <div className="services__title">
                <span>03</span>buy property for&nbsp;crypto
              </div>
              <div className="services__btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M1.75 40.25L40.25 1.75M40.25 1.75H4.78947M40.25 1.75V37.2105"
                    stroke="#F5DEB2"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>

            <div className="services-item h3">
              <div className="services__title">
                <span>04</span>relocation services
              </div>
              <div className="services__btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M1.75 40.25L40.25 1.75M40.25 1.75H4.78947M40.25 1.75V37.2105"
                    stroke="#F5DEB2"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>

            <div className="services-item h3">
              <div className="services__title">
                <span>05</span>buy property&nbsp;online
              </div>
              <div className="services__btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <path
                    d="M1.75 40.25L40.25 1.75M40.25 1.75H4.78947M40.25 1.75V37.2105"
                    stroke="#F5DEB2"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
