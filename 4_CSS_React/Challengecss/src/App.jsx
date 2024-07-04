// import { useState } from 'react'

import './App.css'
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, marca:"VW", cor:"Vermelho", km:14000, newCar:false},
    {id: 2, marca:"Porsche", cor:"Preto", km:0, newCar:true},
    {id: 3, marca:"Fiat", cor:"Verde", km:2000, newCar:false},
    {id: 4, marca:"Toyota", cor:"Prata", km:300, newCar:false},
  ];

  return (
    <>
     <h1>Carros</h1>
     <div className="card-container">
     {cars.map((car) =>
        <CarDetails key={car.id}
        marca={car.marca}
        cor={car.cor}
        km={car.km}
        newCar={car.newCar}
      />
    )}
     </div>
    </>
  )
}

export default App
