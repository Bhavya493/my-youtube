import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/menuSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import axios from "axios";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const handleMenuClick = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  //   const getSearchResults = async () => {
  //     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //     const res = await data.json()
  //     console.log('search res', res);
  //   }

  const getSearchResults = () => {
    axios.get(YOUTUBE_SEARCH_API + searchQuery).then((res)=> console.log('search res', res))
  };

  useEffect(() => {
    getSearchResults();
  }, []);
  return (
    <div className="grid grid-cols-12 justify-end p-3 shadow-md">
      <div className="flex col-span-3">
        <img
          className="w-10 h-10 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
          onClick={handleMenuClick}
        />
        <img
          className="w-22 h-14 -my-2 cursor-pointer"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube-logo"
        />
      </div>
      <div className="col-span-7">
        <input
          className="border border-gray-500 rounded-l-full w-1/2 p-1"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="w-14  border border-gray-500 rounded-r-full p-1">
          Search
        </button>
      </div>
      <div className="col-span-2 ml-44">
        <img
          className="w-10 h-10"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
