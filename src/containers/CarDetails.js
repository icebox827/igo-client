import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarItem } from '../actions/index';
import { Jumbotron, Container } from 'react-bootstrap';
import { GridItem, Text, Image, Link } from '@chakra-ui/react';
import PropTypes from 'prop-types';
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
    <Jumbotron fluid>
      <Container>
        <Image
          src={carItem.image_url}
          alt="car"
          className="image"
        />
        <Text>{carItem.make} {carItem.model}</Text>
        <Text>year : {carItem.year}</Text>
        <Text>Color: {carItem.color}</Text>
        <Text>Transmission: {carItem.transmission}</Text>
        <Text>Seats: {carItem.seats}</Text>
        <Link href="" target="__blank" rel="noopener" className="favorite">
          {' '}
          Book now
        </Link>
      </Container>
    </Jumbotron>
  )
};

CarDetail.propTypes = {
  carItem: PropTypes.shape({
    make: PropTypes.string,
    year: PropTypes.number,
    model: PropTypes.string,
    transmission: PropTypes.string,
    color: PropTypes.string,
    seats: PropTypes.number,
    image_url: PropTypes.string,
  }),
};

CarDetail.defaultProps = {
  carItem: {},
};

export default CarDetail;