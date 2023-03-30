import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import Info from "./Info";

const Modal = ({ movie = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

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
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="rounded relative w-auto my-6 mx-auto max-w-[95vw]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:w-[400px] lg:w-[600px] xl:w-[800px] h-full bg-black outline-none focus:outline-none">
                <div className="relative">
                  <div className="absolute rounded-xl w-full h-[550px] bg-gradient-to-t from-black"></div>

                  <Info movie={movie} />

                  <button
                    className="absolute top-0 right-5 p-1 bg-transparent border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none z-50"
                    onClick={closeModal}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
