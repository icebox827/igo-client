import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedcar } from '../actions/index';
import { GridItem, Text, Flex, Box } from '@chakra-ui/react';
import DisplayBookedCar from '../components/DisplayBookedCar';
import DisplayReservation from '../components/DisplayReservation';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Reservation = () => {
  const dispatch = useDispatch();
  const { bookedCar, loading, error } = useSelector((state) => state.bookedCar);
  useSelector((state) => console.log)

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
  const admin = JSON.parse(sessionStorage.getItem('admin'))
  return (
    <Flex wrap="wrap" display="flex" w="100%">
      <Text fontSize="3xl" color="blue.500" mt="4" textAlign="center" fontWeight="bold">
        Please enter the ID of a car to see the details
      </Text>
      {admin && <DisplayReservation bookedCar={bookedCar}/>}
      {!admin && <DisplayBookedCar bookedCar={bookedCar}/>}
    </Flex>
  )
};

export default Reservation;