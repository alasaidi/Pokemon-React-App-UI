// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default App;
