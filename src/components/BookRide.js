import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Button } from '@chakra-ui/react';

const BookRide  = () => {
  return (
    <section className='call-action'>
      <Text fontSize="2xl" color="white" mt="4" fontWeight="bold"> Drive the Excellence </Text>
      <Button fontSize="2xl" color="red.500" mt="4" textAlign="center" fontWeight="bold">
        <Link className='btn btn-oval' to='/car'>
          Book your ride
        </Link>
      </Button>
    </section>
  )
}

export default BookRide;