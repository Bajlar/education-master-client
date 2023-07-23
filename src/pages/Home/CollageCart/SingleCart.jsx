import React from 'react';
import { Link } from 'react-router-dom';

const SingleCart = ({ item }) => {
  // console.log(item);
  const {
    _id,
    college_image,
    college_name,
    admission_date,
    research_count,
    events,
    sports,
  } = item;

  return (
    <div>
      <div className="card bg-base-100 shadow-md">
        <figure className="px-5 pt-5">
          <img src={college_image} alt="collage" className="rounded-md h-64" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college_name}</h2>
          <p>
            <strong>Admission Date:</strong> {admission_date}
          </p>
          <p>
            <strong>Research Count:</strong> {research_count}
          </p>
          <div>
            <strong>Events:</strong>
            {events.map((event, index) => (
              <p key={index}>{event?.event_name}</p>
            ))}
          </div>
          <div>
            <strong>
              Sports: <br />
            </strong>
            {sports.map((sport, index) => (
              <p key={index}>{sport?.sport_name}</p>
            ))}
          </div>
          <div className="card-actions">
            <Link to={`/cartDetails/${_id}`}>
              <button
                className="btn btn-info capitalize text-white text-lg"
              >
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;