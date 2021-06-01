import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

const BookRide  = () => {
  return (
    <section className='call-action'>
      <Text> Drive the Excellence </Text>
      <Text fontSize="2xl" color="red.500" mt="4" textAlign="center" fontWeight="bold">
        <Link className='btn btn-oval' to='/register'>
          Book your ride
        </Link>
      </Text>
    </section>
  )
}

export default BookRide;