import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="py-0">
        <Slider
          infinite={true}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          autoplay
          centerMode
          arrows={false}
          focusOnSelect
          responsive={[
            { breakpoint: 1190, settings: { slidesToShow: 3 } },
            { breakpoint: 800, settings: { slidesToShow: 2 } },
            {
              breakpoint: 500,
              settings: { slidesToShow: 1, centerMode: true },
            },
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
