import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/images/banner/banner-1.jpg";
import img2 from "../../../assets/images/banner/banner-2.jpg";
import img3 from "../../../assets/images/banner/banner-3.jpg";
import img4 from "../../../assets/images/banner/banner-4.jpg";
import img5 from "../../../assets/images/banner/banner-5.jpg"; 

const Banner = () => {
  return (
    <div className="-mt-3">
      <Carousel className="text-center">
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
