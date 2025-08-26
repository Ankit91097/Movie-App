import React from "react";
import { NavLink } from "react-router";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-200 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i class="text-[#2985D9] ri-tv-fill mr-2"></i>
        <span>Movies App</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class=" ri-fire-fill"></i> Trending
        </NavLink>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-sparkling-2-fill"></i> Popular
        </NavLink>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-movie-ai-fill"></i> Movies
        </NavLink>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-slideshow-3-fill"></i> TV Shows
        </NavLink>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-team-fill"></i> People
        </NavLink>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Website Inforamation
        </h1>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-information-2-fill"></i> About
        </NavLink>
        <NavLink className="hover:bg-[#2985D9] hover:text-white duration-300 rounded-lg p-5">
          <i class="ri-phone-fill"></i> Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidenav;
