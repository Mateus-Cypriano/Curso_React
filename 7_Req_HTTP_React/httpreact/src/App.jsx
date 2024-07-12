// /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'

// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);
  

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //  1 - resgatando os dados
  // useEffect(() => {
  //   // O modelo da video aula não funcionou, tive que utilizar o async dentro
  //   // de uma função dentro do useEffect e não no useEffect em si. 
  //   async function fetchData() {
  //     // You can await here
  //     const res = await fetch(url)

  //     const data = await res.json()

  //     setProducts(data);
  //     // ...
  //   }
  //   fetchData()
  // }, []) // Or [] if effect doesn't need props or state

  // 2 - adicionando produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name, 
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST", 
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - carregamento dinâmico
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 refatorando post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
    

  };

  // desafio
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };
  

  


  return (
    <>
      <div className="App">
        <h1>Lista de Produtos:</h1>
        {/* 6 - loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
         <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        )}

        <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input 
              type="text" 
              value={name} 
              name="name" 
              onChange={(e) => setName(e.target.value)} 
              />
            </label>
            <label>
              Preço:
              <input 
              type="number" 
              value={price} name="price" 
              onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            {/* 7 - state de loading no POST */}
            {loading && <input type="submit" disabled value="Aguarde"/>}
            {!loading && <input type="submit" value="Criar"/>}
          </form>
        </div>

      </div>
  
    </>
  )
}

export default App
