import { Outlet, Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">
          <img
            src="https://cdn-icons.flaticon.com/png/512/3863/premium/3863590.png?token=exp=1653018137~hmac=386e6f87d0e8328567a6f8a899dfe98f"
            alt="logo"
          />
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/tienda">
            Tienda
          </Link>
          <Link className="navbar-link" to="/acceder">
            Acceder
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
