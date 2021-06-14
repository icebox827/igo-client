import React from 'react';
import { Card } from 'react-bootstrap';
import { Text, Flex } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';

const DisplayBookedCar = ({ bookedCar }) => {
  return (
    <Flex
      display="flex"
      w="100%"
      wrap="wrap"
    >
      {
        bookedCar.map((cars) => (
            <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={cars.id}>
              <Card.Body>
                <Card.Img src={cars.image_url} />
                <Card.Title className="make">
                  <Text
                    fontSize="2xl"
                    color="blue.500"
                    mt="2"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    {cars.make}
                    {' '}
                    {cars.model}
                  </Text>
                </Card.Title>
                <Card.Text className="car">
                  Year :
                  {cars.year}
                </Card.Text>
                <Card.Text className="car">
                  Color:
                  {cars.color}
                </Card.Text>
                <Card.Text className="car">
                  Transmission:
                  {cars.transmission}
                </Card.Text>
                <Card.Text className="car">
                  Seats:
                  {cars.seats}
                </Card.Text>
              </Card.Body>
            </Card>
        ))
      }
    </Flex>
  )
};

DisplayBookedCar.propTypes = {
  bookedCar: PropTypes.array
}

export default DisplayBookedCar;
