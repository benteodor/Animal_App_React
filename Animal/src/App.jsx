import { useState } from 'react';
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { animals } from './animalsList';
import './App.css';

  function App() {
    console.log(animals);
    return (
      <>
    <Header/>
    <main>
      {animals.map((animal) => (<Card key ={animal.name} {...animal}  />
      ))}
    </main>
    <Footer />
  
    </>
);
}

export default App;




