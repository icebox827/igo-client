import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookedCar } from '../actions/index';
import { useParams } from 'react-router';
import Loader from '../components/Loader';
import Error from '../components/Error'

const Reservation = () => {
  const dispatch = useDispatch();
  const { bookedCar, loadin, error } = useSelector((state) => state.bookedCar);
};

export default Reservation;