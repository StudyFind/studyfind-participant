import React, { Component } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Person from "./person";
import yohan from "./headshots/yohan.jpg";
import andrew from "./headshots/andrew.jpg";
import vir from "./headshots/vir.png";

export default class Slider1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="slides">
        <Slider {...settings}>
          <div>
            <Person
              name="Yohan Jhaveri"
              pic={yohan}
              title="Co-Founder"
              organization="StudyFind"
              linkedin="https://www.linkedin.com/in/yohanjhaveri/ "
            />
          </div>
          <div>
            <Person
              name="Andrew Garcia"
              pic={andrew}
              title="Co-Founder"
              organization="StudyFind"
              linkedin="https://www.linkedin.com/in/andrew-garcia-almeida/"
            />
          </div>
          <div>
            <Person
              name="Vir Mittal"
              pic={vir}
              title="Co-Founder"
              organization="StudyFind"
              linkedin="https://www.linkedin.com/in/vir-m-1b1981130/ "
            />
          </div>
        </Slider>
      </div>
    );
  }
}
