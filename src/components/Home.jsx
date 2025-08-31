import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import instance from "../utils/axios";
import Header from "./partials/Header";

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await instance.get(`/trending/all/day`);
      const response =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  document.title = "HomePage";
  return wallpaper ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
