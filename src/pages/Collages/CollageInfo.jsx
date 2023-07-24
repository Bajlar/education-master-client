import React from "react";
import Container from "../../components/Container/Container";
import { useLoaderData } from "react-router-dom";

const CollageInfo = () => {
  const details = useLoaderData();
  // console.log(details);
  const {
    college_image,
    college_name,
    college_rating,
    research_works,
    admission_date,
    admission_process,
    research_count,
    sports,
    events,
    event_description,
  } = details;

  return (
    <div className="my-5">
      <Container>
        <div className="card w-full bg-base-100 shadow-md">
          <figure className="px-5 pt-5">
            <img src={college_image} alt="collageImg" className="rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              <strong>Collage Name: </strong>
              {college_name}
            </h2>
            <p>
              <strong>Collage Rating: </strong>
              {college_rating}
            </p>
            <p>
              <strong>Collage Admission date: </strong>
              {admission_date}
            </p>
            <div>
              <strong>Admission Process:</strong>
              {admission_process.map((process, index) => (
                <p key={index}>
                  {process?.eligibility_criteria}
                  {process?.application_process}
                  {process?.selection_process}
                </p>
              ))}
            </div>
            <p>
              <strong>Collage Research Count: </strong>
              {research_count}
            </p>
            <div>
              <strong>Collage Research Works:</strong>
              {research_works.map((research, index) => (
                <p key={index}>
                  {research?.title}
                  {research?.summary}
                </p>
              ))}
            </div>
            <div>
              <strong>Sports:</strong>
              {sports.map((sport, index) => (
                <p key={index}>
                  <strong>Name:</strong> {sport?.sport_name} <br />
                  <strong>Schedule:</strong> {sport?.training_schedule}
                </p>
              ))}
            </div>
            <div>
              <strong>Events:</strong>
              {events.map((event, index) => (
                <p key={index}>
                  <strong>Name:</strong> {event?.event_name} <br />
                  <strong>Location:</strong> {event?.event_location}
                </p>
              ))}
            </div>
            <p>
              <strong>Description: </strong>
              {event_description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CollageInfo;
