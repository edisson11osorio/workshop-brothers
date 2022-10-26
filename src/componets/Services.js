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
            <div id="servi" className="container-services">
                <div>
                    <section className="lijas"></section>
                    <div className="icons-services">
                        <BuildIcon className={clases.BuildIcon}></BuildIcon>
                        <FilterVintageIcon className={clases.FilterIcon}></FilterVintageIcon>
                        <FormatPaintIcon className={clases.PaintIcon}></FormatPaintIcon>
                    </div>
                    <div className="text-services">
                        <p>
                          <h3 className="services__p-1">REPARACIONES</h3>
                          Reparaciones generales,<br/>
                          reparaciones especiales<br/>
                          & partes antiguas
                        </p>
                        <p>
                        <h3 className="services__p-2">TAPICERÍA</h3>
                        Amplia variedad de telas,<br/>
                        incluyendo cueros vintage,<br/> 
                        & muchas opciones de colores<br/>
                        </p>
                        <p>
                        <h3 className="services__p-3">PINTURA</h3>
                         Pintura en aerosol, Stencilling <br/>
                         personalizado & amplia variedad <br/>
                         de trabajo artesanal
                        </p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Services