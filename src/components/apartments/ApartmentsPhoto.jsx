import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Photo1 from "../../assets/img/popular-photo-1.png";
import Photo2 from "../../assets/img/KEMPINSKI-RESIDENCES-THE-CREEK.jpg";
import Photo3 from "../../assets/img/Photo3.png";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useRef } from "react";
import { useEffect } from "react";

export default function ApartmentsPhoto(props) {
  let widthViewport = window.screen.width;
  let slidesToShowNum = 2;

  if (widthViewport >= 1200) {
    slidesToShowNum = 3;
  } else if (widthViewport < 992) {
    slidesToShowNum = 1;
  }

  const settings = {
    dots: true,
    slidesToShow: slidesToShowNum,
  };

  const offerItemsRef = useRef();

  useEffect(() => {
    var arrows = offerItemsRef.current.querySelectorAll(".slick-arrow");
    console.log(offerItemsRef.current.querySelectorAll(".slick-arrow"));
    arrows.forEach((arrow) => {
      const span = document.createElement("span");
      arrow.appendChild(span);
    });
  }, []);

  return (
    <section className="home-properties">
      <div className="offer-items" ref={offerItemsRef}>
        <Slider {...settings}>
          <Popup trigger={<img src={Photo1} alt=""  />} modal position="right center">
            <Slider dots={true} slidesToShow={1}>
              <img src={Photo1} alt="" />
              <img src={Photo2} alt="" />
              <img src={Photo3} alt="" />
              <img src={Photo2} alt="" />
            </Slider>
          </Popup>

          <Popup trigger={<img src={Photo2} alt="" />} modal position="right center">
            <Slider dots={true} slidesToShow={1}>
              <img src={Photo2} alt="" />
              <img src={Photo3} alt="" />
              <img src={Photo2} alt="" />
              <img src={Photo1} alt="" />
            </Slider>
          </Popup>

          <Popup trigger={<img src={Photo3} alt="" />} modal position="right center">
            <Slider dots={true} slidesToShow={1}>
              <img src={Photo3} alt="" />
              <img src={Photo2} alt="" />
              <img src={Photo1} alt="" />
              <img src={Photo2} alt="" />
            </Slider>
          </Popup>

          <Popup trigger={<img src={Photo2} alt="" />} modal position="right center">
            <Slider dots={true} slidesToShow={1}>
              <img src={Photo2} alt="" />
              <img src={Photo3} alt="" />
              <img src={Photo2} alt="" />
              <img src={Photo1} alt="" />
            </Slider>
          </Popup>

        </Slider>
      </div>
    </section>
  );
}
