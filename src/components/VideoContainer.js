import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard, { HOCVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getYoutubeVideos = async () => {
    fetch(YOUTUBE_API_URL)
      .then((data) => data.json())
      .then((res) => {
        setVideos(res.items);
      });
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
        <HOCVideoCard info={videos[0]}/>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}><VideoCard info={video} key={video.id} /></Link>
      ))}
    </div>
  );
};

export default VideoContainer;
