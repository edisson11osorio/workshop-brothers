import React from "react";
import LogrosImages from "./LogrosImages.js"
import "../styles/logros.css"

function Logros(){
    return(
        <div className="container-logros">
            <h2>
                Logros
            </h2>
            <p>
                Una colección de autos renovados con pasión
            </p>
             <div className="logros-table">
              <LogrosImages>
              </LogrosImages>
             </div>

            <table className="logros-table__description">
                <h3>
                    Nosotros
                </h3>
                <p>
                   holsfafsfahfbafahbfa
                </p>
            </table>
        </div>
    )
}
export default Logros;
