import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Styles from "../styles.js/Nav.styles.js"
import "../styles/nav.css"
// import Button from '@material-ui/core/Button';

function Nav() {
    const clases = Styles();
    return (
        <div>
            <AppBar position="fixed" className={clases.Nav}>
                <Toolbar>
                       <div className="ul">
                            <ul className="ul__nav">
                                <a href="#hola"><li>Inicio</li></a>
                                <a href="#services"><li>Servicios</li></a>
                                <a href="#services"><li>Logros</li></a>
                                <a href="#services"><li>Contacto</li></a>
                                <a href="#services"><li>Reservar online</li></a>
                            </ul>
                       </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav