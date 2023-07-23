import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchField = () => {
  return (
    <section className="md:w-4/12 mx-auto md:flex gap-2 px-4">
      <div>
        <input
          type="text"
          placeholder="Search Collage Name"
          className="input input-bordered w-full pl-12"
        />
        <div className="-mt-8">
          <AiOutlineSearch className="text-2xl text-gray-400 ml-5" />
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <button className="btn btn-info capitalize text-white text-lg">
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchField;
