import { Link, NavLink } from "react-router-dom";
// import "../../index.css";
import logo from "../../../src/assets/imgs/The Empire Salon.png";

const Header = () => {
  const item =
    "text-sm md:text-2xl p-2 rounded align-middle text-blue-500";

  return (
    <div className="flex flex-col justify-center md:grid md:grid-cols-2 h-100px">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="The Empire Salon"
            className="h-[100px] m-2 "
          />
        </Link>
      </div>

      <NavLink className=" text-center flex flex-col md:grid md:grid-cols-5 ">
        <Link to="/" className={item}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/info" className={item}>
          Info
        </Link>
        <Link to="/services" className={item}>
          Services
        </Link>
        <Link to="/review" className={item}>
          {" "}
          Review
        </Link>
        <Link to="/contact-us" className={item}>
          {" "}
          Contact Us
        </Link>
      </NavLink>
    </div>
  );
};

export default Header;

// className = 'p-3 bg-red-400 rounded-lg m-3'
