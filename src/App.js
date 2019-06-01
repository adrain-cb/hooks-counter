import React, { useState } from 'react';

const App = props => {
  // Using more than necessary state to test hooks
  const [count, setCount] = useState(0);
  const [randColor, setRandColor] = useState("");
  const [randInt, setRandInt] = useState(0);

  const generateRandInt = () => {
    let randInt = Math.floor((Math.random() * 7)) + 1;
    setRandInt(randInt);
    console.log(randInt);
  }



  const determineColor = () => {
    generateRandInt();
    let colors = ["magenta", "orange", "green", "blue", "yellow", "black", "pink"];
    colors.forEach((color) => {
      if(randInt === colors.indexOf(color)){
        setRandColor(color);
      }
    })

    console.log(randColor)
  }

  const addOne = () => {
    setCount(count + 1)
  }

  const subtractOne = () => {
    setCount(count - 1)
  }

  let content = (
    <div> 
      <h1 className="text-center pt-5">Counter</h1>
      <div className="row">
        <button onClick={subtractOne} style={{position: "absolute", top: "20%", left: "50%"}}>-</button>
        <button onClick={addOne} style={{position: "absolute", top: "20%", right: "50%"}}>+</button>
      </div>
      

      <h1 className="text-center" style={{color: `${randColor}`}}>{count}</h1>
      <button onClick={determineColor} style={{position: "absolute", top: "50%", left: "45%", right: "45%"}}>Change color</button>

      

    </div>
  )

  return content;
}
export default App;
