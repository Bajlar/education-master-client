import React from "react";

const SectionTitle = ({ heading }) => {
  return (
    <div>
      <h3 className="text-3xl text-center font-bold">{heading}</h3>
      <div className="divider md:w-1/4 mx-auto px-4"></div>
    </div>
  );
};

export default SectionTitle;
