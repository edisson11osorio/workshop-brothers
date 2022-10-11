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
                                <li className="ul__nav-li">Inicio</li>
                                <li className="ul__nav-li">hola</li>
                                <li className="ul__nav-li">gracias</li>
                                <li className="ul__nav-li">adios</li>
                            </ul>
                       </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav