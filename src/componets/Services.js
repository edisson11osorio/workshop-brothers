import React from "react";
import BuildIcon from '@material-ui/icons/Build';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import styles from '../styles.js/Services.styles.js'
import '../styles/services.css'

function Services(){
    const clases = styles()
    return(
        <div>
            <BuildIcon className={clases.BuildIcon}></BuildIcon>
            <FilterVintageIcon className={clases.FilterIcon}></FilterVintageIcon>
            <FormatPaintIcon className={clases.PaintIcon}></FormatPaintIcon>
        <div className="container__text-services">
            <p className="container__text-services--p">
                hola a todos klsdngvsjdkngsdlkngsdkjgbsdgdfgdfgdf
                hdfhdfghdfhgdfghbdf
                dfhd
                fhdhdfhdfhdfhdfhdfhdfhdfhdfhdfh
            </p>
            <p>
                hpña mis perros
                dhdfhdfhdfhdfhdfhdfhdfhdffffffffffffff
                hdfhdfhdfhdfhdfhdfhdfhdfhdfhdfdf
            </p>
        </div>
        </div>
    )
}

export default Services