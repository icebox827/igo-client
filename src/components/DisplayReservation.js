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
              User: {cars.user.username} / Car: {cars.car.make}
            </Text>
          </Card.Title>
          <Card.Subtitle>
            <Text  textAlign="center" >
              Submit the ID to visualize the car details
            </Text>
          </Card.Subtitle>
          <Card.Text>

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
