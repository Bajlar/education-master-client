import React from 'react';
import logo from '../../../assets/images/logo/logo.png';

const Logo = () => {
  return (
    <div className='flex justify-center items-center cursor-pointer'>
      <img className="hidden md:block" src={logo} alt="logo" />
      <h2 className='md:text-2xl font-bold ml-2'>Education Master</h2>
    </div>
  );
};

export default Logo;