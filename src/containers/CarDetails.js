import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarItem, fetchcCarItem } from '../actions/index';
import { Jumbotron, Container } from 'react-bootstrap';
import { Flex, GridItem, Text } from '@chakra-ui/react';
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
        <Text>{carItem.make}</Text>
      </Container>
    </Jumbotron>
  )
};

export default CarDetail;