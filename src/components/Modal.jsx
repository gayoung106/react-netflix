import React from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";

const Modal = ({ movie = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [videoKey, setVideoKey] = useState("");

  // const { id, title, backdrop_path, overview, release_date } = movie;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    async function getVideoData() {
      try {
        const videoUrl = requests.requestVideo.replace("{movie_id}", movie.id);
        const response = await axios.get(videoUrl);
        const videos = response.data.results;
        if (videos.length > 0) {
          setVideoKey(videos[0].key);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getVideoData();
  }, [movie.id]);

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
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:max-w-[40%] md:max-w-[60%] lg:max-w-[80%] xl:max-w-[100%] h-full bg-black outline-none focus:outline-none">
      <div className="relative">
        <div className="absolute rounded-xl w-full h-[550px] bg-gradient-to-t from-black"></div>
        {/* <img
      className="rounded-xl object-cover w-full h-[550px]"
      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
      alt={movie.title}
    /> */}
        <div className="rounded-xl object-cover w-full h-[550px]">
          {videoKey ? (
            <iframe
              id="modal-video-iframe"
              title={`${movie.title}`}
              className="embed-responsive-item rounded-xl object-cover w-full h-[550px]"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
              allowFullScreen
              allow="autoplay"
              muted
            ></iframe>
          ) : (
            <div>No video available</div>
          )}
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-6">
          <p className="text-3xl md:text-xl font-bold text-white">
            {movie.title}
          </p>
          <div className="my-4 flex">
            <button className="border rounded flex bg-gray-400 text-black border-gray-400 py-2 px-5">
              <p>
                <FaPlay className="mx-1.5 my-1 left-10" />
              </p>
              {"재생"}
            </button>
          </div>
          <p className="text-gray-400 text-sm p-1">
            공개예정: {movie.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[80%] xl:max-w-[90%] text-gray-200 text-sm">
            {truncateString(movie.overview, 150)}
          </p>
        </div>
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
  );
};

export default Modal;
