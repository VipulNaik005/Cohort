import { createContext, useContext, useState } from 'react'
import './App.css'

const CountContext = createContext()
function CountContextProvider({children}){
  const [count,setCount] = useState(0)

  return(
    <CountContext.Provider value={{count,setCount}}>
      {children}
    </CountContext.Provider>
  )
}

function App() {

  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  )
}

function Increase(){
  const {setCount} = useContext(CountContext)
  return <button onClick={()=>setCount(c=>c+1)}>Inc</button>
}
function Decrease(){
  const {setCount} = useContext(CountContext)
  return <button onClick={()=>setCount(c=>c-1)}>Dec</button>
}
function Value(){
  const {count} = useContext(CountContext)
  return (
    <div>
      {"current count : "+count}
    </div>
  )
}
export default App
