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
            <div className="icons-services">
                <BuildIcon className={clases.BuildIcon}></BuildIcon>
                <FilterVintageIcon className={clases.FilterIcon}></FilterVintageIcon>
                <FormatPaintIcon className={clases.PaintIcon}></FormatPaintIcon>
            </div>
        <div className="container__text-services">
            <p>
              <b>REPARACIONES</b><br/>
              Reparaciones generales,<br/>
              reparaciones especiales<br/>
              & partes antiguas
            </p>
            <p>
            Amplia variedad de telas,<br/>
            incluyendo cueros vintage,<br/> 
            & muchas opciones de colores<br/>
            </p>
            <p>
             Pintura en aerosol, Stencilling <br/>
             personalizado & amplia variedad <br/>
             de trabajo artesanal
            </p>
        </div>
        </div>
    )
}

export default Services