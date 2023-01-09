import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
const Home = () => {
  return (
    <div >
      <Header />

      <div className='grid grid-cols-2 text-center'>
        <Link to="/info" className="text-lg bg-blue-500 text-white p-1 mx-4 rounded-xl">
          About us
        </Link>
        <Link to="/appointment" className="text-lg bg-blue-500 text-white p-1 mx-4 rounded-xl">
          Appointment
        </Link>
      </div>
    </div>
  );
}

export default Home;