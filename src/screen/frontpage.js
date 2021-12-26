import React from "react";
import "./frontpage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


import  Carousel  from "react-bootstrap/Carousel";
import slide1 from ".././images/one.jpg"
import slide2 from "../images/two.jpg"
import slide3 from "../images/three.jpg"



function Home(){
    return(
        <>

<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="crousal"

      src={slide1}
      alt="First slide"
    ></img>
    <Carousel.Caption>
      <h3>Saylani</h3>
      <p>saylani welfare trust.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="crousal"

      src={slide2}
      alt="Second slide"
      ></img>

    <Carousel.Caption>
      <h3>Saylani</h3>
      <p>saylani welfare trust.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      className="crousal"

      src={slide3}
      alt="Third slide"
      ></img>
    <Carousel.Caption>
      <h3>Saylani</h3>
      <p>saylani welfare trust..</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






        </>
    )
}

export default Home;