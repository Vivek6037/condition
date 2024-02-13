import React, { useState } from 'react';
import './App.css';

function App() {
  const [login,setlogin]=useState(true)

  //first method
  // consitional randering ma conditional par chale che jo condition true thay to sachu statement print thay che .

  // if(login){
  //   return 'please welcome'
  // }
  // else{
  //   return "plese go out"
  // }

// second method 
  return (
    <>
    
      {/* { login && 'hello world' ||  'hello creative'} */}


    </>



  );
}

export default App;
