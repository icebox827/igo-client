import React from 'react';
import { Card } from 'react-bootstrap';
import { Text, Flex } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

const DisplayReservation = ({ bookedCar }) => {
  return (
    <Flex
    display="flex"
    w="100%"
    wrap="wrap"
    >
      {
        bookedCar.map((cars) => (
        <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={cars.car.car_id}>
          <Card.Body key={cars.car.car_id}>
            <Card.Img src={cars.car.image_url} />
            <Card.Title className="make">
              <Text
                fontSize="2xl"
                color="blue.500"
                mt="2"
                textAlign="center"
                fontWeight="bold"
              >
                {cars.car.make}
                {' '}
                {cars.car.model}
              </Text>
            </Card.Title>
            <Card.Subtitle>
              <Text
                textAlign="center"
                fontSize="xl"
                color="teal"
              >
                Booked by:
                {' '}
                {cars.user.username}
              </Text>
            </Card.Subtitle>
            <Card.Text className="car">
              Year :
              {cars.car.year}
            </Card.Text> 
            <Card.Text className="car"> 
              Color:
              {cars.car.color}
            </Card.Text> 
            <Card.Text className="car"> 
              Transmission:
              {cars.car.transmission}
            </Card.Text>
            <Card.Text className="car">
              Seats:
              {cars.car.seats}
            </Card.Text>
          </Card.Body>
        </Card>
    ))
  }
    </Flex>
  )
};

DisplayReservation.propTypes = {
  bookedCar: PropTypes.array
}

export default DisplayReservation;
