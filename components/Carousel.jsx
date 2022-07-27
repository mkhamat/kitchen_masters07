import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="py-10">
        <Slider
          {...settings}
          arrows
          autoplay
          centerMode
          focusOnSelect
          responsive={[
            { breakpoint: 1190, settings: { slidesToShow: 3 } },
            { breakpoint: 800, settings: { slidesToShow: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 1 } },
          ]}
        >
          <img src="/carousel1.png" alt="" />
          <img src="/carousel2.png" alt="" />
          <img src="/carousel3.png" alt="" />
          <img src="/carousel4.png" alt="" />
          <img src="/carousel1.png" alt="" />
          <img src="/carousel2.png" alt="" />
          <img src="/carousel3.png" alt="" />
          <img src="/carousel4.png" alt="" />
        </Slider>
      </div>
    );
  }
}
