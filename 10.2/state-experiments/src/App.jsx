import { createContext, useContext, useState } from 'react'

const bulbContext = createContext();
let BulbProvider = ({children})=>{
  const [isOn,setOn] = useState(true);
  return <bulbContext.Provider value={{
    isOn:isOn,
    setOn:setOn
  }}>
    {children}
  </bulbContext.Provider>
}

function App() {
  
  return (
    <>
      <div>
        <BulbProvider>
          <Light />
        </BulbProvider>
      </div>
    </>
  )
}
let Light = ()=>{
  // const [isOn,setOn] = useState(true);
  return <div>
    <LightBulb />
    <LightSwitch  />
  </div>
}
let LightBulb=()=>{
  let {isOn} = useContext(bulbContext);
  return <div>
    {isOn?"ON":"OFF"}
  </div>
}
let LightSwitch=()=>{
  const {isOn, setOn} = useContext(bulbContext);
  let toggleSwitch = ()=>{
    setOn(!isOn);
  }
  return <button onClick={toggleSwitch}>Toggle</button>
}

export default App
