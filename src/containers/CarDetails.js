import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarItem, bookedCar } from '../actions/index';
import { GridItem, Text, Image, Grid, Box, tokenToCSSVar } from '@chakra-ui/react';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Error from '../components/Error';
import axios from 'axios';

const CarDetail = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const { carItem, loading, error } = useSelector((state) => state.carItem);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCarItem(id));
  },[dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = (JSON.parse(sessionStorage.getItem('userToken')));
    console.log(userToken)
    try {
      const response = await fetch('https://igo-api.herokuapp.com/api/v1/booked_cars', {
      method: 'POST',
      body: JSON.stringify({
        car_id: carItem.id
      }),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${userToken}`
      }
    })
    const json = await response.json();
    setMessage(json.message);
    displayMessage();
    } catch (err) {
      return (err)
    }
  };

  const displayMessage = () => {
    setTimeout(() => {
      setMessage('')
    }, 5000)
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
    <>
    <Text>{message}</Text>
    <Grid templateColumns="repeat(2, 1fr)" >
      <Box>
        <Image
          src={carItem.image_url}
          alt="car"
          className="image"
        />
      </Box>
      <Box>
        <Text 
          fontSize="2xl" 
          color="blue.500" 
          mt="2" 
          textAlign="center" 
          fontWeight="bold"
        >
          {carItem.make} {carItem.model}
        </Text>
        <Text textAlign="center" >year : {carItem.year}</Text>
        <Text textAlign="center">Color: {carItem.color}</Text>
        <Text textAlign="center">Transmission: {carItem.transmission}</Text>
        <Text textAlign="center">Seats: {carItem.seats}</Text>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <input 
            type="submit"
            value="Book now" 
            className="btn_favorite"  
          />
        </form>
      </Box>
    </Grid>
    </>
  )
};

export default CarDetail;