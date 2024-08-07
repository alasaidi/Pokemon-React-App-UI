// import { useEffect, useState } from "react";
import { Footer } from "../../compnents/footer/Footer";
import { NavBar } from "../../compnents/nav-bar/NavBar";
import "./ErrorPage.css";
import { useRouteError } from "react-router";
export const ErrorPage = () => {
  const error = useRouteError;
  return (
    <div className="error-page">
      <NavBar />
      <h2>Something Went Wrong</h2>
      <h3>{error}</h3>
      <Footer />
    </div>
  );
};
