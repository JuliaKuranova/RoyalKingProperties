import sliaderImg1 from '../assets/img/sliders/BURJ-BINGHATTI-JACOB-&-CO-RESIDENCES.jpg';
import sliaderImg2 from '../assets/img/KEMPINSKI-RESIDENCES-THE-CREEK.jpg';
import ApartmentsItems from '../components/apartments/ApartmentsItems';
import HeaderImage from '../components/UI/images/HeaderImage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Apartments() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    arrows: false
  };

  return (
      <main>
        <section className="apartments__banner section">
          <Slider {...settings}>
            <HeaderImage img={sliaderImg1} />
            <HeaderImage img={sliaderImg2} />
          </Slider>
        </section>
        <ApartmentsItems />
      </main>
  );
}