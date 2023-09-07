import sliaderImg1 from "../assets/img/sliders/BURJ-BINGHATTI-JACOB-&-CO-RESIDENCES.jpg";
import sliaderImg2 from "../assets/img/KEMPINSKI-RESIDENCES-THE-CREEK.jpg";
import ApartmentsItems from "../components/apartments/ApartmentsItems";
import HeaderImage from "../components/UI/images/HeaderImage";

// import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Apartments() {
  const settings = {
    dots: true,
    slidesToShow: 1,
    // arrows: false
    autoplay: true,
    autoplaySpeed: 8000,
  };

  // play() {
  //   this.slider.slickPlay();
  //   this.play = this.play.bind(this);
  // }

  return (
    <>
      <section className="apartments__banner section">
        <Slider {...settings}>
          <HeaderImage img={sliaderImg1} />
          <HeaderImage img={sliaderImg2} />
        </Slider>
      </section>
      <main>
        <ApartmentsItems />
      </main>
    </>
  );
}
