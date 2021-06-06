import { Flex, GridItem, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { fetchCar } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Cars = () => {
  const dispatch = useDispatch();
  const { cars, loading, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCar());
  }, [dispatch]);

  const renderCars = () => {
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

    return cars.map((car) => (
      <Card style={{ width: '21rem' }} className="bg-dark text-white mt-3" key={car.id}>
        <Card.Img variant="top" src={car.image_url} />
        <Card.Body>
          <Card.Title className="make">
            <Text fontSize="2xl" color="blue.500" mt="2" textAlign="center" fontWeight="bold">
              {car.make}
              {' '}
              {car.model}
            </Text>
          </Card.Title>
          <Card.Text className="car">
            <Text>
              Year :
              {car.year}
            </Text>
            <hr />
            <Text>
              Color:
              {car.color}
            </Text>
            <hr />
            <Text>
              Transmission:
              {car.transmission}
            </Text>
            <hr />
            <Text>
              Seats:
              {car.seats}
            </Text>
          </Card.Text>
        </Card.Body>
        <a href={`\\carDetail\\${car.id}`} className="btn">Click for details</a>
      </Card>
    ));
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {renderCars()}
    </Flex>
  );
};

export default Cars;
