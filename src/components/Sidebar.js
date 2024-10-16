import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);
  return (
    <>
      {isMenuOpen ? (
        <div className="w-48 shadow-lg h-auto p-3">
          <ul className="p-2">
            <Link to="/">Home</Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
          </ul>
          <h2 className="font-bold p-2">Subscriptions</h2>
          <ul className="p-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
          <h2 className="font-bold p-2">Watch Later</h2>
          <ul className="p-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      ) : //     <div className="w-30 shadow-lg h-auto p-3">
      //     <img alt="icon-1" src="https://static.vecteezy.com/system/resources/thumbnails/022/013/913/small/home-icon-illustration-image-vector.jpg"/>
      //     <img alt="icon-2" src="https://media.istockphoto.com/id/1598038956/vector/bell-icon-vector-illustration-symbol.jpg?s=612x612&w=0&k=20&c=Ly_vjHmtbwhlsuCl8YkGqZ6zkOJKH03D_BhDY89Qzdg="/>
      //     <img alt="icon-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVZFj6F5yfsnRumHwoD3hDUi0NdJZTyy7qQ&s"/>
      // </div>
      null}
    </>
  );
};

export default Sidebar;
