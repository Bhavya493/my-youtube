import React from "react";

const VideoCard = ({ info }) => {
  // const {snippet, statistics} = info
  // const {channelTitle, title, thumbnails} = snippet
  return (
    <div className="shadow-lg p-5 cursor-pointer">
      <img
        className="w-48 h-30"
        src={info?.snippet?.thumbnails.high.url}
        alt="img"
      />
      <ul>
        <li className="font-bold">{info?.snippet?.title.slice(0, 20)}</li>
        <li className="font-bold">{info?.snippet?.title.slice(20, 30)}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

// Higher Order Component
// A function which accepts component as argument and returns new component
// It is used to reuse component logic
// HOCs allow you to add additional functionality to a component without modifying the component's code.

export const HOCVideoCard = ({info}) => {
  return <VideoCard info={info}/>;
};
export default VideoCard;
