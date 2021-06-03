import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedcar, fetchBookedCar } from '../actions/index';
import { GridItem, Text, Image, Button, Grid, Box } from '@chakra-ui/react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Error from '../components/Error'
import bookedCarReducer from '../reducers/bookedCarReducer';

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

  return bookedCar.map((bcar) => {
    <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={bcar.id}>
      
    </Card>
  })

};

export default Reservation;