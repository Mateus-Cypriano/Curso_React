import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(false);

    const[name, setName] = useState("Mateus")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é false</p>}

        <h1>If Ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>

        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Clique aqui!</button>
    </div>
  )
}

export default ConditionalRender