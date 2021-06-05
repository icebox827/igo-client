import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedcar, fetchCarItem } from '../actions/index';
import { GridItem, Text, Flex, Box } from '@chakra-ui/react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Reservation = () => {
  const dispatch = useDispatch();
  const [carId, setCarId] = useState('');
  const { bookedCar, loading, error } = useSelector((state) => state.bookedCar);
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchBookedcar());
  },[dispatch])

  const handleChange = (e) => {
    setCarId({
      ...carId,
      [e.target.name]: e.target.value
    })
    console.log(carId)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchCarItem(id));
  };

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
        <Card.Body>
          <Card.Title className="make">
            <Text 
              fontSize="2xl" 
              color="blue.500" 
              mt="2" 
              textAlign="center" 
              fontWeight="bold"
            >
              User: {cars.user_id} / Car: {cars.car_id}
            </Text>
          </Card.Title>
          <Card.Subtitle>
            <Text  textAlign="center" >
              Submit the ID to visualize the car details
            </Text>
          </Card.Subtitle>
          <Card.Text>

          </Card.Text>
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
        <form onSubmit={handleSubmit}>
          <label>Enter ID:</label>
          <input 
            onChange={handleChange}
            type="text" 
            placeholder="Car ID" 
            className="idForm" 
            name="id"
          />
          <input type="submit" value="See car" className="btnID"/>
        </form>
      </Box>
      {renderBookedCar()}
    </Flex>
  )
};

export default Reservation;