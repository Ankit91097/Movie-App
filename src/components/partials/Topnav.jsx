import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import instance from "../../utils/axios";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setquery] = useState('');
  const [searchData, setsearchData] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await instance.get(`/search/multi?query=${query}`);
      const response = data.results;
      console.log(data);
      setsearchData(response);
      console.log(searchData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything"
      />
      {query?.length > 0 && (
        <i
          onClick={() => setquery("")}
          class="text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
        {searchData?.map((data, i) => {
          return (
            <NavLink
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5"
                src={
                  data.backdrop_path ||
                  data.poster_path ||
                  data.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        data.backdrop_path ||
                        data.profile_path ||
                        data.poster_path
                      }`
                    : noimage
                }
                alt=""
              />
              <span>
                {data.name ||
                  data.title ||
                  data.original_name ||
                  data.original_title}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Topnav;
