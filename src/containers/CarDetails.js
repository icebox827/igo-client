import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik'
import {
  GridItem, Text, Image, Grid, Box,
} from '@chakra-ui/react';
import { useParams } from 'react-router';
import { fetchCarItem } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';
import me from '../assets/me.jpg';

const CarDetail = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const { carItem, loading, error } = useSelector((state) => state.carItem);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCarItem(id));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userToken = (JSON.parse(sessionStorage.getItem('userToken')));
    try {
      const response = await fetch('https://igo-api.herokuapp.com/api/v1/booked_cars', {
        method: 'POST',
        body: JSON.stringify({
          car_id: carItem.id,
        }),
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${userToken}`,
        },
      });
      const json = await response.json();
      setMessage(json.message);
      displayMessage();
    } catch (err) {
      return err;
    }
  };

  const displayMessage = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
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
      <Grid templateColumns="repeat(2, 1fr)">
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
            {carItem.make}
            {' '}
            {carItem.model}
          </Text>
          <Text textAlign="center">
            Year :
            {carItem.year}
          </Text>
          <Text textAlign="center">
            Color:
            {carItem.color}
          </Text>
          <Text textAlign="center">
            Transmission:
            {carItem.transmission}
          </Text>
          <Text textAlign="center">
            Seats:
            {carItem.seats}
          </Text>
          <Text textAlign="center" color="teal" fontSize="3xl">{message}</Text>
          <br />
          <br />
          <Text textAlign="center">
            <Formik onSubmit={handleSubmit}>
              <input
                type="submit"
                value="Book now"
                className="btn_favorite"
              />
            </Formik>
          </Text>
        </Box>
      </Grid>
      <hr />
      <Box>
        <Text textAlign="center" color="blue.500" fontSize="4xl">Book you car with one click</Text>
        <Text textAlign="center" color="teal" fontSize="2xl">and it will be add to your favorite</Text>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" mt="4">
        <Box>
          <Image
            src={me}
            alt="owner"
            className="profile"
            objectFit="cover"
            boxSize="250px"
            borderRadius="full"
          />
        </Box>
        <Box>
          <Text className="mojo">
            There is no such pleasure like sitting behind the wheel of our dream car. At igo
            We are you to provide you with the best driving experience, as ou motto says, you are
            driving the excellence.
          </Text>
        </Box>
      </Grid>
    </>
  );
};

export default CarDetail;
