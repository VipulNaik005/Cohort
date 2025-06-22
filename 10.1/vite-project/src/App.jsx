import { useRef, useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route,Link, Links, Outlet } from 'react-router-dom'

function App() {
  // const inputRef = useRef();
  // const focus = ()=>{
  //   inputRef.current.focus();
  // }

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route path='/neet/class11' element={<Class11/>} />
          <Route path='/neet/class12' element={<Class12/>} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* useRef */}
      {/* <input type="text" name="" id="" ref={inputRef} />
      <button onClick={focus}></button> */}
    </>
  )
}
let Class11 = ()=>{
  return(
    <div>
      Class 11th
    </div>
  )
}
let Class12 = ()=>{
  return(
    <div>
      Class 12
    </div>
  )
}
let Layout = ()=>{
  return <div>
  <Link to={'/neet/class11'} style={{margin:"5px"}}>Class 11</Link>
  <Link to={'/neet/class12'}>Class 12</Link>
  <Outlet />
  footer
  </div>
}

function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
function Button(){
  const [c,setC] = useState(0);
  return (
  <button onClick={()=>setC(c=>c+1)}>Click me</button>
);
}

export default App
