import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarItem, bookedCar } from '../actions/index';
import { GridItem, Text, Image, Button, Grid, Box } from '@chakra-ui/react';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Error from '../components/Error'

const CarDetail = () => {
  const dispatch = useDispatch();
  const { carItem, loading, error } = useSelector((state) => state.carItem);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCarItem(id));
  },[dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    bookedCar();
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

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <Box>
        <Image
          src={carItem.image_url}
          alt="car"
          className="image"
        />
      </Box>
      <Box>
        <Text fontSize="2xl" color="blue.500" mt="2" textAlign="center" fontWeight="bold">{carItem.make} {carItem.model}</Text>
        <Text textAlign="center" >year : {carItem.year}</Text>
        <Text textAlign="center">Color: {carItem.color}</Text>
        <Text textAlign="center">Transmission: {carItem.transmission}</Text>
        <Text textAlign="center">Seats: {carItem.seats}</Text>
        <br />
        <br />
        <Button href="" target="__blank" rel="noopener" className="favorite" colorScheme="teal" onSubmit={handleSubmit}>
          {' '}
          Book now
        </Button>
      </Box>
    </Grid>
  )
};

export default CarDetail;