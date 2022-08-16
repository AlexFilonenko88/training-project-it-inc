import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewComponents } from './components/NewComponents';

function App() {

  const topCars = [
    {manufacturer:'BMW', model:'m5cs', id:1},
    {manufacturer:'Mercedes', model:'e63s', id:2},
    {manufacturer:'Audi', model:'rs6', id:3}
  ]

  return (
    <>
      <Header title={'qwer1234'} />
      <Footer title={'zxcv4321'} />
      <NewComponents cars={topCars} />
    </>
  );
}

export default App;


