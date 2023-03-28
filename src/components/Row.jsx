import React, { useEffect, useState } from "react";
import axios from "axios";

import Movie from "./Movie";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <BsChevronCompactLeft
          onClick={sliderLeft}
          className="text-white opacity-80 absolute left-0 cursor-pointer z-10 lg:hover:scale-125 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <BsChevronCompactRight
          onClick={sliderRight}
          className="text-white opacity-80 absolute right-0 cursor-pointer z-10 lg:hover:scale-125 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
