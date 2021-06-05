import React from 'react';
import { Card } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';

const DisplayBookedCar = ({bookedCar}) => {

  const renderBookedCar = () => {
    return bookedCar.map((cars) => (
      <>
      <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={cars.user_id}>
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
               {cars.make} {cars.model}
            </Text>
          </Card.Title>
          <Card.Text className="car">
            <Text>Year : {cars.year}</Text>
            <hr/>
            <Text>Color: {cars.color}</Text>
            <hr/>
            <Text>Transmission: {cars.transmission}</Text>
            <hr/>
            <Text>Seats: {cars.seats}</Text>
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
 
export default DisplayBookedCar;
