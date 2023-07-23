import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
  // console.log(item);
    const {
      _id,
      college_image,
      college_name,
      college_rating,
      admission_date,
      research_count
    } = item;

  return (
    <div>
      <div className="card bg-base-100 shadow-md">
        <figure className="px-5 pt-5">
          <img src={college_image} alt="collages" className="rounded-md h-64" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college_name}</h2>
          <p>
            <strong>College Rating:</strong> {college_rating}
          </p>
          <p>
            <strong>Admission Date:</strong> {admission_date}
          </p>
          <p>
            <strong>Research Count:</strong> {research_count}
          </p>
          <div className="card-actions">
            <Link to={`/collageInfo/${_id}`}>
              <button className="btn btn-info capitalize text-white text-lg">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;