import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Styles from "../styles.js/Nav.styles.js"
import "../styles/nav.css"
// import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Nav() {
    const clases = Styles();
    return (
        <div>
            <AppBar position="fixed" className={clases.Nav}>
                <Toolbar>
                    <div className="nav-li">
                        <li>
                            <Link to="/">
                               <ul>Inicio</ul>
                            </Link>
                            <Link to="/">
                                <ul>Servicios</ul>
                            </Link>
                            <Link to="/">
                                <ul>Logros</ul>
                            </Link>
                            <Link to="/">
                                <ul>Contacto</ul>
                            </Link>
                            <Link to="/">
                                <ul>Reservar online</ul>
                            </Link> 
                          </li>
                    </div> 
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav