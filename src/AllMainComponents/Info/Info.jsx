import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
const Info = () => {
  return (
    <div>
      <Header />
      Info
      <br />
      <Link to="/info/staff" className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded">
        Show Staff Details
      </Link>
    </div>
  );
};

export default Info;
