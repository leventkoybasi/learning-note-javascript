//UseState => durum bil;gisi ve durum bilgisini degistirecek fonksiyon

import { useState } from "react";

export default function AppWithState() {
  // let counter = 0;
  function exampleFunc(default) {
    let item = default
    function changeItem(default) {
      
    }
    return [item]
  }

  function handleClick() {
    console.log("HandleClick Buttonuna Tiklandi...");
    counter += 1;
    console.log(counter);
  }

  return (
    <>
      <h1>State Konusunu Burada Isliyoruz...</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={() => console.log("OnClick Buttona Tiklandi...")}>
        Counter Bilgisini Arttir
      </button>
      <button onClick={handleClick}>Counter Bilgisini Arttir</button>
    </>
  );
}
