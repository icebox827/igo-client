import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedcar } from '../actions/index';
import { GridItem, Text, Flex, Box } from '@chakra-ui/react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Error from '../components/Error'

const Reservation = () => {
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

  const renderBookedCar = () => {
    return bookedCar.map((cars) => (
      <>
      <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={cars.user_id}>
        <Card.Img variant="top" src={cars.image_url} />
        <Card.Body>
          <Card.Title className="make">
            <Text 
              fontSize="2xl" 
              color="blue.500" 
              mt="2" 
              textAlign="center" 
              fontWeight="bold"
            >
              {cars.make} {cars.model}
            </Text>
          </Card.Title>
          <Card.Subtitle>User: {cars.user_id} / Car: {cars.car_id}</Card.Subtitle>
          {/* <Card.Text className="car">
            <Text>year : {cars.year}</Text>
            <hr/>
            <Text>Color: {cars.color}</Text>
            <hr/>
            <Text>Transmission: {cars.transmission}</Text>
            <hr/>
            <Text>Seats: {cars.seats}</Text>
          </Card.Text> */}
        </Card.Body>
      </Card>
      </>
    ));
  }

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      <Text fontSize="3xl" color="blue.500" mt="4" textAlign="center" fontWeight="bold">
        Please enter the ID of a car to see the details
      </Text>
      <Text fontSize="2xl" color="teal" mb="4" textAlign="center" fontWeight="bold">
        Booked car ID list
      </Text>
      <Box>
        <form>
          <label>Enter ID:</label>
          <input type="text" placeholder="Car ID" className="idForm" />
          <input type="submit" value="See car" className="btnID"/>
        </form>
      </Box>
      {renderBookedCar()}
    </Flex>
  )
  
};

export default Reservation;