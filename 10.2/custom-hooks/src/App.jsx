import { useState } from "react"
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useEffect } from "react";

function useDebounceValue(input,delay=300){
  const [debouncedValue,setDebounceValue] = useState(input);
  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebounceValue(input);
    },delay);
    return ()=>{
      clearTimeout(handler);
    }
  })
  return debouncedValue;
}



function App() {
  const [val,setVal] = useState("");
  const debVal = useDebounceValue(val,2000);

  function change(e){
    setVal(e.target.value);
  }

  useEffect(()=>{
    console.log("expensive operation");
  },[debVal]);

  // const [count,setCount] = useState(0);
  // const [glitch,setGlitch] = useState(true);
  // const prev = usePrev(count);

  // const [postNumber,setPostNumber] = useState(1);
  // let {data,loading} = useFetch("https://jsonplaceholder.typicode.com/posts/"+postNumber);
  // if(loading){
  //   return <div>Loading.....</div>
  // }

  
  return (
    
    <div>
      {/* <button onClick={()=>setPostNumber(1)}>1</button>
      <button onClick={()=>setPostNumber(2)}>2</button>
      <button onClick={()=>setPostNumber(3)}>3</button>
      {data} */}
      {/* <button onClick={()=>setCount(count=>count+1)}>Click me {count}</button>
      <p>prev value of count was {prev}</p>
      <button onClick={()=>setGlitch(current=>!current)}>Cause Glitch</button> Reason implementation of usePrev is wrong */}

      <input type="text" onChange={change} />

    </div>
  )
}

export default App
