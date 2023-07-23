import React from 'react';

const Photo = ({ photo }) => {
  const { image } = photo;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <img src={image} alt="photo" className="rounded-md h-64" />
      </div>
    </div>
  );
};

export default Photo;