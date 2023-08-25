import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import popularPhoto1 from '../../assets/img/popular-photo-1.png';
import OfferItem from '../UI/images/OfferItem';


export default function HomeProperties(props) {

  let widthViewport = window.screen.width
  let slidesToShowNum = 2

  if (widthViewport >= 1200) {
    slidesToShowNum = 3;
  } else if (widthViewport < 992) {
    slidesToShowNum = 1;
  }

  const settings = {
    dots: true,
    slidesToShow: slidesToShowNum
  };

  return (
    <section className="home-properties">
      <h2 className="h1">
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