import React, { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NewComponents } from './components/NewComponents';
import { Button } from './components/Button';
import { Filter } from "./components/Filter";

function App() {


  const topCars = [
    {manufacturer:'BMW', model:'m5cs', id:1},
    {manufacturer:'Mercedes', model:'e63s', id:2},
    {manufacturer:'Audi', model:'rs6', id:3}
  ]


    // const myFirstSubcriber = (event:MouseEvent<HTMLButtonElement>) => {
    //   console.log("Hello Im Alex")
    // }

    // const mySecondSubcriber = () => {
    //   console.log("Hello Im Ivan")
    // }

    const Button1Foo = (subscriber: string, age:number) => {
      console.log(subscriber, age)
    }

    const Button2Foo = (subscriber: string) => {
      console.log(subscriber)
    }

    const Button3Foo = () => {
      console.log("Stuped BUTTON")
    }

    // let a = 1;
    let[a, setA]= useState(1);

    const onClickHandler = () => {
      setA(++a)
 
      console.log(a)
    }

  return (
    <>
      <Header title={'qwer1234'} />
      <Footer title={'zxcv4321'} />
      <NewComponents cars={topCars} />
      <div className='App'>
        {/* <button onClick={() => {console.log("Hello")}}>Button</button> */}
        {/* <button onClick={() => onClickHandler('Vasya')}>Button2</button>
        <button onClick={() => onClickHandler('Ivan')}>Button3</button> */}
        <Button name={'MyYouNubeChanel-1'} callBack={()=>Button1Foo("I`m Vasya", 21)}/>
        <Button name={'MyYouNubeChanel-2'} callBack={()=>Button2Foo("I`m Alex")}/>
        <Button name={'Stuped BUTTON'} callBack={Button3Foo}/>

        {/* useState */}

        <div className='App'>
          <h1>{a}</h1>
          <button onClick={onClickHandler}>number</button>
        </div>
      </div>

      <Filter />
    </>
  );
}

export default App;


