import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';
import '../styles/App.css';
import carshow from '../assets/carshow.jpeg'
import BookRide from '../components/BookRide';

const Home = () => {
  return (
    <Jumbotron>
      <Container>
        <img src={carshow} alt="logo" className="rentcar" />
        <BookRide />
        <Text fontSize="4xl" color="blue.500" mt="4" textAlign="center" fontWeight="bold">
          The right place to book your favorite car
        </Text>  
      </Container>
    </Jumbotron>
  )
};

export default Home;