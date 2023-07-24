import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../components/Container/Container";
import Photo from "./Photo";

const PhotoGallery = () => {
  const [photoGallery, setPhotoGallery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => {
        setPhotoGallery(data);
      });
  }, []);
  return (
    <>
      <div className="my-8 px-4">
        <SectionTitle heading={"Collage Image Gallery"} />
      </div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photoGallery.map((photo) => (
            <Photo key={photo._id} photo={photo} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default PhotoGallery;
