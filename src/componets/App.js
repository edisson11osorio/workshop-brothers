import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Principal from "../Principal"

function App (){
    return(
            <Router>
                <Routes>
                    <Route path="#" exact element={<Principal/>}></Route>
                </Routes>
            </Router>
    )
}

export default App;