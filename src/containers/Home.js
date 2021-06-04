import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import '../styles/App.css';
import carshow from '../assets/carshow.jpeg'
import car from '../assets/car.jpeg'
import rentacar from '../assets/rentacar.jpg'
import BookRide from '../components/BookRide';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  return (
    <Carousel>
      <div>
          <img src={carshow} />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src={car} />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src={rentacar} />
          <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  )
};

export default Home;