import './App.css'
import Ola from './components/ola'
import City from './assets/city.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment'
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 3434},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 250},
  ];

  function showMessage() {
    console.log("Evento componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const people = [
    {id: 1, nome: "Mateus", idade: 27, profissão:"Programador"},    
    {id: 2, nome: "Amanda", idade: 28, profissão:"Professora"},
    {id: 3, nome: "João", idade: 14, profissão:"Estudante"},
  ];

  return (
    <>
      <Ola/>
      {/* imagem em public */}
      <div>
        <img src = "/img1.jpg" alt="Paisagem"></img>
      </div>
      {/* imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name="Mateus" />
      {/* destruturing */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>
      {/* Reaproveitamento */}
      <CarDetails brand="Ford" color="vermelho" km={0} newCar={true}/>
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false}/>
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id}
        brand={car.brand} 
        color={car.color}
        km={car.km} 
        newCar={car.newCar} />
      ))}
      {/* Fragment */}
      <Fragment propFragment="teste"/>
      {/* Children */}
      <Container valor="teste1">
        <p>E este é o conteudo</p>
      </Container>
      <Container valor="teste2">
        <h5>Testando o container</h5>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage}/ >
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* Desafio */}
      {people.map((people) => (
        <UserDetails key={people.id}
        nome={people.nome}
        idade={people.idade}
        profissão={people.profissão}
        />
      ))}

    </>
  )
}

export default App
