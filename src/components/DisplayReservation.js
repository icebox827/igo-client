import React from 'react';
import { Card } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';

const DisplayReservation = ({bookedCar}) => {

  const renderBookedCar = () => {
    return bookedCar.map((cars) => (
      <>
      <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={cars.user_id}>
        <Card.Body>
          <Card.Img src={cars.car.image_url} />
          <Card.Title className="make">
            <Text 
              fontSize="2xl" 
              color="blue.500" 
              mt="2" 
              textAlign="center" 
              fontWeight="bold"
            >
              {cars.car.make} {cars.car.model}
            </Text>
          </Card.Title>
          <Card.Subtitle>
            <Text  
              textAlign="center"
              fontSize="xl" 
              color="teal" 
            >
              Booked by: {cars.user.username}
            </Text>
          </Card.Subtitle>
          <Card.Text className="car">
            <Text>Year : {cars.car.year}</Text>
            <hr/>
            <Text>Color: {cars.car.color}</Text>
            <hr/>
            <Text>Transmission: {cars.car.transmission}</Text>
            <hr/>
            <Text>Seats: {cars.car.seats}</Text>
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    ));
  }
    return (
      renderBookedCar()
    );
}
 
export default DisplayReservation;
