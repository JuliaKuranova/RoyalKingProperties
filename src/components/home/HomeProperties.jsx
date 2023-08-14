import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import popularPhoto1 from '../../assets/img/popular-photo-1.png';
import OfferItem from '../UI/images/OfferItem';


export default function HomeProperties(props) {

  let widthViewport = window.screen.width
  let slidesToShowNum = 1

  if (widthViewport >= 992) {
    slidesToShowNum = 2;
  } else if (widthViewport >= 1200) {
    slidesToShowNum = 3;
  }


  const settings = {
    dots: true,
    slidesToShow: slidesToShowNum
  };

  return (
    <section className="home-properties">
      <h2 class="h1">
        FEATURED PROPERTIES IN DUBAI
      </h2>

      <div className='offer-items'>
        <Slider
          {...settings}
        >
          <OfferItem
            img={popularPhoto1}
            tags={['hello', 'world', 'duck', 'test']}
            title={'1 000 000 AED'}
            description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
          />
          <OfferItem
            img={popularPhoto1}
            tags={['hello', 'world', 'duck', 'test']}
            title={'2 000 000 AED'}
            description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
          />
          <OfferItem
            img={popularPhoto1}
            tags={['hello', 'world', 'duck', 'test']}
            title={'3 000 000 AED'}
            description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
          />
          <OfferItem
            img={popularPhoto1}
            tags={['hello', 'world', 'duck', 'test']}
            title={'3 000 000 AED'}
            description='aKempinski Residences The Creek, Dubai Healthcare City Phase 2, Al Jaddaf, Dubai'
          />
        </Slider>
      </div>
    </section>
  );
}