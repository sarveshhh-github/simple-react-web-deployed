import React from "react";
import { Link } from "react-router-dom";
import { StaffInfo } from "./StaffInfo";
const Staff = () => {
  return (
    <div>
      <div className="m-2 grid grid-cols-3 ">
        {StaffInfo.map((ele) => {
          return (
            <div className="w-full content-evenly hover:bg-black hover:border-red hover:text-white hover:rounded-lg p-5 shadow-2xl hover:shadow-inner">
              <img
                src={ele.img}
                alt={ele.name}
                className="h-[200px] align-center rounded-xl  aspect-square"
              />
              <h3 className="text-xl "> {ele.name}</h3>
              <h3> {ele.role}</h3>
            </div>
          );
        })}
      </div>

      <Link
        to="/info"
        className="text-xl text-center bg-blue-500 hover:bg-blue-700 p-2 "
      >
        Back to Info Page
      </Link>
    </div>
  );
};

export default Staff;
