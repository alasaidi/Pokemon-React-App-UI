// import { useEffect, useState } from "react";

import "./ErrorPage.css";
import { useRouteError } from "react-router";
import Header from "../../components/header/Header";
export const ErrorPage = () => {
  const error = useRouteError;
  return (
    <div className="error-page">
      <Header />

      <h2>Something Went Wrong</h2>
      <h3>{error}</h3>
    </div>
  );
};
