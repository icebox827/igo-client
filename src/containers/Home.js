import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';
import '../styles/App.css';
import car from '../assets/car.jpeg'
import rentacar from '../assets/rentacar.jpg'

const Home = () => {
  return (
    <Jumbotron>
      <Container>
        <img src={car} alt="logo" className="rentcar" />
        <Text fontSize="4xl" color="blue.500" mt="4" textAlign="center">
          The right place to book your favorite car
        </Text>  
      </Container>
    </Jumbotron>
  )
};

export default Home;