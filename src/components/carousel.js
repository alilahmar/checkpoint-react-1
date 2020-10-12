import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Fisrtpic from "./source/pexels1.jpg";
import Secpic from "./source/pexels2.jpg";
import Thirdpic from "./source/pexels3.jpg";

// import React from 'react'

export default function Carousel1() {
  return (
    <Carousel interval="1000">
      <Carousel.Item>
        <img className="d-block w-100" src={Fisrtpic} alt="First slide" />
        <Carousel.Caption>
          <h3>Welcome to our Rrestaurant</h3>
          <p>Happy Hours Exceptionnel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className="d-block w-100" src={Secpic} alt="Third slide" />
        <Carousel.Caption>
        <h3>Healthy lunches to pack for work</h3>
      </Carousel.Caption>
      </Carousel.Item>
      

      <Carousel.Item>
        <img className="d-block w-100" src={Thirdpic} alt="Third slide" />
        <Carousel.Caption>
        <h3>Healthy vegetarian cooking ideas</h3>
        <h4>These are the healthiest foods at a cookout </h4>
      </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}
