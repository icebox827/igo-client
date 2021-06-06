import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Text, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import '../styles/App.css';
import carshow from '../assets/carshow.jpeg';
import car from '../assets/car.jpeg';
import rentacar from '../assets/rentacar.jpg';
import BookRide from '../components/BookRide';
import carKey from '../assets/carKey.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => (
  <>
    <Carousel>
      <div>
        <img src={carshow} />
        <p className="legend">Drive the Excellence</p>
      </div>
      <div>
        <img src={car} />
        <p className="legend">One clik to bookd and add it to you favorite</p>
      </div>
      <div>
        <img src={rentacar} />
        <p className="legend">Cars are us</p>
      </div>
    </Carousel>
    <hr />
    <Jumbotron>
      <Container>
        <Text textAlign="center" color="teal" fontSize="3xl" fontWeight="800">Select your car and add it to your favorite</Text>
        <Text textAlign="center" color="blue.500" fontSize="2xl" fontWeight="600">One click to book a car</Text>
        <Image
          src={carKey}
          alt="promotion"
          className="promo"
          boxSize="250px"
          borderRadius="full"
        />
        <BookRide />
      </Container>
    </Jumbotron>
  </>
);

export default Home;
