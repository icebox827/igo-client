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
    // <Jumbotron>
    //   <Container>
    //     <img src={carshow} alt="logo" className="rentcar" />
    //     <BookRide />
    //     <Text fontSize="4xl" color="blue.500" mt="4" textAlign="center" fontWeight="bold">
    //       The right place to book your favorite car
    //     </Text>  
    //   </Container>
    // </Jumbotron>
  )
};

export default Home;