import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as Logo } from "./../../../assets/crown.svg";
import { UsuarioContext } from "../../../contexts/usuarios";
import { signOutUsuario } from "../../../utils/firebase/firebase";

//Modulos de SASS: el archivo como objeto
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { usuarioLogueado } = useContext(UsuarioContext);

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
          {usuarioLogueado ? (
            <span className={styles.navbarLink} onClick={signOutUsuario}>
              Salir
            </span>
          ) : (
            <Link className={styles.navbarLink} to="/acceder">
              Acceder
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
