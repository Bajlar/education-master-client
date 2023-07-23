import React from 'react';
import Lottie from "lottie-react";
import error from '../../assets/images/error.json';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div>
        <Lottie animationData={error} className="w-full h-[400px]" />
      </div>
      <div className='text-center'>
        <Link to='/'>
          <button className='btn btn-success text-white capitalize text-lg'>Back to Home</button>
        </Link>
      </div>
    </>
  );
};

export default Error;