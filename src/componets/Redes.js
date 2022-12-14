import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import styles from "../styles.js/Redes.styles.js"

function Redes(){
    const clases = styles();
    return(
        <div>
            <a href="https://www.instagram.com/" target="__BLANK"><InstagramIcon className={clases.instagram}></InstagramIcon></a>
            <a href="https://es-la.facebook.com/" target="__BLANK"><FacebookIcon  className={clases.facebook}></FacebookIcon></a>
            <a href="https://co.pinterest.com/" target="__BLANK"><PinterestIcon className={clases.pinterest}></PinterestIcon></a>
        </div> 
    )
}

export default Redes;