import { useMemo, useState } from 'react'
import './App.css'
import { counterAtom } from './atoms/counter.js'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

function App() {

  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}

function Counter(){
  return(
    <div>
      <Increase/>
      <Decrease/>
      <Value />
    </div>
  )
}
function Increase(){
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={()=> setCount(c=>c+1)}>+</button>
}
function Decrease(){
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={()=> setCount(c=>c-1)}>-</button>
}
function Value(){
  const count = useRecoilValue
  (counterAtom);
  return (
    <div>
      {"Count : "+count} 
    </div>
  )
}

export default App
