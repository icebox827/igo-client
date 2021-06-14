import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GridItem, Flex } from '@chakra-ui/react';
import { fetchBookedcar } from '../actions/index';
import DisplayBookedCar from '../components/DisplayBookedCar';
import DisplayReservation from '../components/DisplayReservation';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Reservation = () => {
  const dispatch = useDispatch();
  const { bookedCar, loading, error } = useSelector((state) => state.bookedCar);

  useEffect(() => {
    dispatch(fetchBookedcar());
  }, [dispatch]);

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
  const admin = JSON.parse(sessionStorage.getItem('admin'));
  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {admin && bookedCar && <DisplayReservation bookedCar={bookedCar} />}
      {!admin && bookedCar && <DisplayBookedCar bookedCar={bookedCar} />}
    </Flex>
  );
};

export default Reservation;
