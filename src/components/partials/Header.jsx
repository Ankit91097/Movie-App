import React from "react";
import { Link, NavLink } from "react-router";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path || data.poster_path
        })`,
        backgroundSize: "cover",
        bacgroundPosition: "center",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="text-5xl font-bold text-white w-[70%]">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-white mt-3 mb-3">
        {" "}
        {data.overview.slice(0, 200)}{" "}
        <NavLink className="text-blue-400">...more</NavLink>
      </p>
      <p className="text-white text-[1.2vw]">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "Coming Soon"}
        <i className="text-yellow-500 ri-album-fill ml-3"></i>
        {data.media_type.toUpperCase()}
      </p>
      <NavLink className="bg-[#2985D9] p-4 rounded text-white font-semibold mt-5">
        Watch Trailer
      </NavLink>
    </div>
  );
};

export default Header;
