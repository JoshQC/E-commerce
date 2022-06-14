import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "./../../../assets/crown.svg";

//Modulos de SASS: el archivo como objeto
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
        <div className={styles.navbarLinks}>
          <Link className={styles.navbarLink} to="/tienda">
            Tienda
          </Link>
          <Link className={styles.navbarLink} to="/acceder">
            Acceder
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
