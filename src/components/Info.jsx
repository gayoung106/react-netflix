import React, { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import ReactPlayer from "react-player";

const Info = ({ movie = {} }) => {
  const [videoKey, setVideoKey] = useState("");

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

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="rounded-xl object-cover w-full h-[550px]">
        {videoKey ? (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoKey}`}
            width="100%"
            height="550px"
            playing
            muted
            controls
          />
        ) : (
          <div>No video available</div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-6">
        <p className="text-3xl md:text-xl font-bold text-white">
          {movie.title}
        </p>

        <p className="text-gray-400 text-sm p-1">
          공개예정: {movie.release_date}
        </p>
        <p className="w-full md:max-w-[60%] lg:max-w-[70%] xl:max-w-[80%] text-gray-200 text-sm">
          {truncateString(movie.overview, 200)}
        </p>
      </div>
    </>
  );
};

export default Info;
