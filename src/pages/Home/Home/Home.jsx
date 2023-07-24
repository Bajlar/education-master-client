import React from "react";
import Banner from "../Banner/Banner";
import SearchField from "../../../components/SearchField/SearchField";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import CollageCart from "../CollageCart/CollageCart";
import Research from "../Research/Research";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchField />
      <CollageCart />
      <PhotoGallery />
      <Research />
    </div>
  );
};

export default Home;
