import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedcar, fetchBookedCar } from '../actions/index';
import { GridItem, Text, Image, Button, Grid, Box } from '@chakra-ui/react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Error from '../components/Error'

const Reservation = () => {
  const dispatch = useDispatch();
  const { bookedCar, loading, error } = useSelector((state) => state.bookedCar);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchBookedcar(id));
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

  return (
    <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={bookedCar.id}>
      <Card.Img variant="top" src={bookedCar.image_url} />
        <Card.Body>
          <Card.Title className="make"><Text fontSize="2xl" color="blue.500" mt="2" textAlign="center" fontWeight="bold">{bookedCar.make} {bookedCar.model}</Text></Card.Title>
          <Card.Text className="car">
            <Text>{bookedCar.user_id} {bookedCar.car_id} </Text>
            <Text>year : {bookedCar.year}</Text>
            <hr/>
            <Text>Color: {bookedCar.color}</Text>
            <hr/>
            <Text>Transmission: {bookedCar.transmission}</Text>
            <hr/>
            <Text>Seats: {bookedCar.seats}</Text>
          </Card.Text>
        </Card.Body>
    </Card>
  )
};

export default Reservation;