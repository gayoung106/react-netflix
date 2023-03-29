import React from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <button
        onClick={openModal}
        className="hover:bg-red-700 border rounded flex text-white bg-gray-700 border-gray-700 py-2 px-5 ml-4"
      >
        <p>
          <FaInfoCircle className="mx-1.5 my-1 left-10" />
        </p>
        {"상세 정보"}
      </button>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-full">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[700px] h-[700px] bg-black outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                  <img
                    className="w-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                  />
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none z-50"
                    onClick={closeModal}
                  >
                    <span className="absolute bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div>
                    <div className="absolute w-full top-[20%] p-4 md:p-8">
                      <p className="text-3xl md:text-xl font-bold">
                        {movie?.title}
                      </p>

                      <div className="my-4 flex">
                        <button className="border rounded flex bg-gray-400 text-black border-gray-400 py-2 px-5">
                          <p>
                            <FaPlay className="mx-1.5 my-1 left-10" />
                          </p>
                          {"재생"}
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Released: {movie?.release_date}
                      </p>
                      <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[70%] text-gray-200 text-sm">
                        {truncateString(movie?.overview, 50)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
