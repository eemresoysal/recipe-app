import { Link } from "react-router-dom";
import "./navbar_style.scss";

const Navbar = () => {
  return (
    <navbar>
      <div className="logo">
        <Link to="/home">
          <img
            src="https://seeklogo.com/images/R/recipe-logo-EC4BDCE687-seeklogo.com.png"
            alt=""
          />
        </Link>
      </div>
      <div className="menu">
        <Link className="menuLink" to="/about">
          ABOUT
        </Link>
        <a className="menuLink" href="https://github.com/eemresoysal">
          GITHUB
        </a>
        <Link className="menuLink" to="/login">
          LOGOUT
        </Link>
      </div>
    </navbar>
  );
};

export default Navbar;
