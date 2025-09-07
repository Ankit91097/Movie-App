import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="bg-[#1F1E24] h-screen w-screen flex overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
