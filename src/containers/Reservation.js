import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedcar } from '../actions/index';
import { GridItem, Text } from '@chakra-ui/react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Error from '../components/Error'

const Reservation = ({
  make, 
  model, 
  year, 
  color, 
  transmission,
  seats,
  image_url
  }) => {
  const dispatch = useDispatch();
  const { bookedCar, loading, error } = useSelector((state) => state.bookedCar);

  useEffect(() => {
    dispatch(fetchBookedcar());
  },[dispatch])

  if (loading) {
    return (
      <GridItem colSpan={4}>
        <Loader />
      </GridItem>
    );
  }
  if (error) {
    return (
      <GridItem colSpan={4}>
        <Error />
      </GridItem>
    );
  }

  return bookedCar.map((cars) => (
    <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={cars.user_id}>
      <Card.Img variant="top" src={cars.image_url} />
      <Card.Body>
        <Card.Title className="make"><Text fontSize="2xl" color="blue.500" mt="2" textAlign="center" fontWeight="bold">{cars.make} {cars.model}</Text></Card.Title>
        <Card.Subtitle>User: {cars.user_id} Car: {cars.car_id}</Card.Subtitle>
        <Card.Text className="car">
          <Text>year : {cars.year}</Text>
          <hr/>
          <Text>Color: {cars.color}</Text>
          <hr/>
          <Text>Transmission: {cars.transmission}</Text>
          <hr/>
          <Text>Seats: {cars.seats}</Text>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};

Reservation.porpTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string,
  transmission: PropTypes.string,
  seats: PropTypes.number,
  image_url: PropTypes.string
}

export default Reservation;