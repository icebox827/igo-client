import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import '../styles/App.css';
import Logo from '../assets/Logo.png'
import car from '../assets/car.jpeg'

const Home = () => {
  return (
    <Jumbotron className="jumbotron">
      <Container>
        <img src={car} alt="logo" className="rentcar" />
        <img src={Logo} alt="logo" className="logo" />
      </Container>
    </Jumbotron>
  )
};

export default Home;