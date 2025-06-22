import { useState } from 'react'
import './App.css'

function App() {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <input 
        type="number" 
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value)) {
            let tempSum = value * (value + 1) / 2;
            setSum(tempSum);
          } else {
            setSum(0);
          }
        }} 
      />
      <p>Sum is {sum}</p>
      <button onClick={() => setCount(count + 1)}>Counter ({count})</button>
    </>
  );
}

function CardWrapper({f}){
  return(
    <div style={{border:"2px solid black"}}>
      {f}
    </div>
  )
}
function Todo({title,description}){
  return(
    <>
    <h3>{title}</h3>
    <h6>{description}</h6>
    </>
  )
}
function Header({title}){
  return(
    <div>
      <h1>{title}</h1>
    </div>
  )
}
function Button(){
  const [count,setCount] = useState(0);
  function onButtonClick(){
    setCount(count+1);
  }
  return(
    <>
    <button onClick={onButtonClick}>Count : {count}</button>
    </>
  )
}

export default App
