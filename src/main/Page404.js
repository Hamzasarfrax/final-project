import React from "react";
import { Link } from "react-router-dom";
import page404 from "../style/page404.css";
const Page404 = () => {
  return (
    <>
      <div className="text-center page404">
        <h1> Page404 </h1>

        <br></br>
        <h2>This url is not in our list please go back</h2>
        <br></br>
        <Link to="/">Go Home</Link>
      </div>
    </>
  );
};

export default Page404;
