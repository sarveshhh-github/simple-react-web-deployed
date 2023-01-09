import React from "react";
import { Link } from "react-router-dom";
const Appointment = () => {
  return (
    <div>
      <h1 className="text-2xl text-center m-2">Book Appointment Online</h1>
      <div>
        <form>
          <label>Name</label>
          <input type={"text"} placeholder="your name here" />
          <label>Name</label>
          <input type={"text"} placeholder="your name here" />
        </form>
      </div>

      <button className="text-lg bg-blue-500">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default Appointment;
