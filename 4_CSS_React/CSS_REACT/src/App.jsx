import { useState } from 'react'
import './App.css'
import MyComponents from './components/MyComponents' 
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Mateus")
  const redTitle = true;
  

  return (
    <>
      {/* CSS Global */}
      <h1>React Com CSS</h1>
      {/* CSS Componente */}
      <MyComponents/>
      <p>Este paragrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS Inline Dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Mateus" ? ({color: "green", backgroundColor:"#000"}) : null}>
        CSS dinâmico
      </h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS Modules */}
      <Title/>
    </>
  )
}

export default App
