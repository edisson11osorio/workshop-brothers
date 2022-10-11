import React from 'react';
import Nav from "./componets/Nav"
import Redes from './componets/Redes';
import Services from './componets/Services';
import "./styles/principal.css"

function App() {
  return (
    <div className='Nav'>
      <Nav></Nav>

      <div className='h1__title'>
        <h1 className='h1__title-work'>WorkShop Brothers</h1>
      </div>
      <div className='container__redes-icons'>
        <Redes></Redes>
      </div>
      <div className='container__services-icons'>
        <Services></Services>
      </div>
    </div>
  )
}
export default App;
