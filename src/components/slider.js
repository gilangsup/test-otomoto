import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";

export default class SliderPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Container className="text-center">  
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1. loremis</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
        </Slider>
        </Container>
      </div>
    );
  }
}