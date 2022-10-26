import React from "react";
import LogrosImages from "./LogrosImages.js"
import Picture from "../images/form.png"
import Form from "./Form.js";
import "../styles/logros.css"

function Logros(){
    return(
        <main>
            <div className="container-logros">
                <div>
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

                    <section className="backgroud">        
                    </section>
                    <table className="logros-table__description">
                            <h3>
                            Nosotros
                            </h3>
                            <p>
                            </p>
                    </table>
                    <div className="picture-form">
                        <img src={Picture} alt=""/>
                    </div>
                    <table className="table-car">
                           <Form></Form>
                    </table>
                </div>
            </div>
        </main>
    )
}
export default Logros;
