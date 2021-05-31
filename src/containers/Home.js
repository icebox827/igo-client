import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';
import '../styles/App.css';
import car from '../assets/car.jpeg'

const Home = () => {
  return (
    <Jumbotron className="jumbotron">
      <Container>
        <img src={car} alt="logo" className="rentcar" />
      
          <h2>The right place to book your favorite car</h2>
       
      </Container>
    </Jumbotron>
  )
};

export default Home;