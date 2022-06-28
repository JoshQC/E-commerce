import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as Logo } from "./../../../assets/crown.svg";
import { UsuarioContext } from "../../../contexts/usuarios";
import { CarritoContext } from "../../../contexts/carrito";
import { signOutUsuario } from "../../../utils/firebase/firebase";

import Carrito from "../../Carrito/Carrito";

//Modulos de SASS: el archivo como objeto
import styles from "./NavBar.module.scss";
import DropdownCarrito from "../../Carrito/DropdownCarrito/DropdownCarrito";

const NavBar = () => {
  const { usuarioLogueado } = useContext(UsuarioContext);
  const { mostrarCarrito } = useContext(CarritoContext);

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
          <Carrito />
        </div>
        {mostrarCarrito && <DropdownCarrito />}
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
